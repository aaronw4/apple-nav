import React from 'react';
import SubNav from './subNav';
import music from '../Components/images/music.png'

const Music = (props) => {
    return(
        <div>
            <SubNav items={props.items} name={props.name}/>
            <img src={music} className='homeImg' alt='homepage'/>
        </div>
    )
}

export default Music;