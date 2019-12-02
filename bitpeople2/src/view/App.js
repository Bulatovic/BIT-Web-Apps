import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import UsersPage from './Users/UsersPage';
import About from './components/About/About'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={UsersPage} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
