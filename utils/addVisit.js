import _fetch from "isomorphic-fetch";

const addVisit = async (url, ip, date) => {

    const formData = new URLSearchParams();

    formData.append("ip", ip);
    formData.append("date", date);

    const res = _fetch(url, {

        method : 'POST',
        body : formData.toString(),
        headers : {

            'Content-Type' : "application/x-www-form-urlencoded",
            
        }
    }).then(response => response.json())
    .then(result => result.status)
    .catch(() => false);

    return res;
}


export {addVisit};