
import { Component } from 'react';
import Footer from '../src/Footer';

export default
<Footer copyrights="Copyright 2017, By Chris Rackley, Li Chen, Caroline Bowes, and Adrian Fahrer"
 
  links={
    <ul>
      <li><a className="grey-text text-lighten-3" href="./pages/dashboard">Dashboard</a></li>
      <li><a className="grey-text text-lighten-3" href="./pages/calendar">Calendar</a></li>
      <li><a className="grey-text text-lighten-3" href="./pages/stats">Stats</a></li>
      
    </ul>
  }
  className='example'
>
    <h5 className="white-text">reBootcampSpot</h5>
    <p className="grey-text text-lighten-4">Making BootCampSpot great. Not "great again" because it was never great in the first place.</p>
</Footer>;


);
}