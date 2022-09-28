import React, {useEffect, useState} from 'react'
import Axios from "axios"
import Call from './Call'
import MoreInfo from "./MoreInfo"
import "../css/activityFeed.css"

const ActivityFeed = () => {

    const [calls, setCalls] = useState([])
    const [moreDetailsVisibility, setMoreDetailsVisibility] = useState([])
    
    useEffect(() => {
        Axios.get("https://aircall-job.herokuapp.com/activities").then((res) => {
            setCalls(res.data)

            let tempArr = []
            for (let i = 0; i<res.data.length; i++) {
                tempArr = [...tempArr, false]
            }
            setMoreDetailsVisibility([...tempArr])
        })
        
    }, [])
    

    const viewMoreDetails = (i) => {
        setMoreDetailsVisibility(prev => {
            const tempArr = [...prev]
            tempArr[i] = !tempArr[i]
            return tempArr
        })
    }

  return (
    <div className="activityFeed">
        {calls.map((call, pos) => (
            <div className="callContainer" key={pos}>
                <Call call={call} setVisibility={viewMoreDetails} index={pos} />
                <MoreInfo call={call} visibility={moreDetailsVisibility} index={pos} />
            </div>
        ))}
    </div>
  )
}

export default ActivityFeed