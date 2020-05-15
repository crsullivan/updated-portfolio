import React from 'react';


function about() {
    return (
        <div className="About">
            <div  className="About-Title">
                <p>A little bit about me...</p>
            </div>
            <div id="top">
                <div className="boxes">
                    <p>I was born and raised in Central and Southern Arizona. After my High School graduation, I made the decision to continue my education at Northern Arizona University, in Flagstaff, AZ. Originally I studied Forestry, with a focus on Fire Ecology and Forest Health and Restoration. However, after two years it became obvious to me that that wasn't where my future was headed. Ultimately, I ended up getting a degree in Criminology with a minor in Philosophy from NAU. After my graduation from NAU I moved back to my hometown, where I trained and went through the application process for my local Police Department. This was all fine and good, however my passion was still in philosophy, specifically it was in logic, and I knew the best way for me to get back to what I really loved was web development. A year from then and I would be achieving one of the greatest goals in my lifetime, an endorsement from Lambda School for that very thing. </p>
                </div>
                <div className="boxes">
                    <img src={require("./images/cs1.jpg")} />           
                </div>
            </div>
        </div>    
    );
  }
  
  export default about;