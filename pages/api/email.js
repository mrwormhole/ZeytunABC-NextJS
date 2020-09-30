import sendGrid from "@sendgrid/mail"

export default async (req, res) => {
    if (req.method === "POST") {
        sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
        const {fullName, email, message} = req.body;
        
        const mailData = {
            to: "info@zeytunabc.com",
            from: email,
            subject: `New message from a Client`,
            html: `<strong> Hello Zeytun ABC LTD! </strong> 
            <p> I am ${fullName} . ${message} </p>`
        };

        let sendGridResult = await sendGrid.send(mailData)
        if(sendGridResult[0].statusCode == 202) {
            res.status(202);
            res.json({ status: 'OK' });
        } else{
            res.status(sendGridResult[0].statusCode);
            res.json({ status: 'ERROR' });
        }
    }
}