// import React from 'react';
import Index from '../src/components/Index/';
import Spend from '../src/components/Spend/';

export default [
  {
    path: '/',
    component: Index,
    isExact: true
  },
  {
    path: '/spend',
    component: Spend,
    isExact: true
  }
]