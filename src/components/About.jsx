import React from "react";
import image from './images/image-id.png';
import './About.css';

export const About=()=>{
    return(
        <>
        <div className="container container-fluid">
           <div className="details">
            <div className="details-content ">
               <div className="self-intro container">
                    <div className="d-lg-flex flex-row">
                        <div className="col btn-image-con">
                            <div className="image-content">
                            <img className="img-id img-fluid" src={image} alt="" />
                            </div>
                            <div className="button-content">
                                <button className="btn-services">Services</button>
                            </div>
                        </div>
                        <div className="col content">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                                in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
               </div>
              

                <div className="educational-background container">
                    <h1>Educational Background</h1>
                    <div className="educational-background-content">
                         <p>
                            <strong>Polytechnic University of the Philippines - Q.C. Branch</strong>  <br/>
                            Currently Studying Bachelor of Science in Information Technology<br/>
                            2021-Present</p>
                    </div>
                </div>
            </div>
            <div className="skills-content">
                 <div className="skills container ">
                <h1>Skills</h1>
                     <div className="row">
                        <div className="col ">
                            <div className="col "><i className="fa-brands fa-html5"></i></div>
                            <div className="col "><i className="fa-brands fa-js"></i></div>
                            <div className="col "><i className="fa-brands fa-react"></i></div>
                            <div className="col "><i className="fa-brands fa-bootstrap"></i></div>
                        </div>
                        <div className="col">
                            <div className="col "><i className="fa-brands fa-php"></i></div>
                            <div className="col ">C#</div>
                            <div className="col "><i className="fa-brands fa-java"></i></div>                                  
                        </div>
                     </div>
                 </div>
            </div>

           </div>
            <div className="row details">
                <div className="projects container">
                    <h1>Projects</h1>
                  <div className="d-lg-flex flex-row project">
                    <div className="col project-card">
                        <div className="card">Project1</div>
                        <div className="info">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                                in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                    <div className="col project-card">
                        <div className="card">Project2</div>
                        <div className="info">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                                in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                    <div className="col project-card">
                        <div className="card">Project3</div>
                        <div className="info">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                                in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                  </div>    
                </div>
            </div>
        </div>
        </>
    );
}