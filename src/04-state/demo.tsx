import { useState } from 'react';
import { SNACKS, TIERS } from '../shared/snacks';
import { SnackCard } from './snackCard';

export default function StateDemo() {
  const [snacks, setSnacks] = useState(SNACKS);

  function move(id: string, direction: -1 | 1) {
    // //Immutability vs Mutability
    // const snack = snacks.find((s) => s.id === id)!;
    // snack.tier = TIERS[TIERS.indexOf(snack.tier) + direction];
    // setSnacks(snacks);
    // return;

    setSnacks(
      snacks.map((snack) =>
        snack.id === id
          ? { ...snack, tier: TIERS[TIERS.indexOf(snack.tier) + direction] }
          : snack,
      ),
    );
  }

  return (
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
                  canMoveUp={index > 0}
                  canMoveDown={index < TIERS.length - 1}
                  onMoveUp={() => move(snack.id, -1)}
                  onMoveDown={() => move(snack.id, 1)}
                />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
