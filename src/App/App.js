import React from 'react';
import Home from '../Home/Home'
import Instructions from '../Instructions/Instructions'
import Choose from '../Choose/Choose'
import Custom from '../Custom/Custom'
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  const [skin, setSkin] = React.useState(1);
  const [ears, setEars] = React.useState(1);
  const [eyes, setEyes] = React.useState(1);
  const [mouth, setMouth] = React.useState(1);
  const [chin, setChin] = React.useState(0);

  return (
    <div className="App">

      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/instrucciones" component={Instructions} />
        <Route path="/escoge" render={(props) => <Choose skin={skin} setSkin={setSkin} location={props.location} />} />
        <Route path="/crea" render={(props) => <Custom skin={skin} location={props.location} ears={ears} setEars={setEars}
        eyes={eyes} setEyes={setEyes} mouth={mouth} setMouth={setMouth} chin={chin} setChin={setChin}/>} />
      </Router>


    </div>
  );
}

export default App;
