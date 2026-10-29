import type { Snack } from '../shared/snacks';

export type HotTake = { snack: Snack; heat: number };

export function Leaderboard({ hotTakes }: { hotTakes: HotTake[] }) {
  return (
    <aside className="leaderboard">
      <h3>🌶️ Hottest takes</h3>
      <ol>
        {hotTakes.map(({ snack, heat }) => (
          <li key={snack.id}>
            {snack.emoji} {snack.name} <strong>({heat})</strong>
          </li>
        ))}
      </ol>
    </aside>
  );
}
