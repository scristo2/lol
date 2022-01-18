import { Component } from "react";
import style from "../styles/Error.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
import Head from "next/head";
import logoError from "../public/images/computer_With_Error.svg";
import Image from "next/image";

class Error extends Component {

    constructor(props) {

        super(props);
    }



    render() {

        return (
            <>
                <Head>
                    <title>An ocurred an error</title>
                </Head>
                <Layout>
                    <div className={style.App_header}>
                        <div className={style.App_header_div_logo}>
                            <Image src={logoError} width={144} height={144} priority />
                        </div>
                    </div>
                    <div className={style.App_main}>
                       <div className={`${style.margin} ${style.margin_title}`}>
                           <h1 className="d-flex p-2">An ocurred an error!</h1>
                       </div>
                       <div className={style.margin}></div>
                       <div className={style.margin}>
                           <p className="p-2">Try again! - lets take you <Link href={"/"}><a className={style.margin_a}>Back</a></Link></p>
                       </div>
                    </div>
                </Layout>
            </>
        );
    }
}


export default Error;

export async function getServerSideProps({req, res}){
  
  
  return{

     props : {}
  }
}


