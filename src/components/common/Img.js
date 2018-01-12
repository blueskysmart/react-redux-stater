import React from "react";

export default class Img extends React.Component {
    render(){
        return (
            <img src={this.props.src} width={this.props.width} height={this.props.height} className={this.props.className} />
        );
    }
}