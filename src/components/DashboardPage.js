import React from 'react';

import Summary from './Summary';

const DashboardPage = (props) => (
  <div>
    <Summary name={props.name}/>
    Dashboard Page
  </div>
);

export default DashboardPage;
