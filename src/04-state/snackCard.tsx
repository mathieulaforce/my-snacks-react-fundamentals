import { useState } from 'react';
import type { Snack } from '../shared/snacks';

type SnackCardProps = {
  snack: Snack;
  canMoveUp: boolean;
  canMoveDown: boolean;
  onMoveUp: () => void;
  onMoveDown: () => void;
};

export function SnackCard({
  snack,
  canMoveUp,
  canMoveDown,
  onMoveUp,
  onMoveDown,
}: SnackCardProps) {
  // Local state: only this card cares about its debate count.
  const [debates, setDebates] = useState(0);
  // let debates = 0;

  return (
    <article className="snack-card">
      <span className="snack-emoji">{snack.emoji}</span>
      <h3 className="snack-name">{snack.name}</h3>
      <p className="snack-bio">{snack.bio}</p>
      <span className="heat">{'🔥'.repeat(snack.controversy)}</span>
      <div className="card-actions">
        <button className="btn" disabled={!canMoveUp} onClick={onMoveUp}>
          ⬆️
        </button>
        <button className="btn" disabled={!canMoveDown} onClick={onMoveDown}>
          ⬇️
        </button>
        <button className="btn" onClick={() => setDebates(debates + 1)}>
          🗣️ Debate ({debates})
        </button>
        {/* <button className="btn" onClick={() => ++debates}>
          🗣️ Debate ({debates})
        </button> */}
      </div>
    </article>
  );
}
