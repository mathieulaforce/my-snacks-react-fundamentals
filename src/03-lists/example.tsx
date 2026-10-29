import { SNACKS, TIERS, type Snack } from '../shared/snacks';

function SnackCard({ snack }: { snack: Snack }) {
  return (
    <article className="snack-card">
      <span className="snack-emoji">{snack.emoji}</span>
      <h3 className="snack-name">{snack.name}</h3>
      <p className="snack-bio">{snack.bio}</p>
      <span className="heat">{'🔥'.repeat(snack.controversy)}</span>
    </article>
  );
}

export default function ListExample() {
  //  remove  key and check the browser console.

  return (
    <div className="tier-list">
      {TIERS.map((tier) => (
        <section key={tier} className="tier-row">
          <div className="tier-label" data-tier={tier}>
            {tier}
          </div>
          <div className="tier-snacks">
            {SNACKS.filter((snack) => snack.tier === tier).map((snack) => {
              return <SnackCard key={snack.id} snack={snack} />;
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
