import Home from './Home.js';
import { inject, observer } from 'mobx-react';

export default inject('store')(observer(Home));