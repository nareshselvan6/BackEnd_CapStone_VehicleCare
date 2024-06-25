import express from "express"
import cron from"node-cron"
// import nodemailer from "nodemailer"
import dotenv from"dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

// Function to send email
const sendReminderEmail = (to, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to,
        subject,
        text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
};

// Dummy data for demonstration
const appointments = [
    {
        email: 'user1@example.com',
        date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // 1 day from now
        service: 'Car Maintenance'
    },
    {
        email: 'user2@example.com',
        date: new Date(new Date().getTime() + 48 * 60 * 60 * 1000), // 2 days from now
        service: 'Dental Checkup'
    }
];

// Schedule task to run every day at 9 AM
cron.schedule('0 9 * * *', () => {
    console.log('Running daily reminder task');
    const now = new Date();

    appointments.forEach(appointment => {
        const timeDiff = appointment.date - now;

        // Check if appointment is within the next 24 hours
        if (timeDiff > 0 && timeDiff <= 24 * 60 * 60 * 1000) {
            sendReminderEmail(
                appointment.email,
                'Service Reminder',
                `This is a reminder for your upcoming ${appointment.service} appointment scheduled for ${appointment.date}`
            );
        }
    });
});

