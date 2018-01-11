import React from 'react';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import DropDownMenu from 'material-ui/DropDownMenu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

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
                        <p>Technical Stack: </p>
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

                        <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
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