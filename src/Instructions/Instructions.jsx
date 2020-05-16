import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Instructions = (props) => {

    const [count, setCount] = React.useState(0);
    const history = useHistory();


    const handleNext = () => {

        setCount(count + 1);
        console.log(count)
        if (count === 2) {
            history.push('/escoge');
        }
    }


    if (props.location.pathname === "/instrucciones") {
        console.log("hola wapo")
        var background = document.getElementById('background');
        background.style.backgroundImage = 'url(./images/backgroundins.jpg)';
    }


    return <div className="Instructions">

        <div className="Instructions__text">
            {count === 0 &&
                <div>
                    <h1>!Bienvenido AniMorph Nauta!</h1>
                    <p>!Usa tu creatividad y los conceptos aprendidos de los animales en peligro
                    de extinción para crear un simbionte naturalmente
                    espectural y creativo!  </p>

                </div>
            }

            {count === 1 &&
                <div>
                    <h2>Primero escoge el tipo de piel que sea más parecido al tuyo... </h2>
                    <p>Recuerda que como el mundo animal, los humanos somos
                    todos diversos y todos importamos.
                    Del mismo modo que respetas a los animales debes hacerlo con los demás.</p>

                </div>
            }

            {count === 2 &&
                <div>
                    <h2>Usa las flechas para cambiar las facciones de los animales para crear tu simbionte.</h2>
                    <p>Podrás escoger desde orejas, ojos y nariz, hasta picos, aletas y pelajes!
                    Solo usa tu imaginación y se hará realidad.
                    !Buena suerte AniMorph Nauta! </p>

                </div>
            }
        </div>


        <Button onClick={handleNext} variant="contained" color="primary" size="large" >Siguiente</Button>

    </div>
}


export default Instructions;