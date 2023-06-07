import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {


  const [mode, setMode] = useState('Light')

  const toggleMode=()=>{
    if(mode==='Light'){
      setMode("Dark")
      document.body.style.backgroundColor='gray'
    }
    else{
      setMode("Light")
      document.body.style.backgroundColor='white'
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title='TextUtils' toggleMode={toggleMode} mode={mode}/>

    <div className="main">

    <section className="text-section"></section>
{/* 
    <Routes>
        <Route exact path="/" element={<TextForm mode={mode} />} />
        <Route exact path="/about" element={<About />} />
      </Routes> */}
      <TextForm mode={mode}/>



    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
