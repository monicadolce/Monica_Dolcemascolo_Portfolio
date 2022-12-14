// import React, { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ID', 'template_ID', form.current, 'aZEN1SwBnpDTsiKn8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='contact'>
            <div className='text-center'>
                <h1>Contact Me</h1>
                <div className='container'>
                    <div className='vstack gap-3'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div id='contact-name'>
                        <label id='name'>Name</label>
                        <input style={{border:'1px solid var(--primary-orange)'}} type="text" name="name" />
                        </div>
                        <div id='contact-email'>
                        <label id='email'>Email</label>
                        <input style={{border:'1px solid var(--primary-orange)'}} type="email" name="email" />
                        </div>
                        <div id='contact-message'>
                        <label id='message'>Message</label>
                        <textarea style={{border:'1px solid var(--primary-orange)'}} name="message" />
                        <div>
                        <input style={{backgroundColor: 'rgb(221, 127, 45)', color: 'rgba(9, 64, 84, 0.832)'}} type="submit" value="Send" />
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>

    );

}
