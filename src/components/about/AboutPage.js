import React from 'react';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import DropDownMenu from 'material-ui/DropDownMenu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { blue500, red500, greenA200 } from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import Img from '../common/Img'

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            open1: false
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.onRequestChange = this.onRequestChange.bind(this);
    }

    handleToggle(event) {
        this.setState({
            open: !this.state.open
        });
    }

    onRequestChange(event) {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const iconStyles = {
            marginRight: 24
        };

        const HomeIcon = (props) => (
            <SvgIcon {...props}>
                <path d="M14590 9629 c-63 -17 -109 -41 -126 -66 -17 -27 -31 -155 -20 -197 5 -21 12 -26 39 -26 17 0 60 -10 95 -22 l62 -23 37 20 c51 27 75 98 71 203 -3 74 -4 77 -37 99 -36 24 -64 27 -121 12z" />
            </SvgIcon>
        );

        // const parserConfig = {
        //     replace: domNode => {
        //         if (domNode.type === DOM_TYPE_TAG && domNode.name === 'img') {
        //             return <img src={domNode.attribs.src} alt={domNode.attribs.alt} className={domNode.attribs.class} />;
        //         }
        //     }
        // };

        return (
            <div>
                <div className="alert alert-info" role="alert">
                    <p>Full name: </p>
                    <p>Date of Birth: </p>
                </div>
                {/* <div className="alert alert-info" role="alert">
                    <p>Working experiences</p>

                </div>
                <div className="btn-group">
                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Large button
                    </button>
                    <div className="dropdown-menu">
                        <p className="dropdown-item">Test my app fasdfas dfasdkfasdkj hfaskdf aksjdhf aksdjhf adskhf</p>
                    </div>
                </div> */}
                <RaisedButton
                    label="Toggle Drawer"
                    onClick={this.handleToggle}
                />
                <Drawer
                    open={this.state.open}
                    docked={false}
                    openSecondary={true}
                    onRequestChange={this.onRequestChange}
                    width="50%"
                >
                    <div className="alert alert-info" role="alert">
                        <p>Project: </p>
                        <p>Description: </p>
                    </div>
                    <div className="alert" role="alert">
                        <span>Technical Stack:
                        <Img
                                src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg"
                                width="30" height="30"
                                className="d-inline-block align-top"
                            />
                            <Img
                                src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg"
                                width="30" height="30"
                                className="d-inline-block align-top" alt=""
                            />
                        </span>
                        <p>Date of Birth: </p>
                    </div>
                </Drawer>

                <div id="accordion" role="tablist">
                    <div className="card">
                        <div className="card-header" role="tab" id="headingOne">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne">
                                    Collapsible Group Item #1
                                </a>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="headingTwo">
                            <h5 className="mb-0">
                                <a className="collapsed" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">
                                    Collapsible Group Item #2
                                </a>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="headingThree">
                            <h5 className="mb-0">
                                <a className="collapsed" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">
                                    Collapsible Group Item #3
                                </a>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;