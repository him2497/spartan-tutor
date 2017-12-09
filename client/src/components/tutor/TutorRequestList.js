import React from 'react';
import TutorRequestCard from './TutorRequestCard'

export default function TutorRequestList({requests, deleteRequest, acceptRequest}) {
  const renderRequests = (<div>
    {requests.reverse().map(request =>
      <TutorRequestCard request={request} deleteRequest={deleteRequest} acceptRequest={acceptRequest} key={request._id}/>)}
  </div>);

    return (
      <div>
        {renderRequests}
      </div>
    )
}
