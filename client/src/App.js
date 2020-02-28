/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e5932db52a8e9561a0d2263
*
* You will get 10% discount for each one of your friends
* 
*/
// Dependencies
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import SecurityService from "./security/SecurityService";

// Style
import "./styles/styles.css";

// Components
import Routes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {

  // Init component
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Check JWT token
  async componentWillMount() {
    await SecurityService.verifyToken();
    this.setState({ tokenChecked: true });
  }

  render() {
    return (
      <Fragment>
        {this.state.tokenChecked && (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Router>
              <Navbar />
              <Grid container spacing={0}>
                <Grid item md={3} />
                <Grid item xs={12} md={6}>
                  <Routes />
                </Grid>
              </Grid>
              <Footer />
            </Router>
          </MuiPickersUtilsProvider>
        )}
      </Fragment>
    );
  }
}

export default App;
