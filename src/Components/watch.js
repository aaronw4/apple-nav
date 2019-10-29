import React from 'react';
import SubNav from './subNav';
import watch from '../Components/images/iwatch.png'

const Watch = (props) => {
    return(
        <div>
            <SubNav items={props.items} name={props.name}/>
            <img src={watch} className='homeImg' alt='homepage'/>
        </div>
    )
}

export default Watch;