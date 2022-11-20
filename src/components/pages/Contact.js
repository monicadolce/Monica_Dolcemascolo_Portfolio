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
                        <input type="text" name="name" />
                        </div>
                        <div id='contact-email'>
                        <label id='email'>Email</label>
                        <input type="email" name="email" />
                        </div>
                        <div id='contact-message'>
                        <label id='message'>Message</label>
                        <textarea name="message" />
                        <div>
                        <input type="submit" value="Send" />
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>

    );

}
