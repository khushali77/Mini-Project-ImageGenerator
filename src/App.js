import "./css/App.css";
import DisplayImage from './components/DisplayImage';
import React,{useState,useEffect} from "react";

function App() {

  const [image,setImage] = useState('');
  const [loader,isLoader] = useState(false);

  function getImage(){
    isLoader(true);
    fetch('https://picsum.photos/350')
    .then((result)=>result.url)
    .then((message)=>{
      isLoader(false);
      setImage(message);
    })
    .catch((error)=>{
      console.log('Error!')
    })
  }

  useEffect(() => {getImage();}, [])

  return (
    <div className="App">
      <DisplayImage url={image} load={loader}></DisplayImage><br></br>
      <button onClick={getImage} className="get-btn">Get Image</button>
    </div>
  );
}

export default App;
