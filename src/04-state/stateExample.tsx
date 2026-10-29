import { useState } from 'react';

export default function StateExample() {
  const [count, setCount] = useState(0);

  const [log, setLog] = useState<string[]>([]);

  function addThreeNaive() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  function addThreeWithUpdater() {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  function addOneAndLog() {
    setCount(count + 1);
    setLog([
      ...log,
      `Right after setCount(${count} + 1), count is still ${count}`,
    ]);
  }

  function pleaseDont() {
    setCount((c) => {
      c++;
      setLog((l) => [...l, `  count is ${c}`]);
      return c;
    });
  }

  return (
    <div>
      <p className="callout">Predict the number before you click!</p>
      <p className="big-number">{count}</p>
      <div className="toolbar">
        <button className="btn" onClick={() => addThreeNaive()}>
          +3 with setCount(count + 1) ×3
        </button>
        <button className="btn" onClick={addThreeWithUpdater}>
          +3 with setCount(c =&gt; c + 1) ×3
        </button>
        <button className="btn" onClick={addOneAndLog}>
          +1 and log count right after
        </button>
        <button className="btn" onClick={pleaseDont}>
          please don't do this
        </button>
        <button
          className="btn"
          onClick={() => {
            setCount(0);
            setLog([]);
          }}
        >
          Reset
        </button>
      </div>
      <ul className="log">
        {log.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
