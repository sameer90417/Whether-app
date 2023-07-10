import Whether from './Components/Whether';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {


  const endpoint = "https://api.weatherapi.com/v1/current.json?key=db836a51dd7245469af51140230707&q=30.7035229,76.67861111313437";
  const [data, setdata] = useState({});

  useEffect(
    () => {
      getData();
    }
  )

  function getData(){
    fetch(endpoint) 
    .then((resp) => resp.json())
    .then((data) => setdata(data))
  }

  return (
    <>
      
      <Routes>
        <Route exact path="/" element={<Whether data={data}/>} />
      </Routes>
      
    </>
  );
}

export default App;
