import { useState } from 'react';
import './App.css';
import ShowPhrase from './components/ShowPhrase';
import ShowButton from './components/ShowButton';
import arr from './utils/phrases.json';
import randomArr from './services/randomArr';
import imagesArr from './utils/images.json'

function App() {

  const quote = randomArr(arr);
  const[randomPhrase, setRandomPhrase] = useState(quote);
  const photo = randomArr(imagesArr);
 const [image,setImage] = useState(photo);


  const appStyles = {
    backgroundImage: `url(../fortuna-1/fondo${image}.jpg)`,
  }
  
  return (
    
    <div className='app' style={appStyles}>
     <h1 className='app_title'>Galleta de la Fortuna</h1>
      <ShowButton
        setRandomPhrase = {setRandomPhrase}
        setImage = {setImage}
      />
      
      <ShowPhrase
       randomPhrase = {randomPhrase}
      />

    </div>
      
    
  )
}

export default App; 
