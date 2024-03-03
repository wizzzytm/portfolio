"use client";
import { useScroll, motion, useTransform, useInView } from "framer-motion"
import { useEffect, useRef } from "react";
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
    return(
        <Link to={props.html_url} key={props.id}>
            <motion.div 
            whileHover={{ scale: 1.1 }}
            whileFocus={{ scale: 1.1 }}
            style={{transition: "0.1s all"}}
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{opacity: 1, scale: 1}}

            ref={ref} className="repoCard hoverAnim">
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