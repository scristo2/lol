import { Component } from "react";
import Image from "next/image";
import style from "../form/Input.module.css";
import logo from "../../public/images/email.svg";
class Input extends Component {


    constructor(props) {

        super(props);

        this.state = {

            value: ""
        }
    }


    setValue = (e) => {

        this.setState({

            value: e.target.value
        });


    }


    render() {


        const index = 1000;

        const addnwe = [...Array(index).keys()];



        if (this.props.type === "tel") {

            return (<div className={style.input_form}>
                <div className={style.input_form_div_logo}>
                    <Image src={this.props.logo} layout="fill" />
                </div>
                <div className={style.input_form_div_prefix}>
                    <div className={style.input_form_div_prefix_logo}>
                        <Image src={'https://flagcdn.com/16x12/es.png'} alt="Spain" layout="fill" />
                    </div>
                    <p>+34</p>
                </div>
                <input onChange={this.setValue} value={this.state.value} spellCheck="false" type={this.props.type} required name={this.props.name} placeholder={this.props.placeholder} className={style.input} />
            </div>)

        } else {

            return (<div className={style.input_form}>
                <div className={style.input_form_div_logo}>
                    <Image src={this.props.logo} layout="fill" />
                </div>
                <input onChange={this.setValue} value={this.state.value} spellCheck="false" type={this.props.type} required name={this.props.name} placeholder={this.props.placeholder} className={style.input} />
            </div>)
        }
    }
}


export default Input;