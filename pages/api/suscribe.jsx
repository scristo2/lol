import { suscribed } from "../../utils/suscribed"
export default async function handler(req, res) {


    if (req.method !== "POST") {

        res.status(200).json({ result: "forbidden" })

    } else {

        const response =  true  //await suscribed(req.body.email);

        if (!response) {

            setTimeout(() => {
                res.status(200).json({ result: "no suscribed" });
            }, 2000);

        } else {

            setTimeout(() => {
                res.status(200).json({ result: "suscribed" });
            }, 2000);
        }

    }

}