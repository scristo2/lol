import _fetch from "isomorphic-fetch";
import { checkhCAPTCHA } from "../../utils/hcaptcha.js";
export default async function handler(req, res) {

      if (req.method !== 'POST') {

            res.status(403).end();

      } else {

            const answerCaptcha = await checkhCAPTCHA(process.env.SECRET_HCAPTCHA, req.body.tokenCaptcha);

            if (!answerCaptcha) {

                  res.status(403).end();


            } else {

                  res.status(200).json(answerCaptcha)

            }

      }

}