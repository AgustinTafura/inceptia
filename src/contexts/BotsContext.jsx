import { createContext, useState, useEffect} from "react";
import axios from 'axios'


export const BotsContext = createContext();

export const BotsProvider = ({children}) => {

    const [clientsList, setClientsList] = useState()
    
    useEffect(() => {

        getClients()        
    }, [])
    
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
            console.log(error)
        }
    }

    async function getClients() {
        try {
            const user = await login("reactdev@iniceptia.ai","4eSBbHqiCTPdBCTj")
            const JWToken = user.token
            console.log(JWToken)
            const response = await axios.get(`https://admindev.inceptia.ai/ /api/v1/clients/`, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: "JWT " + JWToken
                },
            })

            setClientsList(response.data)
        } catch (error) {
            console.log( error)
        }
    }

    return (
        <BotsContext.Provider value={{clientsList}}>
            {children}
        </BotsContext.Provider>
    )
}
