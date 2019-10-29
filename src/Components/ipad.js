import React from 'react';
import SubNav from './subNav';
import ipad from '../Components/images/ipad.png'

const Ipad = (props) => {
    return(
        <div>
            <SubNav items={props.items} name={props.name}/>
            <img src={ipad} className='homeImg' alt='homepage'/>
        </div>
    )
}

export default Ipad;