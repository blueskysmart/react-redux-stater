import React from 'react';
import Esav from '../profile/Esav';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <div className="alert alert-info" role="alert">
                    <p>Full name: </p>
                    <p>Date of Birth: </p>
                </div>
                Participated Projects:
                <br />
                <Esav />
                <br />
                <Esav />

            </div>
        );
    }
}

export default AboutPage;