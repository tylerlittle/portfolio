import React, { Component } from 'react';
import ExperienceDescription from './ExperienceDescription';

class ExperienceDescriptionContainer extends Component {
    render() {
        let descriptionArray = [];
        for (var i = 0; i < this.props.description.length; i++) {
            descriptionArray.push(<ExperienceDescription key={i} description={this.props.description[i]} />);
        }
        return (
            <div>
                {descriptionArray}
                <br />
            </div>
        )
    }
}

export default ExperienceDescriptionContainer;