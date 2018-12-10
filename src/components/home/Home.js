import React, { Component } from 'react';

class Home extends Component {
    render() {
        const { authError } = this.props;
        return (
            <div>
                <div> This is Home page.</div>
                { authError }
            </div>
        );
    }
}

export default Home;