import React from 'react';

function home() {
    return (
        <div className="Home">
            <h1 id="name">Connor R. Sullivan</h1>
            <div id="main">
                <div id="top">
                    <div className="boxes">
                        text here
                    </div>
                    <div className="boxes">
                                <img src={require("./images/wut.PNG")}>
                                
                                </img>
                    </div>
                </div>
                <div className="stack">
                        <h1>
                            My Tech Stack
                        </h1>
                        <div className="techs">
                            <div className="tech">
                                <h3>
                                    tech 1
                                </h3>
                                <div>
                                    pic
                                </div>
                            </div>
                            <div className="tech">
                                <h3>
                                    tech 2
                                </h3>
                                <div>
                                    pic
                                </div>
                            </div>
                            <div className="tech">
                                <h3>
                                    tech 3
                                </h3>
                                <div>
                                    pic
                                </div>
                            </div>
                            <div className="tech">
                                <h3>
                                    tech 4
                                </h3>
                                <div>
                                    pic
                                </div>
                            </div>
                            <div className="tech">
                                <h3>
                                    tech 5
                                </h3>
                                <div>
                                    pic
                                </div>
                            </div>
                        </div>
                </div>
                <div className="bottom">
                    <h1>
                        Highlighted Work
                    </h1>
                    <div className="projects">
                        <div className="project">
                            <h3>
                                project 1
                            </h3>
                            <img src={require("./images/wut.PNG")}>
                                
                            </img>
                        </div>
                        <div className="project">
                        <img src={require("./images/wut.PNG")}>
                                
                                </img>
                            <h3>
                                project 2
                            </h3>
                        </div>
                        <div className="project">
                            <h3>
                                project 3
                            </h3>
                            <img src={require("./images/wut.PNG")}>
                                
                            </img>
                        </div>
                        <div className="project">
                            <img src={require("./images/wut.PNG")}>
                                
                            </img>
                            <h3>
                                project 4
                            </h3>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    );
  }
  
  export default home;