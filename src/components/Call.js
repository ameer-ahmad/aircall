import React from 'react'
import "../css/call.css"
import missedCall from "../icons/call-slash.svg"
import answeredCall from "../icons/call.svg"
import voicemail from "../icons/Voicemail.svg"
import downArrow from "../icons/down-arrow.svg"
import archiveAdd from "../icons/archive-add.svg"

const Call = ({call, setVisibility, index, archiveCall}) => {

    const renderCallIcon = (callType) => {
        switch(callType) {
            case 'missed':
                return missedCall;
            case 'answered':
                return answeredCall;
            case 'voicemail':
                return voicemail;
            default:
                return '';
        }

    }

  return (
    <div className="call">
        <div className="callLeft">
            <img src={renderCallIcon(call.call_type)} alt={call.call_type} />
            <div className="callInfo">
                <p className="from">{call.from ? call.from : "Unknown"}</p>
                <p className="to">{call.to ? call.to : "Unknown"}</p>
            </div>
        </div>
        <div className="callRight">
            <img src={downArrow} alt="down arrow" onClick={() => setVisibility(index)} />
            <img src={archiveAdd} alt="archive add" onClick={() => archiveCall(index)}/>
        </div>
    </div>
  )
}

export default Call