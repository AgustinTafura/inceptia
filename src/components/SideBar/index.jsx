import React, { useContext } from 'react'
import { BotsContext } from '../../contexts/BotsContext'
import './index.scss'


const SideBar = ({setBotActive}) => {

  const {clientsList} = useContext(BotsContext)
    
  
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3 text-center">
        <h5>CLIENTE/BOT</h5>
        <div className="btn-group-vertical" role="group" aria-label="Basic radio toggle button group" onChange={(e)=>
          setBotActive(e.target.id)}>
          {
            clientsList?.map(client =>{
              return (
                <>
                  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
                  <label className="btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>
                </>
              )
            })
          }
        </div>
      </div>
    </nav>
  )
}

export default SideBar