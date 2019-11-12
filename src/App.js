import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react'
import Market from './containers/Market'
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';
import Portfolio from './containers/Portfolio'
import Watchlist from './containers/Watchlist'
import StockDetail from './containers/StockDetail';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './App.css'
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import { connect } from 'react-redux';
import { fetchIndex, fetchSearchHistory, fetchPortfolio, fetchWatchlist, deleteLoginSession } from "./redux/actions";

class App extends Component {
  componentDidMount() {
    this.fetchStockData();

    this.intervalID = setInterval(function(){
      this.fetchStockData();
    }.bind(this), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  fetchStockData = () => {
    this.props.dispatch(fetchIndex());
    this.props.dispatch(fetchSearchHistory());
    if (this.loggedIn) {
      this.props.dispatch(fetchPortfolio());
      this.props.dispatch(fetchWatchlist());
    }
  }

  handleSignOut = () => {
    if (window.confirm('Are you sure you want to sign out?')) {
      this.props.dispatch(deleteLoginSession());
    }
  }

  get loggedIn() {
    return !!this.props.token;
  }

  render() {
    return (
      <Router>
        <Grid centered>
          <Grid.Row>
            <Grid.Column computer={4} mobile={14} textAlign='left'>
              <NavLink to='/' exact><h1 style={{marginTop: '5px'}}>Portfolio Manager and Hedger</h1></NavLink>
            </Grid.Column>
            <Grid.Column computer={6} mobile={12} textAlign='center'>
              <SearchBar />
            </Grid.Column>
            <Grid.Column computer={4} mobile={2} textAlign='right' style={{marginTop: '10px'}}>
              {
                this.loggedIn ?
                  <>
                    <label>Welcome, Bartholomew Montgomery!</label>
                    <Button primary onClick={this.handleSignOut} >Sign Out</Button>
                  </>
                  :
                  <>
                      <NavLink exact to="/login">
                          <Button primary>Sign In</Button>
                      </NavLink>
                      <NavLink exact to="/signup">
                          <Button secondary>Sign Up</Button>
                      </NavLink>
                  </>
              }
            </Grid.Column>
            <Grid.Column width={14}>
              <NavBar />
            </Grid.Column>
          </Grid.Row>

          <Route exact path="/login" render={(props) => <LoginForm {...props} /> } />
          <Route exact path="/signup" render={(props) => <SignupForm {...props} /> } />
          <Route exact path='/' render={() => <Market />} />
          <Route exact path='/portfolio' render={() => <Portfolio />} />
          <Route exact path='/watchlist' render={() => <Watchlist />} />
          <Route path='/detail' render={() => <StockDetail />} />
        </Grid>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  const { token } = state.auth;
  return { token };
};

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

