import { useState } from 'react';
import ListDemo from './demo';
import ListExample from './example';

export default function ListView() {
  //  remove  key and check the browser console.
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
      {isDemo ? <ListDemo /> : <ListExample />}
    </>
  );
}
