import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import Parent from "./component/reactAdvanced/day2/Portals/parent";


ReactDOM.render(<Parent/>, document.getElementById('app-root'));
ReactDOM.render(<AppRouter/>, document.getElementById('root'));

