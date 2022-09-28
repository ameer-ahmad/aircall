import React from 'react'
import "../css/moreInfo.css"

const MoreInfo = ({call, visibility, index}) => {

  return (
    <div className={visibility[index] ? "moreInfo show" : "moreInfo"}>
        <p className="date">{call.created_at.slice(0, 10)}</p>
        <p className="time">{call.created_at.slice(11, 19)} <span className="direction">{call.direction === "inbound" ? `Incoming Call From ${call.from}` : `Outgoing Call To ${call.to}`}</span></p>
        <p>via {call.via}</p>
        <p className="duration">{call.duration} seconds</p>
    </div>
  )
}

export default MoreInfo