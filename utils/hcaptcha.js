const {verify} = require('hcaptcha');

const checkhCAPTCHA = (secret, token) => {

    const data = verify(secret, token)
    .then((data) => {

        if(data.success === true){

            return true;
        
        }else{

            return false;
        }
    }).catch((e) => false )


    return data;
}

export {checkhCAPTCHA};