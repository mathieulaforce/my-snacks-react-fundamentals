import { useState } from 'react';
import IntroView from './00-intro/';
import RenderingView from './05-rendering';
import ComponentsView from './01-components/';
import PropsView from './02-props';
import './App.css';
import StateView from './04-state';
import ListView from './03-lists';
import FormsView from './06-forms';
import LiftingStateView from './07-lifting-state';
import EffectsView from './09-effects';

function App() {
  const [viewName, setViewName] = useState('intro');

  const activateView = (name: string) => {
    setViewName(name);
  };

  function renderView() {
    switch (viewName) {
      case 'intro':
        return <IntroView />;

      case 'components':
        return <ComponentsView />;
      case 'props':
        return <PropsView />;
      case 'list':
        return <ListView />;
      case 'state':
        return <StateView />;
      case 'rendering':
        return <RenderingView />;
      case 'forms':
        return <FormsView />;
      case 'lifting-state':
        return <LiftingStateView />;
      case 'effects':
        return <EffectsView />;
    }

    return <IntroView />;
  }

  return (
    <>
      <header className="shell-header">
        <h1 className="shell-title">Snack Tier List</h1>
      </header>

      <nav className="shell-steps">
        <button onClick={() => activateView('intro')}>Intro</button>
        <button onClick={() => activateView('components')}>Components</button>
        <button onClick={() => activateView('props')}>Props</button>
        <button onClick={() => activateView('list')}>List</button>
        <button onClick={() => activateView('state')}>State</button>
        <button onClick={() => activateView('rendering')}>Rendering</button>
        <button onClick={() => activateView('forms')}>Forms</button>
        <button onClick={() => activateView('lifting-state')}>
          Lifting state
        </button>
        <button onClick={() => activateView('effects')}>Effects</button>
      </nav>
      <main>{renderView()}</main>
    </>
  );
}

export default App;
