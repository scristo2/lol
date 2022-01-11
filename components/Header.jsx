import { Component } from "react";
import Image from "next/image";
import style from "../components/Header.module.css";
import Router from "next/router";
import homer from "../public/images/homer.png";
import Input from "./form/Input";
import person from "../public/images/person.svg";
import logoEmail from "../public/images/email.svg";
import telephone from "../public/images/telephone.svg";
import Textarea from "./form/TextArea";
import _fetch from "isomorphic-fetch";
import Script from "next/script";
import exclamation from "../public/images/exclamation.svg";
import loading from "../public/images/loadingxxx.gif";
class Header extends Component {

    constructor(props) {

        super(props);
        this.state = {

            displayNotification: 'none',
            messageError: "An ocurred an error.Try again!",
            displayRequiredCapctha: 'none',
            displaySubmit: 'flex',
            isLoading: 'none'
        }

    }


    retryError = () => {

        Router.reload();
    }



    submitForm = async (e) => {

        e.preventDefault ? e.preventDefault() : (e.returnValue = false);


        const token = e.target['h-captcha-response'].value || false;


        if (!token || token === "undefined") {

            {/*show alert required captcha*/ }
            this.setState({

                displayRequiredCapctha: 'flex'
            })


        } else {

            {/*hidden submit aand how loading*/ }

            this.setState({

                displaySubmit : 'none',
                isLoading : 'flex'
            })

            const datasForm = JSON.stringify({

                name: e.target.nameUser.value,
                email: e.target.emailUser.value,
                phone: e.target.phoneUser.value,
                message: e.target.messageUser.value,
                tokenCaptcha: token
            });



            const reponseRecaptcha = await _fetch('/api/recaptcha', {

                method: 'POST',
                body: datasForm,
                headers: {

                    'Content-Type': "application/json"
                }
            }).then(res => {

                if (!res.ok || res.status !== 200) {

                    throw new Error(true)

                } else {

                    return res.json();
                }

            }).catch((e) => false);


            if (!reponseRecaptcha) {

                {/*show div with a error message*/ }

                 const showError = await setTimeout(() => {
                    this.setState({

                        displayNotification: 'flex'
                    })
                }, 3000);

            } else {
                
                
                console.log(reponseRecaptcha);
            }


        }
    }


    render() {

        return (<>
            <header className={style.header}>
                <div className={style.header_div_title}>
                    <p className={style.header_title}>For sale this Domain premium</p>
                </div>
                <div className={style.notification} style={{ display: this.state.displayNotification }}>
                    <div className={style.notification_div_image}>
                        <Image src={homer} layout="fill" priority />
                    </div>
                    <p className={style.notification_error}>An ocurred an error!Try again.</p>
                    <button className={style.notification_retry} type="button" onClick={this.retryError}>try again</button>
                </div>
                <div className={style.header_div_form} style={{ display: this.state.displayNotification === "none" ? "flex" : "none" }}>
                    <form className={style.header_form} onSubmit={this.submitForm}>
                        <Input logo={person} type="text" placeholder="Name" name="nameUser" />
                        <Input logo={logoEmail} type="email" placeholder="Email" name="emailUser" />
                        <Input logo={telephone} type="tel" placeholder="Phone" name="phoneUser" />
                        <Textarea />
                        <div className={style.header_div_form_capctha}>
                            <div className={style.required_captcha} style={{ display: this.state.displayRequiredCapctha }}>
                                <Image src={exclamation} priority layout="fill" />
                            </div>
                            <div id={style.header_div_captcha} className="h-captcha" data-sitekey="657e8e9e-283f-4069-a6fa-63cf6487ef17" data-theme="dark"
                            ></div>
                        </div>
                        {/*div submit*/}
                        <div className={style.header_form_div_submit} style={{ display: this.state.displaySubmit }}>
                            <div className={style.header_form_div_container_submit} >
                                <input className={style.submit} type="submit" value="Send email" name="submit" />
                            </div>
                        </div>
                        {/*div loading*/}
                        <div className={style.header_form_div_loading} style={{ display: this.state.isLoading }}>
                            <Image src={loading} width={144} height={144} priority />
                        </div>
                        <Script src="https://js.hcaptcha.com/1/api.js" async defer></Script>
                    </form>
                </div>
            </header>
        </>);
    }
}


export default Header;
