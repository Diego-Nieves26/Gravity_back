const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const pug = require('pug');
const path = require('path');
const { htmlToText } = require('html-to-text');

dotenv.config({ path: './config.env' });

class Email {
	constructor(to) {
		this.to = to;
	}

	// Connect to mail service
	newTransport() {
		if (process.env.NODE_ENV === 'production') {
			// Connect to SendGrid
			return nodemailer.createTransport({
				service: 'SendGrid',
				host: 'smtp.sendgrid.net',
				port: 465,
				auth: {
					user: 'apikey',
					pass: process.env.SENDGRID_API_KEY,
				},
			});
		}

		return nodemailer.createTransport({
			host: 'smtp.mailtrap.io',
			port: 2525,
			auth: {
				user: process.env.MAILTRAP_USER,
				pass: process.env.MAILTRAP_PASSWORD,
			},
		});
	}

	// Send the actual mail
	async send(template, subject, mailData) {
		const html = pug.renderFile(
			path.join(__dirname, '..', 'views', 'emails', `${template}.pug`),
			mailData
		);

		await this.newTransport().sendMail({
			from: mailData.email,
			to: process.env.MAIL_FROM,
			subject: subject,
			html: html,
			text: htmlToText(html),
		});
	}

	async sendWelcome(name) {
		await this.send('welcome', 'Bienvenido a Gravity', name);
	}
}

module.exports = { Email };
