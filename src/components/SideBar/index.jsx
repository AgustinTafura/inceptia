import React, { useContext } from 'react'
import { ClientsContext } from '../../contexts/ClientsContext'
import './index.scss'


const SideBar = () => {

  const {clientSelected, setClientSelected, clientsList} = useContext(ClientsContext)
    
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3 text-center">
        <h5>CLIENTE/BOT</h5>
        <div className="btn-group-vertical" role="group">
          {
            clientsList?.map(client =>{
              return (
                <div key={client.id}>
                  <input type="radio" className="btn-check" name="btnradio"  autoComplete="off" />
                  <label 
                    id={client.id} className={`btn btn-outline-primary ${Number(clientSelected) === Number(client.id) && 'active'}`} htmlFor="btnradio" onClick={(e)=>setClientSelected(e.target.id)}
                  >
                    {client.name}
                  </label>
                </div>
              )
            })
          }
        </div>
      </div>
    </nav>
  )
}

export default SideBar