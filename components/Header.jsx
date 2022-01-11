eimport { Component } from "react";
import Image from "next/image";
import style from "../components/Header.module.css";
import Router from "next/router";
import Input from "./form/Input";
import person from "../public/images/person.svg";
import logoEmail from "../public/images/email.svg";
import telephone from "../public/images/telephone.svg";
import Textarea from "./form/TextArea";
import { getCookies, getCookie, setCookies, removeCookies } from "cookies-next";
import { checkhCAPTCHA } from "../utils/hcaptcha";
import _fetch from "isomorphic-fetch";
class Header extends Component {

    constructor(props) {

        super(props);
    }


     sendEmail(e) {

        console.log('jajaja');

        e.preventDefault ? e.preventDefault() : (e.returnValue = false);


        //const resHcaptcha = await checkhCAPTCHA(process.env.SECRET_HCAPTCHA, process.env.TOKEN_HCAPTCHA);
        //const datas = { response: this.props.response, secret: this.props.secret };
    }


    render() {

        return (<>
            <header className={style.header}>
                <div className={style.header_div_title}>
                    <p className={style.header_title}>changed</p>
                </div>
                <div className={style.header_div_form}>
                    <form className={style.header_form} onSubmit={this.sendEmail.bind(this)}>
                        <Input logo={person} type="text" placeholder="Name" name="nameUser" />
                        <Input logo={logoEmail} type="email" placeholder="Email" name="emailUser" />
                        <Input logo={telephone} type="tel" placeholder="Phone" name="phoneUser" />
                        <Textarea />
                        <div className="h-captcha" data-sitekey="657e8e9e-283f-4069-a6fa-63cf6487ef17"></div>
                        <div className={style.header_form_div_submit}>
                            <div className={style.header_form_div_container_submit} >
                                <input className={style.submit} type="submit" value="Send email" name="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </header>
        </>);
    }
}


export default Header;
