'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
	const form = useRef<any>();

	const sendEmail = (e: any) => {
		e.preventDefault();

		emailjs.sendForm('service_12ufkex', 'template_ospcwu9', form.current, '9ssQMgKOYU1moD1Ea').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);

		e.target.reset();
	};

	return (
		<form ref={form} onSubmit={sendEmail}>
			<div className='retun-info'>
				<div>
					<label htmlFor='first-name'>First Name</label>
					<br />
					<input type='text' id='first-name' name='first-name' required />
				</div>
				<div>
					<label htmlFor='last-name'>Last Name</label>
					<br />
					<input type='text' id='last-name' name='last-name' required />
				</div>
				<div>
					<label htmlFor='phone'>Phone Number</label>
					<br />
					<input type='tel' id='phone' name='phone' required />
				</div>
				<div>
					<label htmlFor='email'>E-Mail</label>
					<br />
					<input type='email' id='email' name='email' required />
				</div>
			</div>
			<div className='message'>
				<label htmlFor='subject'>Subject</label>
				<input type='text' id='subject' name='subject' required />
				<label htmlFor='message'>Message</label>
				<textarea id='message' name='message' required />
			</div>
			<button type='submit'>Send Message</button>
		</form>
	);
};

export default ContactForm;
