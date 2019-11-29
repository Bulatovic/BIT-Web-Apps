import React from 'react';
import { Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import UsersPage from './Users/UsersPage';
import About from './components/About/About'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGrid: false
    };
  }

  changeLayout = () => {
    this.setState(prevState => {
      return {
        isGrid: !prevState.isGrid
      };
    });
  };


  render() {
    return (
      <>
        <Header onChangeLayout={this.changeLayout} />
        <Route exact path="/" component={UsersPage} />
        {/* <Route exact path="/about" component={AboutPage} /> */}
        <Footer />
      </>
    );
  }
}

export default App;
