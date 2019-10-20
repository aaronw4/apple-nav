import React from 'react';
import SubNav from './subNav';
import imac from '../Components/images/imac.png'

const Mac = (props) => {
    return(
        <div>
            <SubNav items={props.items}/>
            <img src={imac} className='homeImg' alt='homepage'/>
        </div>
        
    )
}

export default Mac;