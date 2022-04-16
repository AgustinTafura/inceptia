import React from 'react'
import './index.scss'

const SideBar = ({setBotActive}) => {

    

  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 text-center">
                <h5>CLIENTE/BOT</h5>
                <div className="btn-group-vertical" role="group" aria-label="Basic radio toggle button group"  onChange={(e)=>setBotActive(e.target.id)}>
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
                    <label className="btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                    <label className="btn btn-outline-primary" htmlFor="btnradio2">Radio 2</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                    <label className="btn btn-outline-primary" htmlFor="btnradio3">Radio 3</label>
                </div>
            </div>
          </nav>
  )
}

export default SideBar