require('dotenv').config();
import nodemailer from 'nodemailer';

export default async function (req, resp) {
    const {
        message,
        name,
        email
    } = await req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
        secure: true,
    });

    const html = `
        <div>
            <h3>Portfólio - Luiz Filipe</h3>
            <p>${message}</p>
        </div>
    `;

    return await new Promise((resolve, reject) => {
        const mailData = {
            from: process.env.EMAIL,
            to: 'luizfilipe.tech@gmail.com',
            subject: `Nova mensagem de ${name} - ${email}`,
            html
        };

        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                reject(err);
                resp.status(500).json({ success: false, err});
                return;
            }
            resolve(info);
        });
    }).then(() => {
        resp.status(200).json({success: true})
    }).catch(() => {
        resp.status(200).json({success: true})
    });
}