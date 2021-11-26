import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createElement, useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [text1, setText1] = useState(' ');
  const [text2, setText2] = useState(' ');
  const [img, setImg] = useState('elige');

  const onChangeText1 = function(ev){
    setText1(ev.target.value);
  }
  const onChangeText2 = function(ev){
    setText2(ev.target.value);
  }
  const onChangeImg = function(ev){
    setImg(ev.target.value);
  }
  const onClickExportar = function(ev){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href=img;
      link.click();
  });
  }

  return (
    <div className="App">

      <select onChange={onChangeImg}>
        <option value="flaca">flaca</option>
        <option value="fuego">fuego</option>
        <option value="futurama">futurama</option>
      </select> <br/>  

      <input onChange={onChangeText1} type="text" placeholder="texto1" /> <br />
      <input onChange={onChangeText2} type="text" placeholder="texto2" /> <br />
      <button onClick={onClickExportar}>exportar</button>

      <div className="meme" id="meme">
        <span>{text1}</span> <br/> 
        <span>{text2}</span> <br/>
        <img src={"img/"+img+".jpg"}/>
      </div>

    </div>
  );
}

export default App;
