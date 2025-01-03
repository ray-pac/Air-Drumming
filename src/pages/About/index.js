import * as React from 'react'
import Home from './home'
import Who from './who'
import Milestones from './milestones'
import Evnets from './events'
//import About_back from '../../assets/images/About/about.png'

export default function Main() {
  return (
    <div className='about_back'>
      <Home />
      <Who />
      <Milestones />
      <Evnets />
    </div>
  );
}