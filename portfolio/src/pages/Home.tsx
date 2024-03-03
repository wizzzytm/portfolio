import useFetch from "react-fetch-hook";
import Repo from "../components/Repo";



export default function Home() {
    const { data } = useFetch('https://api.github.com/users/wizzzytm/repos');
    if (!data) return null;
    return (
        
        <>
        <div className="intro">
            <div className="svgwrapper">
                <svg height="60" width="320" >
                    <rect className="shape" height="60" width="320"/>
                </svg>
                <div className="text">
                    ADRIAN KOŁEK
                </div>
            </div>
        </div>
        <div className="projectsWrapper">
            
            {
                (data as any[]).map(repo => (
                    <Repo {...repo} />
                ))
            }
            
        </div>
        </>
    )
}