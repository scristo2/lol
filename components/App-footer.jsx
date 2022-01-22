import { Component } from "react";
import Link from "next/link";
import _fetch from "isomorphic-fetch";
import Image from "next/image";
import spainFlag from "../public/images/flags/spain.svg";
import franceFlag from "../public/images/flags/france.svg";
class AppFooter extends Component {


    constructor(props) {

        super(props);
        this.state = {

            isLoading: "d-none",
            isSuccessfully: "d-none",
            isError: "d-none",
            messageError: "Enter your email",

            email : ""
        }
    }

    leaveInput = (e) => {

        if (e.target.value.toString().length < 1) {

            this.setState({

                isError: "d-flex",
                isSuccessfully : "d-none"
            });
        }
    }


    onchangeInput = (e) => {

        this.setState({

            isError: "d-none",
            isSuccessfully : "d-none",
            email : e.target.value
        });
    }


    clickSuscribed = async (e) => {

        this.setState({

            isLoading: "d-none",
            isError : "d-none",
            isSuccessfully : "d-none",
            messageError : "Enter your email"
        });

        e.preventDefault();


        if (e.target.email.value.toString().length < 1) {

            this.setState({

                isError: "d-flex",

            });


        } else {

            this.setState({

                isLoading: "d-flex"
            });

            const res = await _fetch("/api/suscribe", {

                method: 'POST',
                body: JSON.stringify({ email: this.state.email }),
                headers: {

                    'Content-Type': "application/json"
                }
            }).then(response => response.json())
                .then(final => final.result)
                .catch(() => false);

            if (!res) {

                this.setState({

                    isLoading: "d-none",
                    messageError: "An ocurred an error.Try again!s",
                    isError: "d-flex",
                    isSuccessfully : "d-none"
                })

            } else {

                if (res.toString() === "suscribed") {

                    this.setState({

                        isLoading: "d-none",
                        isError : "d-none",
                        isSuccessfully : "d-flex",
                        messageError : "Enter your email"
                    })
                
                }else{

                    this.setState({

                        isLoading: "d-none",
                        isError : "d-flex",
                        isSuccessfully : "d-none",
                        messageError : "An ocurred an error.Try again!"
                    })
                }
            }
        }


    }


    render() {

        return (
            <footer className="w-100 py-4 flex-shrink-0">
                <div className="container py-4">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-4 col-md-6">
                            <h5 className="h1 text-white">FB.</h5>
                            <p className="small text-muted">{this.props.lang.footer.description}&#127773;</p>
                            <p className="small text-muted mb-0">
                                © Copyrights. {this.props.lang.footer.copyright}. <Link href={"https://orfibesa.es"}><a className="text-primary"></a></Link></p>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center">
                            <h5 className="text-white mb-3">Quick links</h5>
                            <ul className="list-unstyled text-muted">
                                
                                <li><Link href={"https://leagueoflegendspremium.com/es"}><a><Image src={spainFlag} width={50} height={50} priority/></a></Link></li>
                                <li><Link href={"https://leagueoflegendspremium.com/en"}><a>English</a></Link></li>
                                <li><Link href={"https://leagueoflegendspremium.com/fr"}><a><Image src={franceFlag} width={50} height={50} priority/></a></Link></li>
                                

                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <h5 className="text-white mb-3">Newsletter</h5>
                            <p className="small text-muted">{this.props.lang.footer.suscribed}.</p>
                            <form className="text-center" onSubmit={this.clickSuscribed}>
                                <div className="input-group mb-3">
                                    <input className="form-control" onBlur={this.leaveInput} onChange={this.onchangeInput} value={this.state.email} name="email" type="email" placeholder={this.props.lang.form.placeholderEmail} aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-primary" id="button-addon2" type="submit"><i className="fas fa-paper-plane" /></button>
                                </div>

                                <div className={`${"spinner-border text-primary"} ${this.state.isLoading}`} role="status">
                                    <span className="sr-only"></span>
                                </div>
                                <div className={`${"alert alert-success"} ${this.state.isSuccessfully}`}>
                                    now you are subscribed</div>
                                <div className={`${"alert alert-danger"} ${this.state.isError}`}>{this.state.messageError}</div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}


export default AppFooter;