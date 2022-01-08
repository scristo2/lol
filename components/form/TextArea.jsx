import { Component } from "react";
import style from "../form/TextArea.module.css";


class Textarea extends Component{


    constructor(props){

        super(props);
    }


    render(){

        return(<div className={style.input_form}>
    
           <textarea spellCheck="false" required className={style.textarea} name="messageuser" placeholder="Your message..."></textarea>

        </div>);
    }
}


export default Textarea;