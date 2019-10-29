import React from 'react';
import {Link} from 'react-router-dom';

export default function SubNav(props){  

    return(        
        <div className='subMenu' id={props.name}>            
            {props.items.map(listing => (
                <div className='diplayItems'>
                    <Link to='#' className='link2'>
                    <img src={listing.url} id={listing.name} alt=''/>                    
                    <p className={props.name}>{listing.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

