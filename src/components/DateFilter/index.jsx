import React from 'react'
import DatePicker from "react-datepicker";
import './style.scss'

const DateFilter = (props) => {
  return (
    <div className="btn-group me-2" role="group" aria-label="Basic example">
        <DatePicker
             dateFormat="dd/MM/yyyy"
            selected={props.startDate===" " ? null : props.startDate}
            onChange={(date) => props.setStartDate(date)}
            isClearable
            placeholderText="Fecha inicio"
            className="btn btn-sm btn-outline-secondary start-date"
        />

        <DatePicker
             dateFormat="dd/MM/yyyy"
            selected={props.endDate===" " ? null : props.endDate}
            onChange={(date) => props.setEndDate(date)}
            isClearable
            placeholderText="Fecha hasta"
            className="btn btn-sm btn-outline-secondary end-date"
        />
    </div>
  )
}

export default DateFilter