import React from 'react';

function about() {
    return (
        <div className="About">about here
            <div id="top">
                <div className="boxes">
                    text here
                </div>
                <div className="boxes">
                    <img src={require("./images/wut.PNG")} />            
                </div>
            </div>
        </div>    
    );
  }
  
  export default about;