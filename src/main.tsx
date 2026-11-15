import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { HooksApp } from './HooksApp';
// import { TrafficLight } from './traffic-light/components/TrafficLight';
import { TrafficLightWithUseEffect } from './traffic-light/components/TrafficLightWithUseEffect';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    <TrafficLightWithUseEffect />
  </StrictMode>,
)
