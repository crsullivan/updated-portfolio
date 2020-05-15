import React from 'react';


function about() {
    return (
        <div className="About">
            <div  className="About-Title">
                <p>A little bit about me...</p>
            </div>
            <div id="top">
                <div className="boxes">
                    <p>I was born and raised in Central and Southern Arizona, and throughout my life I have been passionate about solving problems, particularly logic problems and philosophy. Following this path, I ended up getting a degree in Criminology with a minor in Philosophy from NAU, and I went on to apply to my local Police Department. Throughout my training process and on into the academy however, my passion was still deeply rooted philosophy, particularly in logic, and I knew the best way for me to get back to what I really loved was web development. I enrolled in Lambda School to further pursue this dream, during my journey there I studied Web Development, and was tasked with building multiple collaborative projects and individual assignments and assessments. These projects consisted of everything from a user friendly marking page for a web application, up to a fully fledged web application produced with react and connected to a fully deployed database and backend. Now, a year from that initial realization, I have completed my Full Stack Web Development endorsement from Lambda School and am ready to step full time into the world of Full Stack Web Development and continue to solve problems and build amazing things. </p>
                </div>
                <div className="boxes">
                    <img src={require("./images/cs1.jpg")} />           
                </div>
            </div>
        </div>    
    );
  }
  
  export default about;