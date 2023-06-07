import React,{useState} from 'react'

export default function TextForm(props) {
    
  const [text, setText] = useState('')
    
  const udpateText=function(event){
        setText(event.target.value)
  }
  
  const handleUpperClick=()=>{
    setText(text.toUpperCase())
  }
  const handleLowerClick=()=>{
    setText(text.toLowerCase())
  }

  const handleClearText=()=>{
    setText("")
  }



  return (

    <div>
        <h3 style={{"color":`${props.mode==='Light'?"black":'white'}`}}>Enter the Text To Analyze</h3>
        <textarea style={{"backgroundColor":`${props.mode==='Light'?"white":'#191919'}`,color:`${props.mode==='Light'?"black":"white"}`}} value={text} onChange={udpateText} name="textarea" id="textarea" cols="130" rows="20"></textarea>
        <p style={{"color":`${props.mode==='Light'?"black":'white'}`}}>Word Count-{text.split(' ').length-1} Character Count-{text.length}</p>

        <button onClick={handleUpperClick} className='func-btn'>Convert to Uppercase</button>
        <button onClick={handleLowerClick} className='func-btn'>Convert to LowerCase</button>
        <button onClick={handleClearText} className='func-btn'>Clear Text</button>
        <button className='func-btn'>Remove Extra Spaces</button>

        <h3 style={{"color":`${props.mode==='Light'?"black":'white'}`}} className='preview-text'>Preview</h3>
        <p  style={{"color":`${props.mode==='Light'?"black":'white'}`}} className='preview-text-content'>{text.length===0?"Enter text to preview it here":text}</p>
    </div>
  )
}
