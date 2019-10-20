import React from 'react';
import SubNav from './subNav';
import tv from '../Components/images/tv.png'

const Tv = (props) => {
    return(
        <div>
            <SubNav items={props.items} name={props.name}/>
            <img src={tv} className='homeImg' alt='homepage'/>
        </div>
    )
}

export default Tv;