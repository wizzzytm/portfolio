import picture from "../assets/picture.png"
import poland from "../assets/icons/poland.svg"
import germany from "../assets/icons/germany.svg"
import russia from "../assets/icons/russia.svg"
import britain from "../assets/icons/britain.svg"
import html from "../assets/icons/html.svg"
import css from "../assets/icons/css.svg"
import react from "../assets/icons/react.svg"
import typescript from "../assets/icons/typescript.svg"
import vs from "../assets/icons/vs.svg"
import csharp from "../assets/icons/csharp.svg"
import js from "../assets/icons/js.svg"

import { motion} from "framer-motion"
import { useRef } from "react";
import { Link } from "react-router-dom"

const dataWeb = [
    {name: 'HTML', level: 'Advanced', image: html}, 
    {name: 'CSS', level: 'Advanced', image: css},
    {name: 'JavaScript', level: 'Intermediate', image: js},
    {name: 'ReactJS', level: 'Intermediate', image: react},
    {name: 'TypeScript', level: 'Beginner', image: typescript}
]
const dataSoft = [
    {name: 'C#', level: 'Intermediate', image: csharp},
    {name: "Windows Forms", level: 'Intermediate', image: vs}
]

const dataLang = [
    {name: "Polish", level: 'Fluent (native)', image: poland},
    {name: 'English', level: 'C1', image: britain},
    {name: 'German', level: 'A2+', image: germany},
    {name: 'Russian', level: 'A1', image: russia}
]

const renderDots = (level: any) => {
    const dots = [];
    switch (level) {
        case 'Novice':
            for (let i = 0; i < 1; i++) {
                dots.push(<div className="dot novice" key={i}></div>);
            }
            break;
        case 'Beginner':
            for (let i = 0; i < 2; i++) {
                dots.push(<div className="dot beginner" key={i}></div>);
            }
            break;
        case 'Intermediate':
            for (let i = 0; i < 3; i++) {
                dots.push(<div className="dot intermediate" key={i}></div>);
            }
            break;
        case 'Advanced':
            for (let i = 0; i < 4; i++) {
                dots.push(<div className="dot advanced" key={i}></div>);
            }
            break;
        case 'Master':
            for (let i = 0; i < 5; i++) {
                dots.push(<div className="dot master" key={i}></div>);
            }
            break;
        default:
            return null;
    }
    
    for (let i = dots.length; i < 5; i++) {
        dots.push(<div className="dot dimmed" key={i}></div>);
    }
    return dots;
}


export default function About() {
const ref = useRef<HTMLDivElement>(null);

    return (
        <>
            <div className="about">
                <div className="aboutTitle">
                    <h1>ABOUT</h1>
                </div>
                <div className="aboutWrapper">
                    <img className="aboutImage" src={picture} alt="My picture" />
                    <div className="aboutText">
                        Hello! I'm Adrian, a passionate and aspiring developer currently attending <a href="https://zse.com.pl">Zespół Szkół Ekonomicznych</a> as a third-grade student with a specialization in programming. Ever since I started my journey with programming, I fell in love with it. The ability to create something new, whether it's a simple website or a basic tic-tac-toe game, fills me with joy every time I code.
                        <br /><br />
                        If you've had a chance to explore my <Link to="/goals">Goals page</Link>, you'll see that I have a wide range of topics I plan on learning. This stems from my curiosity and eagerness to delve into various fields, not only to broaden my skill set but also to increase my opportunities in the future job market. Moreover, I find genuine enjoyment in exploring the many facets of programming.
                        <br /><br />
                        What sets me apart and makes me a standout candidate? Perhaps it is my strengths. First of all, I learn new things quickly which is a valuable skill in a continuously evolving domain such as programming. Coupled with my passion for constantly developing myself and self-improvement this characteristic positions me as a promising candidate. My admiration for coding only strengthens this in terms of a possible job.
                        <br /><br />
                        In conclusion, I am a young, ambitious coder with a thirst for knowledge and a determination to make a positive impact in the world of technology. Thank you for taking the time to learn more about me.
                    </div>
                </div>
                <div className="exp">
                    <div className="expTitle">
                        <h2>Experience and skills</h2>
                    </div>
                    <div className="expWrapper">
                        <div className="expText">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quisquam veritatis maxime asperiores, itaque odit sed minus harum ipsa laboriosam animi magni, similique quod dolorem aliquid facilis doloribus non! Repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi ut accusantium iusto minus. Sequi exercitationem delectus itaque, magni praesentium soluta
                        </div>
                        <div className="expCategory">
                            <h3>Webdev</h3>
                            
                                {dataWeb.map(item => (
                                    <motion.div  style={{transition: "0.1s all"}}
                                    initial={{opacity: 0, scale: 0.5}}
                                    whileInView={{opacity: 1, scale: 1}}
                                    transition={{opacity: 1, scale: 1}} ref={ref} className="expTile" key={item.name}>
                                        <div className="expName">{item.name}</div>
                                        <div className="expImg">
                                            <img src={item.image} alt={item.name + " logo"} />
                                        </div>
                                        <div className="hr"></div>
                                        <div className="expDots">{renderDots(item.level)}{item.level}</div>
                                    </motion.div>
                                ))}
                            
                        </div>
                        <div className="expCategory">
                            <h3>Software development</h3>
                            {dataSoft.map(item => (
                                    <motion.div style={{transition: "0.1s all"}}
                                    initial={{opacity: 0, scale: 0.5}}
                                    whileInView={{opacity: 1, scale: 1}}
                                    transition={{opacity: 1, scale: 1}} ref={ref} className="expTile" key={item.name}>
                                        <div className="expName">{item.name}</div>
                                        <div className="expImg">
                                            <img src={item.image} alt={item.name + " logo"} />
                                        </div>
                                        <div className="hr"></div>
                                        <div className="expDots">{renderDots(item.level)}{item.level}</div>
                                    </motion.div>
                                ))}
                        </div>
                        <div className="expCategory">
                            <h3>Other</h3>
                            {dataLang.map(item => (
                                    <motion.div style={{transition: "0.1s all"}}
                                    initial={{opacity: 0, scale: 0.5}}
                                    whileInView={{opacity: 1, scale: 1}}
                                    transition={{opacity: 1, scale: 1}} ref={ref} className="expTile" key={item.name}>
                                        <div className="expName">{item.name}</div>
                                        <div className="expImg">
                                            <img className="langImg" src={item.image} alt={item.name + " logo"} />
                                        </div>
                                        <div className="hr"></div>
                                        <div className="expDotLang">{item.level}</div>
                                    </motion.div>
                                ))}
                        </div>
                        
                        
                    </div>
                </div>
            </div>           
        </>
    )
}