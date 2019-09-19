import Home from './Home.js';
import { inject } from 'mobx-react';

export default inject('store')(Home);