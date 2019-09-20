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
    const { categories, balance } = this.props.store;

    return (
      <Fragment>
        <Header />
        <main>
          <Charts data={categories} />
        </main>
        <Footer balance={balance} />
      </Fragment>
    )
  }
}

export default Home
