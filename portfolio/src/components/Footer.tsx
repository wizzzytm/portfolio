import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import {useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import {motion} from 'framer-motion'

export default function Footer() {

    const ref = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({email_from: "", message: ""})
    function handleChange(event: any) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const sendEmail = (e: any) => {
        e.preventDefault();
        console.log('submit called');
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY);
        setFormData({ email_from: "", message: "" })
    }

    return(
        <div className='footer'>
            <motion.div style={{transition: "0.1s all"}}
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{opacity: 1, scale: 1}} ref={ref} className="contactTitle"><h1>Contact me</h1></motion.div>
            <motion.div style={{transition: "0.1s all"}}
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{opacity: 1, scale: 1}} ref={ref} className="contactWrapper">
                
                <form className="contactForm" onSubmit={sendEmail}>
                    
                        <label htmlFor="emailFrom">Email:</label>
                    <input onChange={handleChange} value={formData.email_from}  type="email" name="email_from" id="emailFrom" className="email__from" placeholder="person@example.com"/>
                        <label htmlFor="message">Message:</label>
                    <textarea onChange={handleChange} value={formData.message}  name="message" id="message" className="message__box"></textarea>

                    <Button type="submit" variant="contained" endIcon={<SendIcon />} className="submit__btn" style={{marginTop: "5px", backgroundColor: "#0264b5"}}>
                        Send
                    </Button>

                </form>
                <div className="contact">
                    <ul className="contact-list">
                        <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Starogard Gdański, Poland</span></i></li>
                        
                        <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone">123123123</span></i></li>
                        
                        <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail">hitmeup@gmail.com</span></i></li>
            
                    </ul>
                </div>
            </motion.div>
        </div>
    )
}