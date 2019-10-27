import React, { Component } from 'react';

class ExperienceDuration extends Component {
    render() {
        return (
            <h3 style={{ color: '#f2f2f2'}}>
                {this.props.duration}
            </h3>
        )
    }
}

export default ExperienceDuration;