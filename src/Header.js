import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <h1 style={{ display: 'inline-block', borderBottom: '1px solid', marginTop: '3em', paddingBottom: '1em' }}>
                {this.props.title}
            </h1>
        )
    }
}

export default Header;