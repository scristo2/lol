import _fetch from "isomorphic-fetch";


const prefixNumber = async () => {

    const data = await _fetch("https://orfibesa.es/datas/prefixPhoneNumber.json")
    .then(res => res.json())
    .catch(() => false);


    return data;
}

export {prefixNumber};