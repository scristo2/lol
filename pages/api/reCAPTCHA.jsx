import _fetch from "isomorphic-fetch";
export default async function handler(req, res) {

      if (req.method !== 'POST') {

            res.status(403).end();

      } else {

            const formData = new URLSearchParams();

            formData.append('response', req.body.tokenCaptcha);
            formData.append('secret', process.env.SECRET_HCAPTCHA);

            const answerCaptcha = await _fetch("https://hcaptcha.com/siteverify", {

                  method: 'POST',
                  body: formData.toString(),
                  headers: {

                        'Content-Type': 'application/x-www-form-urlencoded'
                  }
            }).then(res => {

                  if (!res.ok || res.status !== 200) {

                        throw new Error(true);

                  } else {

                        return res.json();
                  }
            }).catch((e) => false);


            if (!answerCaptcha) {

                  res.status(403).end();
            
            
            }else{
                    
                  

                  if(answerCaptcha.success){

                        {/*fecth php post email for send email*/}

                        res.status(200).json(answerCaptcha)
                  
                  }else{

                        res.status(403).end();
                  }
                  
            }

      }

}