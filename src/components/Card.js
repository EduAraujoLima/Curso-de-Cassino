import React from 'react';
import './Card.scss';

export default class Card extends React.Component {

    render() {
        return(
            <div className="card">
                <img src={this.props.img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <small className="desc">
                        {this.props.text}
                    </small>
                </div>
            </div>
        );
    }
}