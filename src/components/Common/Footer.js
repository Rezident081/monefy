import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

export default class Footer extends PureComponent {
  static propTypes = {
    balance: PropTypes.number
  }

  render() {
    const {balance} = this.props;
    return (
      <footer>
        <div className='footer-container'> 
          <div className='balance-block'>
            <div className='balance-inner'>
              Balance : {balance} $
            </div>
          </div>
          <div className='plus-minus-block'>
            <button className='minus'><span>-</span></button>
            <button className='plus'><span>+</span></button>
          </div>
        </div>
      </footer>
    )
  }
}
