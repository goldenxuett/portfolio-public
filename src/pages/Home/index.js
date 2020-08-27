import React from "react";
import "./styles.sass";
import { Button } from '@material-ui/core';
import { Bounce } from 'react-reveal'
import { Link } from "react-router-dom";

import backgroundImage from "../../assets/second.jpg";
import e7Image from "../../assets/e7.png";
import uiucImage from "../../assets/uiuc.jpg";
import iglImage from "../../assets/igl.jpg";
import aopsImage from "../../assets/aops.jpg";
import yspaImage from "../../assets/yspa.png";
import csImage from "../../assets/cs.jpg"

import fumes from "../../assets/projects/fumes.pdf"
import fumesImage from "../../assets/projects/fumes_image.png"
import food from "../../assets/projects/food.pdf"
import foodImage from "../../assets/projects/food_image.png"
import ux from "../../assets/projects/2002ux.pdf"
import uxImage from "../../assets/projects/2002ux_image.png"
import cyclic from "../../assets/projects/cyclic.pdf"
import cyclicImage from "../../assets/projects/cyclic_image.png"
import weed from "../../assets/projects/weed.pdf"
import weedImage from "../../assets/projects/weed_image.png"
import piImage from "../../assets/projects/pi_image.png"
import secureImage from "../../assets/projects/secure_image.png"


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        {
          "scroll": 1,
          "title": "About",
        },
        {
          "scroll": 1.4,
          "title": "Experience",
        },
        {
          "scroll": 2.91,
          "title" : "Education"
        },
        {
          "scroll": 3.626,
          "title": "Projects",
        },
        {
          "scroll": 7.5,
          "title": "Skills",
        },
      ],
      details: {
        background: {
          "title" : "About Me",
          "info" : "Welcome! My name is Tony Tan and I am computer science major with a minor in engineering physics at the University of Illinois at Urbana-Champaign. Outside of classes, I act as a course assistant for CS 126: Software Design Studio and I hone my skills as an aspiring guitarist, journalist, \"rito\" gamer, boba consumer and fantasy enthusiast. ",
        },
        experience: [
          {
            "title" : "Eagle Seven Technologies, LLC", 
            "job" : "Software Development Intern",
            "info" : "Developed a customizable abstract market simulator library and executable in C++ for professional use in  the company trading environment",
            "image" : e7Image,
            "side" : "right",
          },
          {
            "title" : "University of Illinois at Urbana-Champaign", 
            "job" : "CS 126: Software Design Studio Course Assistant",
            "info" : "Advanced education in C++ and Java design practices by hosting weekly professional code reviews and office hours",
            "image" : uiucImage,
            "side" : "left",
          },
          {
            "title" : "Illinois Geometry Lab", 
            "job" : "Undergraduate Research Assistant",
            "info" : "Developed computer assistants to construct an alternate elementary proof concerning the cyclic nature of typical differential-modules over the Weyl Algebra",
            "image" : iglImage,
            "side" : "right",
          },
          {
            "title" : "Art of Problem Solving", 
            "job" : "Contracted Grader",
            "info" : "Champion interest in mathematics and programming to students from grades K - 12 by providing positive reinforcement and constructive criticism on topics such as number theory, combinatorics, and python.",
            "image" : aopsImage,
            "side" : "left",
          },
          {
            "title" : "Yale Summer Program in Astrophysics", 
            "job" : "Student Researcher",
            "info" : "Precisely observed Near Earth Asteroid 2002 UX to predict possible trajectories involving collisions with the Earth and synthesized values of right ascension, declination and julian days using LSPR to optimize orbital predictions",
            "image" : yspaImage,
            "side" : "right",
          },
        ],
        education: {
          "image": csImage,
          "title" : "Grainger College of Engineering: Bachelor's of Science, Computer Science",
          "other" : "Chancellors Scholar in Campus Honors Program | GPA: 4.0/4.0",
          "cs-courses" : [{"num":"CS 100", "name":"Freshman Orientation"}, {"num":"CS 125", "name":"Intro to Computer Science"}, {"num":"CS 126", "name":"Software Design Studio"}, 
                          {"num":"CS 173", "name":"Discrete Structures"}, {"num":"CS 196", "name":"Freshman Honors"}, {"num":"CS 225", "name":"Data Structures"}, 
                          {"num":"CS 233", "name":"Computer Architecture"}, {"num":"CS 361", "name":"Probability and Statistics for Computer Science"}],
          "physics-courses" : [{"num":"PHYS 211", "name":"University Physics Mechanics"}, {"num":"PHYS 212", "name":"University Physics Electricity & Magnetism"}, 
                              {"num":"PHYS 213", "name":"University Physics Thermal Physics"}, {"num":"PHYS 225", "name":"Relativity & Math Applications"}, {"num":"PHYS 325", "name":"Classical Mechanics I"}], 
          "math-courses" : [{"num":"MATH 221", "name":"Calculus I"}, {"num":"MATH 231", "name":"Calculus II"}, {"num":"MATH 241", "name":"Calculus III"}, {"num":"MATH 415", "name":"Applied Linear Algebra"}, {"num":"MATH 284", "name":"Differential Systems"}, {"num":"MATH 492", "name":"Undergraduate Research in Math"}],
          "current-courses" : [{"num":"CS 210", "name":"Ethical & Professional Issues"}, {"num":"CS 374", "name":"Intro to Algorithims & Models of Computation"}, 
                              {"num":"CS 450", "name":"Numerical Analysis"}, {"num":"CS 446", "name":"Machine Learning"}, {"num":"PHYS 435", "name":"Electromagnetic Fields I"}, 
                              {"num":"PHYS 398 (QIC)", "name":"Quantum Information Computing"}],
        },
        
        projects: [ 
          {
            "title" : "Cyclic Vectors for Certain D-Modules",
            "info" : "\"Cyclic Vectors for Certain D-Modules\" details the thought process and methodology in formulating a trivial solution for determining the cyclic nature of any D-Module within the Weyl Algebra.",
            "link" : cyclic,
            "image" : cyclicImage,
            "description" : "IGL Spring 2020 Research Paper"
          },
          {
            "title" : "Raspberry PI Bluetooth Audio Visualizer",
            "info" : "The Raspberry PI Bluetooth Audio Visualizer uses multi-colored variable size blobs to represent different tone ranges in order to visualize songs played through bluetooth to a Raspberry PI.",
            "link" : "https://github.com/goldenxuett/PiBluetoothAudioVisualizer",
            "image" : piImage,
            "description" : "CS 296 Spring 2020 Project"
          },
          {
            "title" : "Fanning the Fumes: The Forecast of Substance Abuse in the USA",
            "info" : "\"Fanning the Fumes\" details models which focus on the spread and repercussions associated with substance abuse in the United States from the rise of E-Cigs in the 21st century.",
            "link" : fumes,
            "image" : fumesImage,
            "description" : "2019 M3 Modeling Challenge Finalist Paper"
          },
          {
            "title" : "SecureAndSure",
            "info" : "SecureAndSure is a website for social good attempting to help homeless people by creating an online space to store secure documents such as passports, social security numbers or driver's licenses.",
            "link" : "https://github.com/adutta-eng/SecureAndSure",
            "image" : secureImage,
            "description" : "CS 196: Freshman Honors Fall 2019 Final Project"
          },
          {
            "title" : "Not Wasting What's Not Wanted",
            "info" : "\"Not Wasting What's Not Wanted\" introduces models which tackle the economic returns that could be generated by re-distributing wasted food from industry and households. It includes estimates on current losses as well as alternatives to reduce loss.",
            "link" : food,
            "image" : foodImage,
            "description" : "2018 M3 Modeling Challenge Semi-Finalist Paper"
          },
          {
            "title" : "Weeding out the Myths: The True Cost of Recreational Marijuana",
            "info" : "\"Weeding out the Myths\" descibes models which predict the gross revenue increase and gross societal impact increase by legalizing recreational marijuana in Illinois.",
            "link" : weed,
            "image" : weedImage,
            "description" : "2018 Catalyst Modeling Paper"
          },
          {
            "title" : "Modeling the Orbit and Physical Characteristics of N.E.A 2002 UX",
            "info" : "\"Modeling the Orbit and Physical Characteristics of N.E.A 2002 UX\" paper includes predictions and calculations related to the orbit and possible Earth collision of Near-Earth Asteroid 283729 AKA 2002 UX generated through a Numpy based Method of Gauss.",
            "link" : ux,
            "image" : uxImage,
            "description" : "YSPA 2018 Research Paper"
          },
        ],

        skills: {
          "technical" : ["C++", "Java", "Python", "Latex", "HTML/CSS/SASS", "JavaScript", "Git", "Linux", "Bash", "SystemVerilog", "Assembly"],
          "languages" : ["English (Native)", "Mandarin (Limited Working Proficiency)", "Spanish (Limited Working Proficiency)"]
        }
      }
    }
  }

  renderExperience(title, job, info, image, side) {
    if (side === "left") {
      return (
      <Bounce left>
        <div className = "section">
          <div className = "left">
            <img className = "preview-image" src = {image} alt = {title}/>
          </div>
          <div className = "right">
            <div className="title">{title}</div>
            <div className="job-title">{job}</div>
            <div className="description">{info}</div>
          </div>
        </div>
      </Bounce>);
    } else {
      return (
        <Bounce right>
          <div className = "section">
            <div className = "left">
              <div className="title">{title}</div>
              <div className="job-title">{job}</div>
              <div className="description">{info}</div>
            </div>
            <div className = "right">
              <img className = "preview-image" src = {image} alt = {title}/>
            </div>
          </div>
        </Bounce>);
    }
    
  }

  render() {
    return (
      <div className = "home-page">
        <div className = "header">
          <div className = "link-section">
            {
              this.state.info.map(({ scroll, title }) => (
                <div className="info" key={title}>
                  <Button variant = "contained" className = "link" onClick = {() => window.scroll({left: 0, top: window.innerHeight * scroll, behavior: "smooth"})}>
                    {title}
                  </Button>
                </div>
              ))
            }
              <Link to="/blog" className="info" key="Blog">
                  <Button variant = "contained" className = "link">
                    Blog
                  </Button>
              </Link>
          </div>
            <div className = "name-box">Tony Tan</div>
        </div>
        <div className = "content">
          <Bounce left>
            <div className = "section">
              <div className = "left">
                <img className = "profile-image" src = {backgroundImage} alt = {this.state.details.background.title}/>
              </div>
              <div className = "right">
                <div className="title">{this.state.details.background.title}</div>
                <div className="description">{this.state.details.background.info}</div>
              </div>
            </div>
          </Bounce>
          <div className = "title-card">
            <div className = "text">
              Experience
            </div>
          </div>
          { 
            this.state.details.experience.map(({ title, job, info, image, side }) => (
                this.renderExperience(title, job, info, image, side)
              ))    
          } 
          <div className = "title-card">
            <div className = "text"> 
              Education
            </div>
          </div>
          <Bounce left>
            <div className = "section">
              <div className = "right">
                <div className = "title">{this.state.details.education.title}</div>
                <div className = "job-title">{this.state.details.education.other}</div>
              </div>
            </div>
          </Bounce>
          <Bounce right>
            <div className = "section">
              <div className = "list">
                <div className = "title">
                CS Courses: 
                </div>
                {
                  this.state.details.education["cs-courses"].map(({ num, name }) => (
                    <Button variant = "contained" className="item">
                      <span className="tooltiptext">
                        {name}
                      </span>
                      {num}
                    </Button>
                  ))
                }
              </div> 
            </div>
            <div className = "section">
              <div className = "list">
                <div className = "title">
                Physics Courses: 
                </div>
                {
                  this.state.details.education["physics-courses"].map(({ num, name }) => (
                    <Button variant = "contained" className="item">
                      <span className="tooltiptext">
                        {name}
                      </span>
                      {num}
                    </Button>
                  ))
                }
              </div> 
            </div>
            <div className = "section">
              <div className = "list">
                <div className = "title">
                Math Courses: 
                </div>
                {
                  this.state.details.education["math-courses"].map(({ num, name }) => (
                    <Button variant = "contained" className="item">
                      <span className="tooltiptext">
                        {name}
                      </span>
                      {num}
                    </Button>
                  ))
                }
              </div> 
            </div>
            <div className = "section">
              <div className = "list">
                <div className = "title">
                Current Courses: 
                </div>
                {
                  this.state.details.education["current-courses"].map(({ num, name }) => (
                    <Button variant = "contained" className="item">
                      <span className="tooltiptext">
                        {name}
                      </span>
                      {num}
                    </Button>
                  ))
                }
              </div> 
            </div>
          </Bounce>
          <div className = "title-card">
            <div className = "text">
              Projects
            </div>
          </div> 
          {
            this.state.details.projects.map(({ title, info, link, description, image}) => (
              <Bounce left>
                <div className = "section">
                  <div className = "project">
                    <a href = {link}>
                      <img className = "project-image" src = {image} alt = {title} resizeMode = "contain">
                      </img>
                    </a>
                  </div>
                  <div className = "spacer"> </div>
                  <div className = "right">
                    <div className = "title">{title}</div>
                    <div className = "job-title">{description}</div>
                    <div className = "description">{info}</div>
                  </div>
                </div>
              </Bounce> 
            ))
          }     
          <div className = "title-card">
            <div className = "text">
              Skills
            </div>
          </div> 
          <div className = "section">
            <div className = "list">
              {
                this.state.details.skills["technical"].map(x => (
                  <Button variant = "contained" className="item">
                    {x}
                  </Button>
                ))
              }
            </div> 
          </div>  
          <div className = "section">
            <div className = "list">
              <div className = "title">
              Languages: 
              </div>
              {
                this.state.details.skills["languages"].map(x => (
                  <Button variant = "contained" className="item">
                    {x}
                  </Button>
                ))
              }
            </div> 
          </div>  
        </div>
        <div className = "footer">
          <div className = "text">
            Copyright © 2020 Tony Tan
          </div>
          <div className = "text">
            ttanpcs@gmail.com
          </div>
          <div className = "text">
            github.com/goldenxuett
          </div>
        </div>
      </div>
    )
  }
}