import React from 'react'

export default ({ input, label, meta: {error, touched} }) => {
    return(
      <div>
        <label>{label}</label>
        {label === "Date for the tutoring request" ? <input {...input} type="date" style={{marginBottom: '5px'}}/> : <input {...input} style={{marginBottom: '5px'}}/>}
        {/* <input {...input} style={{marginBottom: '5px'}}/> */}
        <div className="red-text" style={{marginBottom: '20px'}}>
          {touched && error}
        </div>
      </div>
    )
}
