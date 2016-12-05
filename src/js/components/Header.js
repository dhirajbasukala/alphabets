import React from 'react';
import {Link }from 'react-router'

export default ()=> {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">alphabets </Link></li>
                    <li><Link to="/barnamala">barnamala </Link></li>
                    <li><Link to="/about">about </Link></li>
                </ul>
            </nav>
        </div>
    )
}
