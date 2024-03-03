import {useRef} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import tailwind from '../assets/icons/tailwind-css-2.svg'
import node from '../assets/icons/nodejs-icon.svg'
import express from '../assets/icons/expressjs-icon.svg'
import unity from '../assets/icons/unity-69.svg'
import electron from '../assets/icons/electron-1.svg'
import mongodb from '../assets/icons/mongodb-icon-1.svg'
import avalonia from '../assets/icons/avatar.svg'
import python from '../assets/icons/python-5.svg'
import blender from '../assets/icons/blender-2.svg'
import leetcode from '../assets/icons/leetcode.svg'
import {motion} from 'framer-motion'

export default function Goals() {
    const ref = useRef<HTMLDivElement>(null);
    return (
        <>
            <div className="goals">
                <div className="goalsTitle">
                    <h1>Goals</h1>
                </div>
                <div className="goalsWrapper">
                    <motion.div style={{transition: "0.1s all"}} initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}} transition={{opacity: 1, scale: 1}} ref={ref}  className="goalsSection">
                        <div className="sectionTitle">
                            <h2>Web development</h2>
                        </div>
                        <div className="goalsList">
                            <List>
                            <ListItem secondaryAction={
                                <Checkbox disabled  edge="end"/>
                            }disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar
                                        alt={`Tailwind`}
                                        src={tailwind}/>
                                    </ListItemAvatar>
                                    <ListItemText primary={'Tailwind'} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem secondaryAction={
                                <Checkbox disabled edge="end"/>
                            }disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar
                                        alt={`NodeJS`}
                                        src={node}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText primary={'NodeJS'} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem secondaryAction={
                                <Checkbox disabled edge="end"/>
                            }disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={`ExpressJS`}
                                            src={express}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText primary={'ExpressJS'} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem secondaryAction={
                                <Checkbox disabled  edge="end"/>
                            }disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={`mongodb`}
                                            src={mongodb}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText primary={'MongoDB'} />
                                </ListItemButton>
                            </ListItem>
                            </List>
                        </div>
                    </motion.div>
                    <motion.div style={{transition: "0.1s all"}} initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}} transition={{opacity: 1, scale: 1}} ref={ref} className="goalsSection">
                    <div className="sectionTitle">
                        <h2>Software/Game development</h2>
                    </div>
                    <div className="goalsList">
                    <List>
                            <ListItem secondaryAction={
                                <Checkbox disabled edge="end"/>
                            }disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar
                                        alt={`Electron`}
                                        src={electron}/>
                                    </ListItemAvatar>
                                    <ListItemText primary={'Electron'} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem secondaryAction={
                                <Checkbox disabled  edge="end"/>
                            }disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar
                                        alt={`Unity`}
                                        src={unity}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText primary={'Unity'} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem secondaryAction={
                                <Checkbox disabled  edge="end"/>
                            }disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={`AvaloniaUI`}
                                            src={avalonia}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText primary={'AvaloniaUI'} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem secondaryAction={
                                <Checkbox disabled  edge="end"/>
                            }disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={`Blender`}
                                            src={blender}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText primary={'Blender'} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </div>
                    </motion.div>
                    <motion.div style={{transition: "0.1s all"}} initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}} transition={{opacity: 1, scale: 1}} ref={ref}  className="goalsSection">
                        <div className="sectionTitle">
                            <h2>Data science</h2>
                        </div>
                        <div className="goalsList">
                        <List>
                            <ListItem secondaryAction={
                                <Checkbox  disabled edge="end"/>
                            }disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar
                                        alt={`Python`}
                                        src={python}/>
                                    </ListItemAvatar>
                                    <ListItemText primary={'Python'} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem secondaryAction={
                                <Checkbox disabled  edge="end"/>
                            }disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar
                                        alt={`Leetcode`}
                                        src={leetcode}/>
                                    </ListItemAvatar>
                                    <ListItemText primary={'100 leetcode problems'} />
                                </ListItemButton>
                            </ListItem>
                            
                        </List>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}