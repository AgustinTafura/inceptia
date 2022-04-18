import React, { useContext, useEffect, useState } from 'react'
import { ClientsContext } from '../../contexts/ClientsContext'
import DateFilter from "../DateFilter/index";


const CasesTable = () => {

    const {clientSelected, casesData, fetchCasesData} = useContext(ClientsContext)
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (startDate && endDate){
            fetchCasesData(clientSelected, startDate, endDate, 1)
            setCurrentPage(1)
        }
    }, [startDate, endDate])
    


    if (clientSelected === undefined) { return <div>Seleciona un Cliente de la lista</div>}

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
                <h4>Detalle dashboard</h4>
                <div className="d-flex">
                    <i className="fa fa-calendar fa-lg align-self-center me-2"></i>
                    <DateFilter startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Gestionado</th>
                            <th scope="col">ID Caso</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">DNI</th>
                            <th scope="col">Grupo</th>
                            <th scope="col">Orden</th>
                            <th scope="col">Llamada</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            casesData?.results?.map((event, index)=>{  
                                return (
                                    <tr key={Math.random()}>
                                        <td>{event.last_updated}</td>
                                        <td>{event.id}</td>
                                        <td>{event.phone}</td>
                                        <td>{event.extra_metadata.id}</td>
                                        <td>{event.extra_metadata.group}</td>
                                        <td>{event.extra_metadata.orden}</td>
                                        <td>{event.case_duration}</td>
                                        <td>{event.case_result.name}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

                {
                    casesData?.results.length > 0 && (

                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                {
                                    casesData.previous && (
                                        <li className="page-item">
                                            <a className="page-link" href="/"
                                                onClick={(e)=>{e.preventDefault(); fetchCasesData(clientSelected, startDate, endDate, Number(currentPage)-1); setCurrentPage(currentPage-1)}}
                                            >
                                                Previous
                                            </a>
                                        </li>
                                    )

                                }
                                <li className="page-item"><a className="page-link" href="/" onClick={(e)=>{e.preventDefault();}}>{currentPage}</a></li>
                                {
                                    casesData.next && (
                                        <li className="page-item">
                                            <a className="page-link" href="/" 
                                                onClick={(e)=>{e.preventDefault(); fetchCasesData(clientSelected, startDate, endDate, currentPage+1); setCurrentPage(currentPage+1); }}
                                            >
                                                    Next
                                            </a>
                                        </li>
                                    )
                                }
                            </ul>
                        </nav>
                    )
                }        
            </div>
        </>
  )
}

export default CasesTable