import React, { Component } from 'react';

// Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import CountDownTimer from './CountDownTimer';

injectTapEventPlugin();
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <CountDownTimer seconds={60} />
      </MuiThemeProvider>
    );
  }
}

export default App;
