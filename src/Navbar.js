//import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'


export const Navbar = (props) => {
    return (
        <div>
            <Link to="/">Cat Breeds</Link>
             | 
            <Link to="/catfacts">Cat Facts</Link>
        </div>
    )
}