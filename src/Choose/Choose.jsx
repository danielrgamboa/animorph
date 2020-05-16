import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';


const Choose = (props) => {
    console.log(props)

    if (props.location.pathname === "/escoge") {
        var background = document.getElementById('background');
        background.style.backgroundImage = 'url(./images/backgroundchoose.jpg)';
    }

    const handleSkinSel = (index) =>{
        props.setSkin(index);
    }



    return <div className="choose">

        <h1>!Escoge a tu AniMorph Nauta!</h1>

        <div className="choose_preview">
            <div className="choose_previewAnimorph">
                <img src={'./images/Animorphs/p'+ props.skin +'.png'} alt=""/>

            </div>

            <div className="choose_previewSkin">
                <div className="choose_color c1" onClick={()=>handleSkinSel(1)}></div>
                <div className="choose_color c2" onClick={()=>handleSkinSel(2)}></div>
                <div className="choose_color c3" onClick={()=>handleSkinSel(3)}></div>
                <div className="choose_color c4" onClick={()=>handleSkinSel(4)}></div>
                <div className="choose_color c5" onClick={()=>handleSkinSel(5)}></div>
                <div className="choose_color c6" onClick={()=>handleSkinSel(6)}></div>
                <div className="choose_color c7" onClick={()=>handleSkinSel(7)}></div>

            </div>

        </div>

        <div className="next">
        <Link to='/crea'>
        <Button variant="contained" color="primary" size="large" >Usar</Button>
        </Link>
        </div>

    </div>
}

Choose.propTypes = {
    skin: PropTypes.number,
    setSkin: PropTypes.func,
  };

export default Choose;