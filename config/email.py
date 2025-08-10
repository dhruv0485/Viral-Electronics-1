import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
import logging

load_dotenv()
logger = logging.getLogger(__name__)

async def send_email(contact_data):
    """Send an email with the contact form data."""
    try:
        smtp_server = "smtp.gmail.com"
        smtp_port = 587
        username = os.getenv("MAIL_USERNAME")
        password = os.getenv("MAIL_PASSWORD")
        from_email = os.getenv("MAIL_FROM")
        to_email = os.getenv("NOTIFICATION_EMAIL")

        message = MIMEMultipart("alternative")
        message["Subject"] = "New Contact Form Submission - Viral Electronics"
        message["From"] = from_email
        message["To"] = to_email

        html_template = f"""
        <html>
        <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {contact_data['name']}</p>
            <p><strong>Phone:</strong> {contact_data['phone']}</p>
            <p><strong>Email:</strong> {contact_data['email']}</p>
            <p><strong>Message:</strong></p>
            <p>{contact_data['message']}</p>
            <hr>
            <p><small>Submitted on: {contact_data['timestamp']}</small></p>
        </body>
        </html>
        """

        html_part = MIMEText(html_template, "html")
        message.attach(html_part)

        with smtplib.SMTP(smtp_server,smtp_port) as server:
            server.starttls()
            server.login(username,password)
            server.sendmail(from_email, to_email, message.as_string())

        logger.info("Email sent successfully.")

    except Exception as e:
        logger.error(f"Failed to send email: {e}")
        raise e
