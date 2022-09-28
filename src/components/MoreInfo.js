import React, { useState, useEffect } from 'react'

const MoreInfo = ({call}) => {

    const [date, setDate] = useState(call.created_at.slice(0, 10))
    const [time, setTime] = useState(call.created_at.slice(11, 19))

  return (
    <div className="moreInfo">
        <p>{date}</p>
        <p>{time} {call.direction === "inbound" ? `Incoming Call From ${call.from}` : `Outgoing Call To ${call.to}`}</p>
        <p>via {call.via}</p>
        <p>{call.duration} seconds</p>
    </div>
  )
}

export default MoreInfo