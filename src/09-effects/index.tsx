import { useEffect, useState } from 'react';

type PopcornMachineProps = {
  speed: number;
  onLog: (message: string) => void;
};

function PopcornMachine({ speed, onLog }: PopcornMachineProps) {
  const [popped, setPopped] = useState(0);

  // const [log, setLogChild] = useState('');

  useEffect(() => {
    onLog(`▶️ effect: start popping every ${speed}ms`);
    const id = setInterval(() => setPopped((p) => p + 1), speed);

    // setLogChild(id + '');
    return () => {
      onLog(`🧹 cleanup: stop popping every ${speed}ms`);
      clearInterval(id);
    };
  }, [speed]);

  return (
    <div className="machine">
      <span className="machine-emoji">🍿</span>
      <span className="machine-count">{popped}</span>
      <span className="machine-label">popped every {speed}ms</span>
    </div>
  );
}

export default function EffectView() {
  const [visible, setVisible] = useState(true);
  const [speed, setSpeed] = useState(1000);
  const [log, setLog] = useState<string[]>([]);

  function addLog(message: string) {
    setLog((l) => [...l, message]);
  }

  return (
    <div className="effects">
      <div className="toolbar">
        <button className="btn" onClick={() => setVisible(!visible)}>
          {visible ? '🙈 Unmount machine' : '👀 Mount machine'}
        </button>
        <label className="inline-field">
          Speed
          <select
            className="input"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          >
            <option value={1000}>1000ms</option>
            <option value={500}>500ms</option>
            <option value={200}>200ms</option>
          </select>
        </label>
        <button className="btn" onClick={() => setLog([])}>
          Clear log
        </button>
      </div>
      <div className="effects-layout">
        {visible ? (
          <PopcornMachine speed={speed} onLog={addLog} />
        ) : (
          <div className="machine machine-off">Machine unmounted</div>
        )}
        <section className="log-panel">
          <h3>Effect log</h3>
          <ul className="log">
            {log.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
