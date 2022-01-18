import { Component } from "react";


class AppMain extends Component{


    constructor(props){

        super(props);
    }


    render(){


        return(
            <main>
                {this.props.children}
            </main>
        );
    }
}


export default AppMain;