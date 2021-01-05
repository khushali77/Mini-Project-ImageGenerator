import React from "react";

function DisplayImage({url,load}){
    return(
        <div className="display">
            {load? <h5>Loading...</h5>:<img src={url} alt="" className="image"></img>}
        </div>
    );
}

export default DisplayImage;