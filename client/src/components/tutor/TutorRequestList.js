import React from 'react';
import TutorRequestCard from './TutorRequestCard'

export default function TutorRequestList({requests, deleteRequest, acceptRequest, user, type}) {
  const renderRequests = (<div>
    {requests.reverse().map(request => !request.accepted ?
      <TutorRequestCard request={request} deleteRequest={deleteRequest} type={type} user={user} acceptRequest={acceptRequest} key={request._id}/>
    : console.log("value is false"))}
  </div>);

    return (
      <div>
        {renderRequests}
      </div>
    )
}
