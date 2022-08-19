import './App.css';
import { useState } from 'react';
function App() {
  const cities = require('cities.json');
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0)
  const [suggestions, setSuggestions] = useState([]);
  const setSuggestHandler = (name, country) =>{
    setText(name)
    setSuggestions([])
    alert("country: "+country+"\nname: "+name)
    setIndex(0)
  }
  const onChangeHandler = (text)=>{
    var matches = []
    var topten  = []
    if (text.length>0) {
      matches = cities.filter((city) => {
        return city.name.toLowerCase().startsWith(text.toLowerCase());
      });
      topten = matches.slice(0, 20);
    }
    console.log('topten', topten)
    setSuggestions(topten)
    setText(text)
  }
  const handleCheckKey = (e) =>{
    if(suggestions.length>0){
      if(e.keyCode === 38){
        if(index > 0){
          setIndex(index-1)
        }
        console.log('onKeyUp')
      }else if (e.keyCode === 40){
        if(index < suggestions.length-1){
          setIndex(index+1)
        }
        console.log('onKeyDown')
      }else if(e.keyCode === 13){
        setSuggestHandler(suggestions[index].name, suggestions[index].country)
        console.log('onKeyEnter')
      }
    }
  }
  
  return (
    <div className="App ">
      <div>Welcome to search cities</div>
      <input style={{marginTop:'20px', height:'50px', margin:'10px'}} type = "text" className='col-md-6 input' 
      onKeyDown={handleCheckKey}
      onChange={e => onChangeHandler(e.target.value)} value={text}/>
      {suggestions && suggestions.map((suggestion, i) =>
        <div className='row justify-content-md-center'
          style={{heigit:'50px'}}
          onClick={()=> setSuggestHandler(suggestion.name, suggestion.country)}>
           <div className='col-md-6' key={i}  style={index === i ? {backgroundColor:'#AAA', marginTop:'1px', heigit:'50px'} :
            {backgroundColor:'#DDD', marginTop:'1px', heigit:'50px'}} >{suggestion.name}</div>
           </div>
      )}
    </div>
  );
}
export default App;
