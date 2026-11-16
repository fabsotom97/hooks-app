import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { HooksApp } from './HooksApp';
// import { TrafficLight } from './traffic-light/components/TrafficLight';
//import { TrafficLightWithUseEffect } from './traffic-light/components/TrafficLightWithUseEffect';
//import { TrafficLightWithHooks } from './traffic-light/components/TrafficLightWithHooks';
//import { PokemonPage } from './pokemon/components/PokemonPage';
//import { FocusScreen } from './focus-screen/FocusScreen';
import { TasksApp } from './task/components/TaskApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithUseEffect /> */}
    {/* <TrafficLightWithHooks /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    <TasksApp />
  </StrictMode>,
)
