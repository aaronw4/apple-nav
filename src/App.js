import React, {useState} from 'react';
import {Route, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple} from '@fortawesome/free-brands-svg-icons';
import {data} from './Components/data';
import './App.css';
import home from './Components/home';
import Mac from './Components/mac';
import Ipad from './Components/ipad';
import Iphone from './Components/iphone';
import Watch from './Components/watch';
import Tv from './Components/tv';
import Music from './Components/music';
import Support from './Components/support';


function App() {
  const [items, setItems] = useState(data);

  function refresh() {    
      setTimeout(() => {window.location.reload()}, 1);
  }

  return (
    <div>
      <nav className='navBar' id={window.location.pathname}>
          <NavLink to='/' onClick={refresh}  className='link'><FontAwesomeIcon className='icon' icon={faApple}/></NavLink>
          <NavLink to='/mac' onClick={refresh} className='link'>Mac</NavLink>
          <NavLink to='/ipad' onClick={refresh} className='link'>iPad</NavLink>
          <NavLink to='/iphone' onClick={refresh} className='link'>iPhone</NavLink>
          <NavLink to='/watch' onClick={refresh} className='link'>Watch</NavLink>
          <NavLink to='/tv' onClick={refresh} className='link'>TV</NavLink>
          <NavLink to='/music' onClick={refresh} className='link'>Music</NavLink>
          <NavLink to='/support' onClick={refresh} className='link'>Support</NavLink>
          <NavLink to='#' className='link'><img className='symbol' alt='search' src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg'/></NavLink>
          <NavLink to='#' className='link'><img className='symbol' alt='bag' src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg'/></NavLink>
      </nav>
      <Route exact path='/' component={home}/>
      <Route path='/mac' render={() => {return <Mac items={items.mac}/>}} />
      <Route path='/ipad' render={() => {return <Ipad items={items.ipad} name='ipad'/>}} />
      <Route path='/iphone' key='4' render={() => {return <Iphone items={items.iphone} name='iphone'/>}} />
      <Route path='/watch' render={() => {return <Watch items={items.watch} name='watch'/>}}/>
      <Route path='/tv' render={() => {return <Tv items={items.tv} name='tv'/>}}/>
      <Route path='/music' render={() => {return <Music items={items.music} name='music'/>}}/>
      <Route path='/support' component={Support}/>      
    </div>
  );
}

export default App;
