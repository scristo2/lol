import { Component } from "react";
import Image from "next/image";
import style from "../form/Input.module.css";
import logo from "../../public/images/email.svg";
class Input extends Component {


    constructor(props) {

        super(props);

        this.state = {

            value: "",
            prefixLogo: "https://orfibesa.es/datas/flags/Spain.svg",
            prefixLogoAlt: 'Spain',
            prefixNumber: '+34',
            heightPrefix: '0px',
            visivilityInputPhone: 'flex'
        }
    }


    setValue = (e) => {

        this.setState({

            value: e.target.value
        });


    }

    showPrefixs = () => {

        this.setState({

            visivilityInputPhone: 'none',
            heightPrefix: '200px'
        })
    }



    render() {


        if (this.props.type === "tel") {

            return (<div className={style.input_form_tel}>

                <div className={style.input_form_div_list_prefix_tel} style={{ height: this.state.heightPrefix }}>
                    <table className={style.input_form_div_list_prefix_table}>
                        <thead>
                            <tr className={style.input_form_div_list_prefix_table_tr_tel}>
                                <th className={style.input_form_div_list_prefix_table_th_tel}>Flag</th>
                                <th className={style.input_form_div_list_prefix_table_th_tel}>Code</th>
                                <th className={style.input_form_div_list_prefix_table_th_tel}>Country</th>
                                <th id={style.closePrefix} className={style.input_form_div_list_prefix_table_th_tel} onClick={() => {
                                    this.setState({
                                        visivilityInputPhone: 'flex',
                                        heightPrefix: '0px'
                                    });
                                }}><p >X</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.prefixNumber.countries.map((e, i) => {

                                    return (
                                        <tr key={i} className={style.input_form_div_list_prefix_table_selected}>
                                            <td className={style.input_form_div_list_prefix_table_td}><div><Image src={`/images/flags/${e.name}.svg`} width={40} height={40} /></div></td>
                                            <td className={style.input_form_div_list_prefix_table_td}><p>{e.code}</p></td>
                                            <td className={style.input_form_div_list_prefix_table_td}><p>{e.name}</p></td>
                                            <td className={style.input_form_div_list_prefix_table_td} onClick={() => {
                                                this.setState({

                                                    prefixLogo: `https://orfibesa.es/datas/flags/${e.name}.svg`,
                                                    prefixLogoAlt: e.name,
                                                    prefixNumber: e.code,
                                                    visivilityInputPhone: 'flex',
                                                    heightPrefix: '0px'

                                                });
                                            }}><p>Select</p></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className={style.input_form_div_prefix} style={{ display: this.state.visivilityInputPhone }} >
                    <div className={style.input_form_div_logo_tel}>
                        <Image src={this.props.logo} layout="fill" />
                    </div>
                    <div className={style.test} onClick={this.showPrefixs}>
                        <div className={style.input_form_div_prefix_logo}>
                            <Image src={this.state.prefixLogo} alt={this.state.prefixLogoAlt} layout="fill" />
                        </div>
                        <div className={style.input_form_div_prefix_code}>
                            <p className={style.input_form_div_prefix_code}>{this.state.prefixNumber}</p>
                        </div>
                    </div>
                    <input onChange={this.setValue} pattern="[0-9]+" value={this.state.value} spellCheck="false" type={this.props.type} required name={this.props.name} placeholder={this.props.placeholder} className={style.input_tel} />
                </div>

                <input type="hidden" value={this.state.prefixNumber} name="prefixNumber" />
                <input type="hidden" value={this.state.prefixLogoAlt} name="prefixCountry" />
            </div>
            )

        } else {

            return (<div className={style.input_form}>
                <div className={style.input_form_div_logo}>
                    <Image src={this.props.logo} layout="fill" />
                </div>
                <input onChange={this.setValue} value={this.state.value} spellCheck="false" type={this.props.type} required name={this.props.name} placeholder={this.props.placeholder} className={style.input} />
            </div>)
        }
    }
}


export default Input;