import {Component} from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Form from "../components/form/Form";
import Image from "next/image";
import logo from "../public/images/for-sale.svg";
import { useRouter } from "next/router";
import Script from "next/script";
class Home extends Component{

    constructor(props){

        super(props);
    }

   




    render(){

        return(<>
         <Head>
             <title>for sale</title>
         </Head>
         <Layout>
             <Image src={logo} width={144} height={144} priority alt="Image"/>
             <Form/>
         </Layout>
        </>)
    }
}


export default Home;

