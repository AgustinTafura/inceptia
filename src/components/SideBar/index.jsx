import React, { useState } from 'react'
import './index.scss'

const SideBar = () => {

    const [botActive, setBotActive] = useState()

  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            {botActive}
            <div className="position-sticky pt-3 text-center">
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