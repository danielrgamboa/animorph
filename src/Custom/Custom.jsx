import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Button } from '@material-ui/core';
import ReactAudioPlayer from 'react-audio-player';
import { useHistory } from 'react-router-dom';

const Custom = (props) => {


    const [play, setPlay] = React.useState(0);
    const [finish, setFinish] = React.useState(0);
    const [view, setView] = React.useState(0);
    React.useEffect(() => {
        const listString = localStorage.getItem('list');
        if (props.location.pathname === "/crea") {
            var background = document.getElementById('background');
            background.style.backgroundImage = 'url(./images/backgroundcustom.jpg)';
        }
    }, []);
    const history = useHistory();

    const handleClickEars = (index) => {
        handleFinishSound();
        if (props.ears + index >= 1 && props.ears + index <= 7) {
            props.setEars(props.ears + index);
        } else if (props.ears + index < 1) {
            props.setEars(7);
        } else if (props.ears + index > 7) {
            props.setEars(1);

        }

        let indexconv = props.ears + index;
        if (props.ears + index === 0) {
            indexconv = 7;
        } else if (props.ears + index === 8) {
            indexconv = 1;
        }

        console.log(indexconv)

        switch (indexconv) {
            case 1:
                let element1 = document.getElementById('ears')
                element1.style.top = '-150px';
                element1.style.removeProperty('left');

                break;
            case 2:
                let element2 = document.getElementById('ears')
                element2.style.top = '-550px';
                element2.style.removeProperty('left');
                break;

            case 3:
                let element3 = document.getElementById('ears')
                element3.style.top = '-560px';
                element3.style.left = '-12px';
                break;

            case 4:
                let element4 = document.getElementById('ears')
                element4.style.top = '-450px';
                element4.style.removeProperty('left');
                break;

            case 5:
                let element5 = document.getElementById('ears')
                element5.style.top = '-410px';
                element5.style.removeProperty('left');
                break;

            case 6:
                let element6 = document.getElementById('ears')
                element6.style.top = '-450px';
                element6.style.removeProperty('left');
                break;

            case 7:
                let element7 = document.getElementById('ears')
                element7.style.top = '-490px';
                element7.style.removeProperty('left');
                break;

            default:
                break;
        }


    }


    const handleClickEyes = (index) => {
        if (props.eyes + index >= 1 && props.eyes + index <= 7) {
            props.setEyes(props.eyes + index);
        } else if (props.eyes + index < 1) {
            props.setEyes(7);
        } else if (props.eyes + index > 7) {
            props.setEyes(1);
        }
    }

    const handleClickMouth = (index) => {
        if (props.mouth + index >= 1 && props.mouth + index <= 7) {
            props.setMouth(props.mouth + index);
        } else if (props.mouth + index < 1) {
            props.setMouth(7);
        } else if (props.mouth + index > 7) {
            props.setMouth(1);
        }

        let indexconv = props.mouth + index;
        if (props.mouth + index === 0) {
            indexconv = 7;
        } else if (props.mouth + index === 8) {
            indexconv = 1;
        }

        switch (indexconv) {
            case 1:
                let element1 = document.getElementById('mouth')
                element1.style.top = '';
                break;
            case 2:
                let element2 = document.getElementById('mouth')
                element2.style.top = '';
                break;

            case 3:
                let element3 = document.getElementById('mouth')
                element3.style.top = '7px';
                break;

            case 4:
                let element4 = document.getElementById('mouth')
                element4.style.top = '-10px';
                break;

            case 5:
                let element5 = document.getElementById('mouth')
                element5.style.top = '';
                break;

            case 6:
                let element6 = document.getElementById('mouth')
                element6.style.top = '-20px';
                break;

            case 7:
                let element7 = document.getElementById('mouth')
                element7.style.top = '-20px';
                break;

            default:
                break;
        }
    }

    const handleClickChin = (index) => {
        if (props.chin + index >= 0 && props.chin + index <= 4) {
            props.setChin(props.chin + index);
        } else if (props.chin + index < 1) {
            props.setChin(4);
        } else if (props.chin + index > 4) {
            props.setChin(0);
        }

        let indexconv = props.chin + index;
        if (props.chin + index === -1) {
            indexconv = 4;
        } else if (props.chin + index === 5) {
            indexconv = 0;
        }


        switch (indexconv) {
            case 1:
                let element1 = document.getElementById('chin')
                element1.style.top = '';
                element1.style.removeProperty('left');

                break;
            case 2:
                let element2 = document.getElementById('chin')
                element2.style.top = '0px';
                element2.style.left = '-9px';
                break;

            case 3:
                let element3 = document.getElementById('chin')
                element3.style.top = '99px';
                element3.style.removeProperty('left');
                break;

            case 4:
                let element4 = document.getElementById('chin')
                element4.style.top = '99px';
                element4.style.removeProperty('left');
                break;

            default:
                break;
        }
    }

    const handleFinishSound = () => {
        setPlay(0);
    }

    const handleSound = () => {
        setPlay(1);
    }

    const handlefinish = () => {
        var background2 = document.getElementById('background');
        console.log("holaa")
        background2.style.backgroundImage = 'url(./images/backgroundfinish.jpg)';
            setFinish(1);
     

    }

    const handleviewani = () => {
        if (props.eyes !== 1) {
            setView(1);
        }
    }

    const handlereset = () => {
        history.push('/');
        props.setEars(1);
        props.setEyes(1);
        props.setMouth(1);
        props.setChin(0);
    }




    return <div className="custom">



        {view === 0 &&
            <div className="custom__btnnav">
                <Tooltip title="Mira como tu Animorph" arrow placement="right">
                    <img onClick={handleviewani} src="./images/Buttons/btnojo.png" alt="" />
                </Tooltip>
                <Tooltip title="Escucha como tu Animorph" arrow placement="left">
                    <img onClick={handleSound} src="./images/Buttons/btnoir.png" alt="" />
                </Tooltip>
            </div>
        }

        <div className="custom_preview">
            {finish === 0 &&
                <div className="custom__btnSel left">
                    <Tooltip title="Orejas" arrow placement="left">
                        <img src="./images/Buttons/btnflecha.png" onClick={() => handleClickEars(+1)} alt="" />
                    </Tooltip>
                    <Tooltip title="Ojos" arrow placement="left">
                        <img src="./images/Buttons/btnflecha.png" onClick={() => handleClickEyes(+1)} alt="" />
                    </Tooltip>
                    <Tooltip title="Boca" arrow placement="left">
                        <img src="./images/Buttons/btnflecha.png" onClick={() => handleClickMouth(+1)} alt="" />
                    </Tooltip>
                    <Tooltip title="Pelaje" arrow placement="left">
                        <img src="./images/Buttons/btnflecha.png" onClick={() => handleClickChin(+1)} alt="" />
                    </Tooltip>
                </div>
            }
            <div className="custom_prevAnimorph" id="custom_prevAnimorph">
                <img className="custom_skinPrev" src={'./images/Animorphs/skin' + props.skin + '.png'} alt="" />
                <img className="custom_chin" id="chin" src={'./images/Animorphs/Chin/barbilla' + props.chin + '.png'} alt="" />
                <img className="custom_eyes" src={'./images/Animorphs/Eyes/ojos' + props.eyes + '.png'} alt="" />
                <img className="custom_mouth" id="mouth" src={props.mouth === 1 ? './images/Animorphs/Mouth/boca' + props.mouth + '' + props.skin + '.png' : './images/Animorphs/Mouth/boca' + props.mouth + '.png'} alt="" />
                <img className="custom_ears" id="ears" src={props.ears === 1 ? './images/Animorphs/Ears/orejas' + props.ears + '' + props.skin + '.png' : './images/Animorphs/Ears/orejas' + props.ears + '.png'} alt="" />
            </div>
            {finish === 0 &&
                <div className="custom__btnSel right">
                    <Tooltip title="Orejas" arrow placement="right">
                        <img src="./images/Buttons/btnflecha.png" onClick={() => handleClickEars(-1)} alt="" />
                    </Tooltip>
                    <Tooltip title="Ojos" arrow placement="right">
                        <img src="./images/Buttons/btnflecha.png" onClick={() => handleClickEyes(-1)} alt="" />
                    </Tooltip>
                    <Tooltip title="Boca" arrow placement="right">
                        <img src="./images/Buttons/btnflecha.png" onClick={() => handleClickMouth(-1)} alt="" />
                    </Tooltip>
                    <Tooltip title="Pelaje" arrow placement="right">
                        <img src="./images/Buttons/btnflecha.png" onClick={() => handleClickChin(-1)} alt="" />
                    </Tooltip>
                </div>
            }

        </div>

        {play === 1 &&
            <ReactAudioPlayer
                src={'./audio/' + props.ears + '.mp3'}
                autoPlay
                onEnded={handleFinishSound}
            />

        }
        {view === 0 &&
            <div className="buttonposCustom">
                {finish === 0 &&
                    <Button variant="contained" color="primary" size="large" onClick={handlefinish} >Convertir</Button>
                }
            </div>

        }

        {finish === 1 &&
            <div className="buttonposCustom">
                <Button variant="contained" color="primary" size="large" onClick={handlereset} >Reiniciar</Button>
            </div>

        }

        {view === 1 &&
            <div className="custom_animorphview" onClick={() => setView(0)}>
                <div className="custom_animorphviewcontent">

                    <img src={'./images/POV/' + props.eyes + '.jpg'} alt="" />

                    <div className="custom_btnexitview">
                        <Button variant="contained" color="secondary" onClick={() => setView(0)}>Salir</Button>
                    </div>

                </div>
            </div>

        }



    </div>
}

Custom.propTypes = {
    skin: PropTypes.number,
    setSkin: PropTypes.func,
    ears: PropTypes.number,
    setEars: PropTypes.func,
    eyes: PropTypes.number,
    setEyes: PropTypes.func,
    mouth: PropTypes.number,
    setMouth: PropTypes.func,
    chin: PropTypes.number,
    setChin: PropTypes.func,
};

export default Custom;