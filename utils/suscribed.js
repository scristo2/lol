import _fetch from "isomorphic-fetch";

const suscribed =  (emailUser) => {

    const response =   _fetch("https://orfibesa.es/lol/suscribed.php", {

        method: 'POST',
        body : JSON.stringify({email : emailUser}),
        headers : {

            "Content-Type" : "application/json"
        }
    }).then(res => res.json())
    .then(status => status.result)
    .catch(() => false);
    
    return response;
}

export { suscribed };