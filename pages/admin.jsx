import { Component } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import language from "../public/language.json";
import Login from "../components/Login";
class Admin extends Component{

    constructor(props){

        super(props);

        this.state = {

            lang : language
        }
    }


    render(){

        return(<>
          <Layout lang={this.state.lang[this.props.locale]}>
              <h1>header</h1>
              <Login/>
          </Layout>
        </>);
    }
}


export default Admin;

export async function getStaticProps(context){
  
    console.log(context);

    return {


         props : {

             locale : context.locale
         }
    }
}
