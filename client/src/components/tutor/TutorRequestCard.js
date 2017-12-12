import React from 'react';
import {Link} from 'react-router-dom'

export default function TutorRequestCard ({request, deleteRequest, acceptRequest, user}){
  return(
    <div>
      <div className="card blue-grey darken-1" key={request._id}>
        <div className="card-content white-text">
          <span className="card-title">{request.subject}</span>
          <p>{request.question}</p>
          <p className="right">Sent on: {new Date(request.datePosted).toLocaleDateString()}</p>
        </div>
        <div className="card-action" style={{paddingBottom: '30px'}}>
          <a>By: {request.userName}</a>
          <button className="green right black-text btn-flat" style={{marginLeft: '5px'}}
            onClick={() => acceptRequest(request._id)}>
            Accept
          </button>
          <Link to={`/tutor/requests/comments/${ request._id }/${ request.question }/${user}`}>
            <button className="yellow right black-text btn-flat" style={{marginLeft: '5px'}}>
              Chat
            </button>
          </Link>
          <button className="red right black-text btn-flat" onClick={() => deleteRequest(request._id)}>
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
