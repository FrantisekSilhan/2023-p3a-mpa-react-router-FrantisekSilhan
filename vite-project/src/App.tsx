import './App.css'
import { Timer } from './TimerComponents/Timer';
import { Settings } from './TimerComponents/Settings';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [settings, setIsSettings] = useState<boolean>(false);

  const [thresholdType, setThresholdType] = useState<'minutes' | 'percentage'>('minutes');
  const [thresholdValue, setThresholdValue] = useState<number>(5);
 
  const [testTime, setTestTime] = useState<number>(600);
  const [totalTime, setTotalTime] = useState<number>(testTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  function handleSetThresholdType(type: 'minutes' | 'percentage') {
    setThresholdType(type);
  }

  function handleSetThresholdValue(value: number) {
    setThresholdValue(value);
  }

  function handleIsRunning() {
    setIsRunning(x => !x);
  }

  function handleSetTestTime(time: number) {
    setTestTime(time);
  }

  function handleSetIsSettings(){
    setIsSettings(x => !x);
  }

  function handleSetTotalTime(time: number) {
    setTotalTime(time);
  }

   return (
    <>
      {settings 
        ? <Settings thresholdValue={thresholdValue} setTotalTime={handleSetTotalTime} setThresholdType={handleSetThresholdType} setThresholdValue={handleSetThresholdValue} setTestTime={handleSetTestTime} setIsRunning={handleIsRunning} isRunning={isRunning} setIsSettings={handleSetIsSettings}/>
        : <Timer ThresholdType={thresholdType} ThresholdValue={thresholdValue}  totalTime={totalTime} Name={"Vánoční webování"} isRunning={isRunning} testTime={testTime} setTestTime={handleSetTestTime}/>
      }
      <button className='settings__button' onClick={() => setIsSettings(x => !x)}>                  <FontAwesomeIcon icon={faGear} /> {settings? ("Back") : ("Settings")}</button>
    </>
  )
}

export default App
