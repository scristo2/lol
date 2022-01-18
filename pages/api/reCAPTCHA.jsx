import _fetch from "isomorphic-fetch";
import { checkhCAPTCHA } from "../../utils/hcaptcha.js";
import { sendEmail } from "../../utils/sendEmail.js";
export default async function handler(req, res) {

      {/*
                fname => first name
                lname => last name
                email => email
                pprefix => phone prefix
                pnumber => phone number
                message => message
                hCaptcha => answer token hcaptcha
            
            */}

      if (req.method !== "POST") {

            res.status(200).json({ status: 'forbidden' });

      } else {

            const resCaptcha = await checkhCAPTCHA(process.env.SECRET_HCAPTCHA, req.body.hCaptcha);

            if (!resCaptcha) {

                  setTimeout(() => {
                        res.status(200).json({ result: "no captcha" });
                  }, 2000);

            } else {

                  const datas = {

                        fname: req.body.fname,
                        lname: req.body.lname,
                        email: req.body.email,
                        pprefix: req.body.pprefix,
                        pnumber: req.body.pnumber,
                        message: req.body.message
                  }

                  const resServer = await sendEmail(datas);

                  if (!resServer) {

                        setTimeout(() => {
                              res.status(200).json({ result: 'no server' });
                        }, 2000);

                  } else {

                        setTimeout(() => {
                              res.status(200).json({ result: 'ok' });
                        }, 2000);
                  }
            }
      }

}