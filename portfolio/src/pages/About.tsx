import picture from "../assets/picture.png"
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
                <div className="experience">
                    
                </div>
            </div>
            <div className="experience">
                
            </div>
        </>
    )
}