import _fetch from "isomorphic-fetch";
const sendEmail =  (datas) => {

    const response =   _fetch("https://orfibesa.es/lol/sendEmail.php", {

        method: 'POST',
        body : JSON.stringify(datas),
        headers : {

            "Content-Type" : "application/json"
        }
    }).then(res => res.json())
    .then(status => status.result)
    .catch(() => false);
    
    return response;
}

export { sendEmail };