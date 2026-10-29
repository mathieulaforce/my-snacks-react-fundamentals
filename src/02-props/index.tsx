type SnackCardProps = {
  name: string;
  emoji: string;
  bio: string;
  controversy: number;
};

function SnackCard({ name, emoji, bio, controversy }: SnackCardProps) {
  return (
    <article className="snack-card">
      <span className="snack-emoji">{emoji}</span>
      <h3 className="snack-name">{name}</h3>
      <p className="snack-bio">{bio}</p>
      <span className="heat">
        {'🔥'.repeat(controversy)} {controversy >= 8 && '⚠️ spicy take'}
      </span>
    </article>
  );
}

export default function PropsView() {
  // remove prop and use wrong type
  const mint = {
    name: 'Mint chocolate',
    emoji: '🌿',
    bio: 'Toothpaste that went to finishing school.',
    controversy: 10,
    kip: '',
  };

  return (
    <div className="cards">
      <SnackCard
        name="Speculoos"
        emoji="🍪"
        bio="Shows up with every coffee. Nobody asked; everybody's grateful."
        controversy={1}
      />
      <SnackCard {...mint} />
      <SnackCard
        name="Celery sticks"
        emoji="🥬"
        bio="A snack in name only."
        controversy={5}
      />
    </div>
  );
}
