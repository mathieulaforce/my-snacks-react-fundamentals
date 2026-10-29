import { useState, type SubmitEvent } from 'react';
import { TIERS, type Snack, type Tier } from '../shared/snacks';

type AddSnackFormProps = {
  onAdd: (snack: Snack) => void;
};

export function AddSnackForm({ onAdd }: AddSnackFormProps) {
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('🍩');
  const [tier, setTier] = useState<Tier>('B');

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    // Browsers reload the page on submit by default.
    event.preventDefault();

    onAdd({
      id: crypto.randomUUID(),
      name: name.trim(),
      emoji,
      tier,
      bio: 'Freshly added. No reputation yet.',
      controversy: 0,
    });
    setName('');
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label>
        Snack
        {/* remove onchange */}
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Rice crackers"
        />
      </label>
      <label>
        Emoji
        <input
          className="input"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          size={3}
        />
      </label>
      <label>
        Tier
        <select
          className="input"
          value={tier}
          onChange={(e) => setTier(e.target.value as Tier)}
        >
          {TIERS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <button className="btn btn-primary" disabled={name.trim() === ''}>
        Add snack
      </button>
      <span className="form-preview">
        Live preview: {emoji} {name || '…'} → tier {tier}
      </span>
    </form>
  );
}
