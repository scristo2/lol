import { Component } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import style from "../styles/Successfully.module.css";
class Successfully extends Component {

    constructor(props) {

        super(props);
    }


    render() {


        return (<>
            <Head>
                <title>For-Sale domain</title>
            </Head>
            <Layout>
                <div></div>
                <div className={style.App_main}>
                    <div className={style.card}>
                        <div className={style.card_inside}>
                            <i className={style.checkmark}>✓</i>
                        </div>
                        <h1 className={style.card_h1}>Success</h1>
                        <p className={style.card_p}>We received your purchase request;<br /> we'll be in touch shortly!</p>
                    </div>
                </div>
            </Layout>
        </>);
    }
}


export default Successfully;