import React from 'react';
import SubNav from './subNav';
import iphone from '../Components/images/iphone.png'

const Iphone = (props) => {
    return(
        <div>            
            <SubNav items={props.items} name={props.name}/>
            <img src={iphone} className='homeImg' alt='homepage'/>
        </div>
    )
}

export default Iphone;