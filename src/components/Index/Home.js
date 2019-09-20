import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Charts from './components/Charts';
import Footer from '../Common/Footer';
import Header from '../Common/Header';

class Home extends Component {

  static propTypes = {
    store : PropTypes.object
  }

  render() {
    const { categories } = this.props.store;
    const { history } = this.props;

    return (
      <Fragment>
        <Header />
        <main>
          <Charts data={categories} />
        </main>
        <Footer history={history}  />
      </Fragment>
    )
  }
}

export default Home
