"use client";

import { useScroll, motion } from "framer-motion"
import { useRef } from "react";
import { Link } from "react-router-dom"

interface RepoProps {
    html_url: string,
    id: number,
    name: string,
    description: string,
    stargazers_count: number,
    watchers_count: number,
    language: string
}

export default function Repo(props: RepoProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });

    return(
        <Link to={props.html_url} key={props.id}>
            <motion.div 
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress
            }}
            ref={ref} className="repoCard">
                <div className="name">
                    <h3>{props.name}</h3>
                </div>
                <div className="hr"></div>
                <div className="desc">
                    <p>
                        {props.description}
                    </p>
                </div>
                <div className="icons">
                    <p>
                        <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i> {props.stargazers_count}
                    </p>
                    <p>
                        <i className="fa-solid fa-eye" style={{color: "#ffffff"}}></i> {props.watchers_count}
                    </p>
                </div>
                <div className="language">
                    <span>
                        {props.language}
                    </span>
                </div>
            </motion.div>
        </Link>
    )
}