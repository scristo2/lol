import { Component } from "react";

class AppHeader extends Component{


    constructor(props){

        super(props);
    }


    render(){


        return(

            <header>
                {this.props.children}
            </header>
        );
    }
}


export default AppHeader;