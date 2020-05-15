import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function home() {
    return (
        <div className="Home">
            <div className="Head">
                <div id="name">Connor R. Sullivan
                    <h2 className="Title">
                        Full Stack Web Developer
                        <p className="Email">crsullivan@protonmail.com</p>
                    </h2>
                </div>
                <div className="A">
                    <a target="_blank" rel="noopener noreferrer" class="fab fa-github fa-5x" href="https://github.com/crsullivan"></a>
                    <a target="_blank" rel="noopener noreferrer" class="fab fa-linkedin-in fa-5x" href="https://www.linkedin.com/in/connor-ryan-sullivan/"></a>
                </div>
            </div>
            <div className="main">
                <div className="stack">
                        <h1>
                            My Tech Stack
                        </h1>
                        <div className="techs">
                            <div className="tech">
                                <h3>
                                    HTML
                                </h3>
                                <i class="fas fa-code fa-3x"></i>
                            </div>
                            <div className="tech">
                                <h3>
                                    CSS
                                </h3>
                                <i class="fab fa-css3-alt fa-3x"></i>
                            </div>
                            <div className="tech">
                                <h3>
                                    JavaScript
                                </h3>
                                <i class="fab fa-js-square fa-3x"></i>
                            </div>
                            <div className="tech">
                                <h3>
                                    React
                                </h3>
                                <i class="fab fa-react fa-3x"></i>
                            </div>
                            <div className="tech">
                                <h3>
                                    Redux
                                </h3>
                                <i class="fas fa-exchange-alt fa-3x"></i>
                            </div>
                        </div>
                        <div className="techs">
                            <div className="tech">
                                <h3>
                                    NodeJS
                                </h3>
                                <i class="fab fa-node fa-3x"></i>
                            </div>
                            <div className="tech">
                                <h3>
                                    Express
                                </h3>
                                <i class="fas fa-train fa-3x"></i>
                            </div>
                            <div className="tech">
                                <h3>
                                    SQL
                                </h3>
                                <i class="fas fa-database fa-3x"></i>
                            </div>
                            <div className="tech">
                                <h3>
                                    Knex
                                </h3>
                                <i class="fas fa-praying-hands fa-3x"></i>
                            </div>
                            <div className="tech">
                                <h3>
                                    Python
                                </h3>
                                <i class="fab fa-python fa-3x"></i>
                            </div>
                        </div>
                </div>
                <div className="bottom">
                    <h1>
                        Highlighted Work
                    </h1>
                    <div className="projects">
                        <div className="project">
                            <div className="Description">
                                <h1>
                                    <a className="Project-title" target="_blank" rel="noopener noreferrer" href="https://omega2020.netlify.app/">
                                        Omega2020 Sudoku App
                                    </a>
                                    <a className="Gitlink" target="_blank" rel="noopener noreferrer" class="fab fa-github" href="https://github.com/crsullivan/omega2020-fe"></a>
                                </h1>
                                <p>

                                - React, HTML, MaterialUI, NodeJs, Express, PostgreSQL, Collaboration<br></br>

                                <br></br>Omega2020 is a full stack Sudoku web app that offers guests thousands of different puzzles and members the ability to save a puzzle and come back to it later. This project involved remote collaboration with a team of three Web Developers, one UX/UI Designer and three Data Scientists over the course of eight weeks.<br></br>
                                <br></br>- Solely responsible for Database design and development.
                                <br></br>- Integrated with an API on Amazon Web Services, built by the Data Science team which provides endpoints to the user to sort through puzzles by difficulty through our pipeline.
                                <br></br>- Utilizes React hooks to integrate 5 different themes the user can choose from.
                                </p>
                            </div>
                            <img src={require("./images/sudokuGif.gif")}>
                                
                            </img>
                        </div>
                        <div className="project">
                            <img src={require("./images/sleepmoodGif.gif")} />
                                <div className="Description">
                                    <h1>
                                        <a className="Project-title" target="_blank" rel="noopener noreferrer" href="https://sleepmood.netlify.app/">
                                            SleepMood UI
                                        </a>
                                        <a className="Gitlink" target="_blank" rel="noopener noreferrer" class="fab fa-github" href="https://github.com/crsullivan/User-Interface-1"></a>
                                    </h1>
                                    <p>
                                    - Fully Responsive, HTML, LESS, Collaboration <br></br>
                                    
                                    <br></br>Marketing Page for the Sleep Mood web application built as part of Lambda School curriculum. This project involved close remote collaboration with a team of two other Web Developers and a UX/UI Designer.

                                  <br></br>
                                    <br></br>- Led collaboration between team mates and program manager; ensuring each team member knew their daily tasks and how to complete them.
                                    <br></br>- Met with UX/UI Designer on a daily basis to discuss improvements, concerns, new ideas and general design implementation.
                                    <br></br>- Utilized LESS CSS to create a fully responsive UI for desktop use, with media queries for mobile use.
                                    </p>
                                </div>
                        </div>
                        <div className="project">
                            <div className="Description">
                                <h1>
                                    <a className="Project-title" target="_blank" rel="noopener noreferrer" href="https://carbon-tracker.now.sh/">
                                        Carbon Tracker
                                    </a>
                                    <a className="Gitlink" target="_blank" rel="noopener noreferrer" class="fab fa-github" href="https://github.com/crsullivan/carbon-tracker"></a>
                                </h1>
                                <p>
                                - React, Redux, API Integration, React-Vis<br></br>
                                
                                <br></br>React Redux web app with Carbon intensity API integration and a graph library.


                                This is a small, solo project built to showcase how Redux juggles API data.<br></br>
                                <br></br>- Developed and deployed on Vercel within two days.
                                <br></br>- React-Vis integration to provide data visualization.
                                </p>
                            </div>
                            <img src={require("./images/carbontracker.PNG")}>
                                
                            </img>
                        </div>
                        <div className="project">
                            <img src={require("./images/spidergraphtables.PNG")}>
                                
                            </img>
                            <div className="Description">
                                <h1>
                                    <a className="Project-title" target="_blank" rel="noopener noreferrer" href="https://github.com/crsullivan/spider-graph-backend">
                                        Spider Graph Back End
                                    </a>
                                    <a className="Gitlink" target="_blank" rel="noopener noreferrer" class="fab fa-github" href="https://github.com/crsullivan/spider-graph-backend"></a>
                                </h1>
                                <p>
                                - NodeJS, Express, Knex<br></br>

                                <br></br>Backend for the Spider Graph Lambda School build week project. 

                                Collaborated remotely with one other developer to bring to scale and deploy a complex database on Heroku used to read, write, edit and delete data used for spider graphs.<br></br>

                                <br></br>- Worked closely with a Frontend team to develop a data structure conducive to their development.
                                <br></br>- Fully documented and tested.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    );
  }
  
  export default home;