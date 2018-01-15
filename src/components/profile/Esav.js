import React from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

class Esav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
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
                        <ul>
                            <li>Technical</li>
                            <li>Responsibilites:
                                <ul>
                                    <li>Test</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default Esav;