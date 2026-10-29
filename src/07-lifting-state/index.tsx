import { useState } from 'react';
import { SNACKS, TIERS, type Snack } from '../shared/snacks';
import { AddSnackForm } from './addSnackForm';
import { Leaderboard, type HotTake } from './leaderboard';
import { SnackCard } from './snackCard';

export default function LiftingStateView() {
  const [snacks, setSnacks] = useState(SNACKS);
  const [debates, setDebates] = useState<Record<string, number>>({});

  function move(id: string, direction: -1 | 1) {
    setSnacks(
      snacks.map((snack) =>
        snack.id === id
          ? { ...snack, tier: TIERS[TIERS.indexOf(snack.tier) + direction] }
          : snack,
      ),
    );
  }

  function addSnack(snack: Snack) {
    setSnacks([...snacks, snack]);
  }

  function debate(id: string) {
    setDebates({ ...debates, [id]: (debates[id] ?? 0) + 1 });
  }

  const hotTakes: HotTake[] = snacks
    .map((snack) => ({
      snack,
      heat: snack.controversy + (debates[snack.id] ?? 0),
    }))
    .sort((a, b) => b.heat - a.heat)
    .slice(0, 5);

  // //why does this not work?
  // const [hotTakes] = useState(() =>
  //   snacks
  //     .map((snack) => ({
  //       snack,
  //       heat: snack.controversy + (debates[snack.id] ?? 0),
  //     }))
  //     .sort((a, b) => b.heat - a.heat)
  //     .slice(0, 5),
  // );

  return (
    <>
      <AddSnackForm onAdd={addSnack} />
      <div className="with-sidebar">
        <div className="tier-list">
          {TIERS.map((tier, index) => (
            <section key={tier} className="tier-row">
              <div className="tier-label" data-tier={tier}>
                {tier}
              </div>
              <div className="tier-snacks">
                {snacks
                  .filter((snack) => snack.tier === tier)
                  .map((snack) => (
                    <SnackCard
                      key={snack.id}
                      snack={snack}
                      debates={debates[snack.id] ?? 0}
                      canMoveUp={index > 0}
                      canMoveDown={index < TIERS.length - 1}
                      onMoveUp={() => move(snack.id, -1)}
                      onMoveDown={() => move(snack.id, 1)}
                      onDebate={() => debate(snack.id)}
                    />
                  ))}
              </div>
            </section>
          ))}
        </div>
        <Leaderboard hotTakes={hotTakes} />
      </div>
    </>
  );
}
