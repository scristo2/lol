import { Component } from "react";
import Head from "next/head";
import style from "../styles/Home.module.css";
import Header from "../components/Header";
import { getCookies, getCookie, setCookies, removeCookies } from "cookies-next";
import { checkhCAPTCHA } from "../utils/hcaptcha";
import Script from "next/script";
class Home extends Component {


    render() {

        return (

            <>
                <Head>
                    <meta httpEquiv="content-type" content="text.html" charSet="utf-8" />
                    <meta name="viewport" content="width=device-width initial-scale=1" />
                    <meta httpEquiv="Expires" content="0" />
                    <meta httpEquiv="Last-Modified" content="0" />
                    <meta httpEquiv="Cache-Control" content="no-cache, mustrevalidate" />
                    <meta httpEquiv="Pragma" content="no-cache" />
                    <meta name="author" content="Sergio Cristobal Colino" />
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
                    <meta name="robots" content="index" />
                    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <main className={style.container}>
                  
                    <Header response={this.props.response} secret={this.props.secret}/>
                </main>
                <footer className={style.footer}></footer>
            </>
        );
    }
}

export default Home;

export async function getServerSideProps(context) {

    const datas = {response : process.env.TOKEN_HCAPTCHA, secret: process.env.SECRET_HCAPTCHA};

    return {

        props: datas
    }
}