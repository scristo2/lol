import { Component } from "react";
import Script from "next/script";
import prefix from "../../public/phonePrefix.json";
import _fetch from "isomorphic-fetch";
import logoError from "../../public/images/exclamation.svg";
import Image from "next/image";
import { withRouter } from "next/router";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { checkhCAPTCHA } from "../../utils/hcaptcha";
class Form extends Component {

    constructor(props) {

        super(props);

        this.state = {

            prefixies: prefix.countries,
            isLoading: false,
            checkCapctha: true,


            fname: "",
            lname: "",
            email: "",
            pprefix: "",
            pnumber: "",
            message: "",
            token: ""

        }
    }


    setValue = (e) => {

        this.setState({

            [e.target.name]: e.target.value
        });

    }


    clickForm = async (e) => {

        e.preventDefault();

        this.setState({

            isLoading: !this.state.isLoading,
            checkCapctha: true
        });


        const datas = JSON.stringify({

            fname: e.target.fname.value || false,
            lname: e.target.lname.value || false,
            email: e.target.email.value || false,
            pprefix: e.target.pprefix.value || false,
            pnumber: e.target.pnumber.value || false,
            message: e.target.message.value || false,
            hCaptcha: this.state.token

        });


        const res = await _fetch("/api/reCAPTCHA", {

            method: 'POST',
            body: datas,
            headers: {

                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(result => result.result)
            .catch((e) => console.log(e));


        switch (res) {
            case "no captcha":
                this.setState({

                    isLoading: false,
                    checkCapctha: false
                });
                break;

            case "no server":
                this.props.router.push("/error");
                break;

            case "ok" :
                this.props.router.push("/successfully");
                break;
        }

    }



    render() {

        return (

            <form onSubmit={this.clickForm}>
                <div className="container contact position-relative">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="contact-info">
                                <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" />
                                <h2>Contact Us</h2>
                                <h4>We would love to hear from you !</h4>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="contact-form">
                                <div className="form-group">
                                    <label className="control-label col-sm-2" htmlFor="fname">First Name:</label>
                                    <div className="col-sm-10">
                                        <input type="text" spellCheck="false" minLength={5} onChange={this.setValue} required value={this.state.fname} className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
                                    </div>
                                </div>
                                <div className="form-group margin">
                                    <label className="control-label col-sm-2" htmlFor="lname">Last Name:</label>
                                    <div className="col-sm-10">
                                        <input type="text" spellCheck="false" minLength={5} onChange={this.setValue} required value={this.state.lname} className="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
                                    </div>
                                </div>
                                <div className="form-group margin">
                                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                                    <div className="col-sm-10">
                                        <input type="email" onChange={this.setValue} spellCheck="false" required value={this.state.email} className="form-control" id="email" placeholder="Enter email" name="email" />
                                    </div>
                                </div>
                                <div className="form-group margin">
                                    <label className="control-label col-sm-2" htmlFor="email">Country:</label>
                                    <div className="col-sm-10">
                                        <select className="form-select form-select-sm" name="pprefix" defaultValue={"Select your country"} aria-label=".form-select-sm example">
                                            {
                                                this.state.prefixies.map((e, i) => {

                                                    return (
                                                        <option key={i} value={`${e.name} ${e.code}`}>{e.name} {e.code}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group margin">
                                    <label className="control-label col-sm-2" htmlFor="email">Phone:</label>
                                    <div className="col-sm-10">
                                        <input type="tel" required onChange={this.setValue} value={this.state.pnumber} pattern="[0-9]+" className="form-control" placeholder="Enter you phone number" name="pnumber" />
                                    </div>
                                </div>
                                <div className="form-group margin">
                                    <label className="control-label col-sm-2" htmlFor="comment">Message:</label>
                                    <div className="col-sm-10">
                                        <textarea className="form-control textarea" minLength={10} spellCheck="false" required  onChange={this.setValue} name="message" rows={5} id="comment" value={this.state.message} />
                                    </div>
                                </div>
                                <div className="form-group margin">
                                    <div className="col-sm-10 d-flex  align-items-center">
                                        <div className={`${"noCapctha"} ${this.state.checkCapctha ? "invisible" : "visible"}`}>
                                            <Image src={logoError} alt="Required hcapctha" layout="fill" priority />
                                        </div>
                                        <HCaptcha sitekey="657e8e9e-283f-4069-a6fa-63cf6487ef17" onError={() => { this.props.router.push("/error") }} theme="dark" onVerify={(tokenUser) => {

                                            this.setState({

                                                token: tokenUser,
                                                checkCapctha : true
                                            });
                                        }} />
                                    </div>
                                </div>
                                <div className={`${"form-group"} ${this.state.isLoading ? "invisible" : "visible"}`}>
                                    <div className="col-sm-offset-2 col-sm-10 margin">
                                        <button type="submit" className="btn btn-default">Submit</button>
                                    </div>
                                </div>
                                <div className={`${"form-group"} ${this.state.isLoading ? "visible" : "invisible"}`}>
                                    <div className="spinner-border text-success" role="status">
                                        <span className="sr-only"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default withRouter(Form);