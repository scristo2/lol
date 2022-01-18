import _fetch from "isomorphic-fetch";

const checkhCAPTCHA = (secret, token) => {

    const formData = new URLSearchParams();

    formData.append("response", token);
    formData.append("secret", secret);

    const data = _fetch("https://hcaptcha.com/siteverify", {

        method: 'POST',
        body: formData.toString(),
        headers: {

            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(res => res.json())
    .then(response => response.success)
    .catch(() => false);

    return data;
}

export { checkhCAPTCHA };