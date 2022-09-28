import React, {useEffect, useState} from 'react'
import Axios from "axios"
import Call from './Call'
import MoreInfo from "./MoreInfo"
import "../css/activityFeed.css"

const ActivityFeed = () => {

    const [calls, setCalls] = useState([])
    const [archives, setArchives] = useState([])
    const [moreDetailsVisibility, setMoreDetailsVisibility] = useState([])
    const [isArchiveScreen, setIsArchiveScreen] = useState(false)
    
    useEffect(() => {
        Axios.get("https://aircall-job.herokuapp.com/activities").then((res) => {
            setCalls(res.data)

            // Set all calls more detail visibility to false
            let tempArr = []
            for (let i = 0; i<res.data.length; i++) {
                tempArr = [...tempArr, false]
            }
            setMoreDetailsVisibility([...tempArr])
        })
        
    }, [])
    

    const viewMoreDetails = (i) => {
        setMoreDetailsVisibility(prev => {
            let tempArr = [...prev]
            tempArr[i] = !tempArr[i]
            return tempArr
        })
    }

    const archiveCall = (i) => {
        let archive = calls[i]
        let tempArr = calls.filter(el => el !== archive)
        setArchives(prev => [...prev, archive])
        setCalls(tempArr)
        console.log(calls, archives)
    }

  return (
    <div className="activityFeed">
        <div className="btnContainer">
            <button className={isArchiveScreen ? "btnToggle" : "btnToggle active"} onClick={() => setIsArchiveScreen(false)}>Activity</button>
            <button className={isArchiveScreen ? "btnToggle active" : "btnToggle"} onClick={() => setIsArchiveScreen(true)}>Archives</button>
        </div>
        {isArchiveScreen ?
            archives.map((archive, pos) => (
                <div className="callContainer" key={pos}>
                    <Call call={archive} setVisibility={viewMoreDetails} index={pos} />
                    <MoreInfo call={archive} visibility={moreDetailsVisibility} index={pos} />
                </div>
            ))
         : calls.map((call, pos) => (
            <div className="callContainer" key={pos}>
                <Call call={call} setVisibility={viewMoreDetails} index={pos} archiveCall={archiveCall} />
                <MoreInfo call={call} visibility={moreDetailsVisibility} index={pos} />
            </div>
        ))} 
        
    </div>
  )
}

export default ActivityFeed