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
    
    // Fill the remaining dots with dimmed color
    for (let i = dots.length; i < 5; i++) {
        dots.push(<div className="dot dimmed" key={i}></div>);
    }
    return dots;
}
export default function About() {
    return (
        <>
            <div className="about">
                <div className="aboutTitle">
                    <h1>ABOUT</h1>
                </div>
                <div className="aboutWrapper">
                    <img className="aboutImage" src={picture} alt="My picture" />
                    <div className="aboutText">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos nostrum iste nam rem fuga odio placeat aut at necessitatibus ipsum accusantium tempore aperiam, molestiae pariatur illum. Delectus assumenda molestiae eveniet.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eligendi perspiciatis sunt nesciunt esse labore, commodi reprehenderit alias voluptatem qui veritatis temporibus recusandae vitae consectetur eveniet minus praesentium dolorem maxime?
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
                                    <div className="expTile" key={item.name}>
                                        <div className="expName">{item.name}</div>
                                        <div className="expImg">
                                            <img src={item.image} alt={item.name + " logo"} />
                                        </div>
                                        <div className="hr"></div>
                                        <div className="expDots">{renderDots(item.level)}{item.level}</div>
                                    </div>
                                ))}
                            
                        </div>
                        <div className="expCategory">
                            <h3>Software development</h3>
                            {dataSoft.map(item => (
                                    <div className="expTile" key={item.name}>
                                        <div className="expName">{item.name}</div>
                                        <div className="expImg">
                                            <img src={item.image} alt={item.name + " logo"} />
                                        </div>
                                        <div className="hr"></div>
                                        <div className="expDots">{renderDots(item.level)}{item.level}</div>
                                    </div>
                                ))}
                        </div>
                        <div className="expCategory">
                            <h3>Other</h3>
                            {dataLang.map(item => (
                                    <div className="expTile" key={item.name}>
                                        <div className="expName">{item.name}</div>
                                        <div className="expImg">
                                            <img className="langImg" src={item.image} alt={item.name + " logo"} />
                                        </div>
                                        <div className="hr"></div>
                                        <div className="expDotLang">{item.level}</div>
                                    </div>
                                ))}
                        </div>
                        
                        
                    </div>
                </div>
            </div>           
        </>
    )
}