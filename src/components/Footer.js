import React from 'react';
import './Footer.scss';
import pixelEmporium from '../assets/pixel-emporium.png';
import qub3d from '../assets/qub3d.png';
import videoggedon from '../assets/videoggedon.png';

export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <h3>
                    Nossos patrocinadores.
                </h3>

                <div className="partner-list">
                    <img
                        src={pixelEmporium}
                        alt="fliperama"
                    />
                    <img
                        src={qub3d}
                        alt="fliperama"
                    />
                    <img
                        src={videoggedon}
                        alt="fliperama"
                    />
                </div>
            </div>
        );
    }
}
