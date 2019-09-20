import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Switch from "react-switch";
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Header extends PureComponent {
  static propTypes = {
    store: PropTypes.object
  }

  componentDidMount() {
    const {store: {changeColorMode}} = this.props;
    changeColorMode(localStorage.getItem('nightMode') === 'true')
  }

  onChangeHandle = (checked) => {
    const {store: {changeColorMode}} = this.props;
    localStorage.setItem('nightMode', checked);
    changeColorMode(checked);
  }

  render() {
    const {store : {nightMode}} = this.props; 
    return (
      <header>
        <div className="header-container">
          <div className="header-inner">
            <p>Night mode : {nightMode ? 'On' : 'Off'}</p>
            <div className="switch-block">
              <Switch  
                onChange={this.onChangeHandle} 
                checked={nightMode} 
                uncheckedIcon={false} 
                checkedIcon={false}
                onColor={'#79c695'}
                offColor={'#f28588'}
              />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
