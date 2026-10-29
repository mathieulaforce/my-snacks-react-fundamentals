import { useState } from 'react';
import StateDemo from './demo';
import StateExample from './stateExample';

export default function StateView() {
  const [isDemo, setIsDemo] = useState<boolean>(false);

  return (
    <>
      <div className="view-switch">
        <button aria-pressed={!isDemo} onClick={() => setIsDemo(false)}>
          Example
        </button>
        <button aria-pressed={isDemo} onClick={() => setIsDemo(true)}>
          Demo
        </button>
      </div>
      {isDemo ? <StateDemo /> : <StateExample />}
    </>
  );
}
