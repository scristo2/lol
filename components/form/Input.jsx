import { Component } from "react";
import Image from "next/image";
import style from "../form/Input.module.css";

class Input extends Component{


    constructor(props){

        super(props);
    }


    render(){


         return(<div className={style.input_form}>
             <div className={style.input_form_div_logo}>
                 <Image src={this.props.logo}  layout="fill"/>
             </div>
             <input spellCheck="false" type={this.props.type} required name={this.props.name} placeholder={this.props.placeholder} className={style.input} />
         </div>)
    }
}


export default Input;