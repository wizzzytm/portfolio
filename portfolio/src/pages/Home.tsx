
import useFetch from "react-fetch-hook";
import { Link } from "react-router-dom";

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
                    <Link to={repo.html_url} key={repo.id}>
                        <div className="repoCard">
                            <div className="name">
                                <h3>{repo.name}</h3>
                            </div>
                            <div className="hr"></div>
                            <div className="desc">
                               
                                <p>
                                {repo.description}
                                </p>

                            </div>
                            <div className="icons">
                                <p>
                                <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i> {repo.stargazers_count}
                                </p>
                                <p>
                                <i className="fa-solid fa-eye" style={{color: "#ffffff"}}></i> {repo.watchers_count}
                                </p>
                            </div>
                            <div className="language">
                                <span>
                                    {repo.language}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))
            }
            
        </div>
        </>
    )
}