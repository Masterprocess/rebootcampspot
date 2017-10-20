import React from 'react';
import 

class Atable extends React.Component{

const items = [
  {Announcement: 'Class has been canceled', When: 'Monday & Tuesday' },
  {Announcement: 'Install MySQL Workbench', When: 'By Next Class'},
  {Announcement: 'Tour Red Hat', When: 'Thursday @ Noon'}
];

React.render(
  <JsonTable rows={ items } />,
  document.body
);
}
}

export default Atable