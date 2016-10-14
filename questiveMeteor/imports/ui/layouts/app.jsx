import React from 'react';
import { Navigation } from '../navigation.jsx';

export const App = ( { children } ) => (
  <div>
    <Navigation />
    { children }
  </div>
)