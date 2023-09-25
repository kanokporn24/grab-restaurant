import React from "react";
import ".../Component.css"
export default Comment = (props)=>{
    return(
        <div className="dialogbox">
            <div className="body">
                <span className="tip tip-up">
                </span>
                <div className="message">
                    <span>
                        <b>{props.userID}</b>
                        {props.message}
                    </span>
                </div>
            </div>
        </div>
    )
}