import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Charts from './components/Charts';
import Footer from '../Common/Footer';

class Home extends Component {

  static propTypes = {
    store : PropTypes.object
  }

  render() {
    const { categories, balance } = this.props.store;

    return (
      <div>
        <Charts data={categories} />
        <Footer balance={balance} />
      </div>
    )
  }
}

export default Home
