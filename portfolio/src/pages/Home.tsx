
import useFetch from "react-fetch-hook";
import { Link } from "react-router-dom";
import ReadMoreReact from 'read-more-react';
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
                               
                            </div>
                            <div className="icons">
                                <p>Stars: {repo.stargazers_count}</p>
                                <p>
                                    Watchers: {repo.watchers_count}
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