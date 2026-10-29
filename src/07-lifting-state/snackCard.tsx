import type { Snack } from '../shared/snacks';

type SnackCardProps = {
  snack: Snack;
  debates: number;
  canMoveUp: boolean;
  canMoveDown: boolean;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDebate: () => void;
};

export function SnackCard({
  snack,
  debates,
  canMoveUp,
  canMoveDown,
  onMoveUp,
  onMoveDown,
  onDebate,
}: SnackCardProps) {
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
        <button className="btn" onClick={onDebate}>
          🗣️ Debate ({debates})
        </button>
      </div>
    </article>
  );
}
