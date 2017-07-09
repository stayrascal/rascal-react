import React, { Component } from 'react';
import _ from 'lodash';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>My App Page</h1>
                {this.props.children}
            </div>
        )

    }
}