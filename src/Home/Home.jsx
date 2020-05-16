import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Home = (props) => {

    if (props.location.pathname === "/") {
        var background = document.getElementById('background');
        background.style.backgroundImage = 'url(./images/homebackground.jpg)';
    }


    return <div>
        <Link to='/instrucciones'>
            <div className="buttonpos">
            <Button variant="contained" color="primary" size="large" >Jugar</Button>
            </div>

        </Link>


    </div>
}


export default Home;