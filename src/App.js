import { AnimatePresence, motion } from 'framer-motion';
import {  useEffect, useState } from 'react';
import './App.css';
import { exitScreen, offScreen, onScreen } from './components/animations';
import Main from './components/Main';
import Weather from './components/Weather';
import { navigationContext } from './navigationContext';
import { store } from './store';

function App() {
  const [city,setCity] = useState({})
  const [navigator,setNavigator] = useState ('main')
  useEffect(()=>{
    if(city.city){
    setNavigator('');
        setTimeout(()=>{
          setNavigator('weather')
        },500)
    }
  },[city])
  

  return (
    <navigationContext.Provider value={{navigator,setNavigator}}>
    <store.Provider value ={{city,setCity}}>
      <div className="App">
        <AnimatePresence>
            {
            navigator === 'main' && 
            <motion.div 
             key='main'
             initial={offScreen('x')}
             animate={onScreen('x')}
             exit={exitScreen('x')}
            >
            <Main />
            </motion.div>}

            {navigator === 'weather' && <motion.div
              key='weather'
             initial={offScreen('x')}
             animate={onScreen('x')}
             exit={exitScreen('x')}
            >
              <Weather />
            </motion.div>
            }
           
        </AnimatePresence>
            
        
      </div>
    </store.Provider>
    </navigationContext.Provider>
  );
}

export default App;
