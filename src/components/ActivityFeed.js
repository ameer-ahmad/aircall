import React, {useEffect, useState} from 'react'
import Axios from "axios"
import Call from './Call'
import MoreInfo from "./MoreInfo"
import "../css/activityFeed.css"

const ActivityFeed = () => {

    const [calls, setCalls] = useState([])
    
    useEffect(() => {
        Axios.get("https://aircall-job.herokuapp.com/activities").then((res) => {
            setCalls(res.data)
        })
    })

  return (
    <div className="activityFeed">
        {calls.map((call, pos) => (
            <div className="callContainer" key={pos}>
                <Call call={call} />
                <MoreInfo call={call}/>
            </div>
        ))}
    </div>
  )
}

export default ActivityFeed