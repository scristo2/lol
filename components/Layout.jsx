import { Component } from "react";
import AppHeader from "./App-header";
import AppMain from "./App-Main";
import AppFooter from "./App-footer";


class Layout extends Component {

    constructor(props) {

        super(props);
    }


    render() {

        return (<div className="App-container">
            <AppHeader>
               {
                   this.props.children[0]
               }
            </AppHeader>
            <AppMain>
                {
                    this.props.children[1]
                    
                }
            </AppMain>
            <AppFooter lang={this.props.lang}></AppFooter>
           
        </div>);
    }
}

export default Layout;