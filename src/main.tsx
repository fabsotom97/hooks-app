import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'sonner';
//import { HooksApp } from './HooksApp';
// import { TrafficLight } from './traffic-light/components/TrafficLight';
//import { TrafficLightWithUseEffect } from './traffic-light/components/TrafficLightWithUseEffect';
//import { TrafficLightWithHooks } from './traffic-light/components/TrafficLightWithHooks';
//import { PokemonPage } from './pokemon/components/PokemonPage';
//import { FocusScreen } from './focus-screen/FocusScreen';
// import { TasksApp } from './task/components/TaskApp';
//import { ScrambleWords } from './scramble-words/components/ScrambleWords';
// import { InstagromApp } from './instagrom/InstagromApp';
import { ClientInformation } from './client-information/ClientInformation';
import { getUserAction } from './client-information/actions/get-user.action';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithUseEffect /> */}
    {/* <TrafficLightWithHooks /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <InstagromApp /> */}
    <Suspense fallback={
      <div className="bg-gradient flex flex-col">
        <h1 className="text-white text-2xl">Loading user...</h1>
      </div>
    }>
      <ClientInformation getUser={getUserAction(100)} />
    </Suspense>
  </StrictMode>,
)
