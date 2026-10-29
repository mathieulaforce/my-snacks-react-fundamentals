import { useState } from 'react';
import { SNACKS } from '../shared/snacks';

export default function ListDemo() {
  const [snacks, setSnacks] = useState(SNACKS.slice(0, 4));
  const [useIndexAsKey, setUseIndexAsKey] = useState(true);

  return (
    <div className="key-demo">
      <div className="toolbar">
        <button
          className="btn"
          onClick={() => setSnacks([...snacks].reverse())}
        >
          🔃 Reverse
        </button>
        <button className="btn" onClick={() => setSnacks(snacks.slice(1))}>
          ✂️ Remove first
        </button>
        <button className="btn" onClick={() => setSnacks(SNACKS.slice(0, 4))}>
          Reset
        </button>
        <label className="checkbox-field">
          <input
            type="checkbox"
            checked={useIndexAsKey}
            onChange={(e) => setUseIndexAsKey(e.target.checked)}
          />
          use <code>key={'{index}'}</code> (instead of
          <code>key={'{snack.id}'}</code>)
        </label>
      </div>
      <ul className="key-list">
        {snacks.map((snack, index) => (
          <li key={useIndexAsKey ? index : snack.id}>
            <span className="key-name">
              <span className="key-emoji">{snack.emoji}</span> {snack.name}
            </span>
            <input
              className="input"
              placeholder={`Your hot take on ${snack.name}…`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
