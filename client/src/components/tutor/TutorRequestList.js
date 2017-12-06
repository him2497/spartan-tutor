import React from 'react';
import TutorRequestCard from './TutorRequestCard'

export default function TutorRequestList({requests, deleteRequest}) {
  const renderRequests = (<div>
    {requests.reverse().map(request =>
      <TutorRequestCard request={request} deleteRequest={deleteRequest} key={request._id}/>)}
  </div>);

    return (
      <div>
        {renderRequests}
      </div>
    )
}
