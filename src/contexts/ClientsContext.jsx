import { createContext, useState, useEffect} from "react";
import axios from 'axios'


export const ClientsContext = createContext();

export const ClientsProvider = ({children}) => {

    const [clientsList, setClientsList] = useState()
    const [clientSelected, setClientSelected] = useState()
    const [casesData, setCasesData] = useState()
    const [JWToken, setJWToken] = useState()

    useEffect(() => {
        getClients()        
    }, [])

    useEffect(() => {
        if (clientSelected) {
            fetchCasesData(clientSelected)
        } 
        
    }, [clientSelected])

    async function fetchCasesData(clientId, startDate, endDate, page = 1){
        const cases = await getClientCases(clientId, startDate, endDate, page)
        setCasesData(cases)
    }
    
    async function login(email,password) {
        try {
            const response = await axios.post(`https://admindev.inceptia.ai/api/v1/login/`,{
                headers: {
                    'Content-Type': 'application/json'
                },
                email,
                password,
                
            })
            
            return response.data
        } catch (error) {
            console.log( 'login' ,error)
        }
    }

    async function getClients() {
        try {
            const user = await login("reactdev@iniceptia.ai","4eSBbHqiCTPdBCTj")
            setJWToken(user.token)
            const response = await axios.get(`https://admindev.inceptia.ai/api/v1/clients/`, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: "JWT " + user.token
                },
            })
            setClientsList(response.data)
        } catch (error) {
            console.log('getClients', error)
        }
    }

    async function getClientCases(clientId, startDate, endDate, page = 1){
        try {
            const local_updated__date__gte = startDate ? new Date(startDate).toISOString().split('T')[0]: '2000-01-01'
            const local_updated__date__lte = endDate? new Date(endDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]

            const url = `https://admindev.inceptia.ai/api/v1/inbound-case/?client=${clientId}&local_updated__date__gte=${local_updated__date__gte}&local_updated__date__lte=${local_updated__date__lte}&page=${page}`
            const response = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: "JWT " + JWToken,
                },
            })
            
            return response.data
        } catch (error) {
            console.log('getClientCases', error)
        }
    }

    return (
        <ClientsContext.Provider value={{clientSelected, setClientSelected, clientsList, casesData, fetchCasesData}}>
            {children}
        </ClientsContext.Provider>
    )
}
