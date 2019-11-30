import React from 'react';
import { Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import UsersPage from './Users/UsersPage';
import About from './components/About/About'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Route exact path="/" component={UsersPage} />
        <Route exact path="/about" component={About} />
        <Footer />
      </>
    );
  }
}

export default App;
