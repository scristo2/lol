import { Component } from "react";
import style from "../styles/Error.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
import Head from "next/head";
import logoError from "../public/images/computer_With_Error.svg";
import Image from "next/image";
import language from "../public/language.json";
class Error extends Component {

    constructor(props) {

        super(props);

        this.state = {

            lang : language
        }
    }



    render() {

        return (
            <>
                <Head>
                    <meta httpEquiv="content-type" content="text/html" charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta httpEquiv="Expires" content={0} />
                    <meta httpEquiv="Last-Modified" content={0} />
                    <meta httpEquiv="Cache-Control" content="no-cache, mustrevalidate" />
                    <meta httpEquiv="Pragma" content="no-cache" />
                    <meta name="author" content="scristo2" />
                    <meta name="description" content="For sale this super domain." />
                    <meta name="keywords" content="lol, league of legends, pc, computer, ibai, pique, koi, streamer, twitch, domain, domains, 
                     esports, sports, electronic, youtube, google, web, boostrap, css, php, react, next, vercel, gg, good game, premium,
                     valorant, ashe, op.gg, aatrox, ahri, akali, akshan, alistar, amunu, anivia, annie, aphelios, aurelion sol, azir, bardo, blitzcrank,
                     brand, braum, caytlin, camille, cassiopeia, cho'gath, corki, darius, diana, dr.mundo, draven, ekko, elise, evelynn, ezreal, fiddlesticks,
                     fiora, fizz, galio, gangplank, garen, gnar, gragas, graves, gwen, hecarim, heimerdinger, illaoi, irelia, ivern, janna, jarvan iv, jax,
                     jayce, jhin, jinx, kai'sa, kalista, karma, karthus, kassadin, katarina, kayle, kayn, kennen, kha'zix, kindred, kled, kog'maw, leblanc, lee sin,
                     leona, lillia, lissandra, lucian, lulu, lux, maestro yi, malphite, malzahar, maokai, miss fortune, mordekaiser, morgana, nami, nasus, 
                     nautilus, neeko, nidalee, nocturne, nunu y willump, olaf, orianna, ornn, pantheon, poppy, pyke, qiyana, quinn, rakan, rammus, rek'sai, rell, renektton, rengar, riven, 
                     rumble, ryze, samira, sejuani, senna, seraphine, sett, shaco, shen, shyvana, singed, sion, sivir, skarner, sona, soraka, swain, sylas, syndra, tahm kench, 
                     taliyah, talon, taric, teemo, thresh, tristana, trundle, tryndamere, twisted fate, twitch, udyr, urgot, varus, vayne, veigar, vel'koz, vex, vi, viego, viktor, vladimir, 
                     volibear, warwick, wukong, xayah, xerath, xin zhao, yasuo, yone, yorick, yuumi, zac, zed, ziggs, zilean, zoe, zyra" />
                    <meta name="robots" content="noindex" />
                    <meta name="robots" content="follow" />
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
                    <title>{this.state.lang[this.props.locale].title}</title>
                </Head>
                <Layout lang={this.state.lang[this.props.locale]}>
                    <div className={style.App_header}>
                        <div className={style.App_header_div_logo}>
                            <Image src={logoError} width={144} height={144} priority />
                        </div>
                    </div>
                    <div className={style.App_main}>
                        <div className={`${style.margin} ${style.margin_title}`}>
                            <h1 className="d-flex p-2">{this.state.lang[this.props.locale].error.title}</h1>
                        </div>
                        <div className={style.margin}></div>
                        <div className={style.margin}>
                            <p className="p-2">{this.state.lang[this.props.locale].error.message} -  <Link href={"/"}><a className={style.margin_a}>{this.state.lang[this.props.locale].error.back}</a></Link></p>
                        </div>
                    </div>
                </Layout>
            </>
        );
    }
}


export default Error;

export function getServerSideProps(context) {



    return {


        props: {

            ip: context.req.connection.remoteAddress || "undefined",
            locale: context.locale || "undefined"

        }
    }
}

