function SnackCard() {
  const controversy = 1;

  return (
    <article className="snack-card">
      <span className="snack-emoji">🍪</span>
      <h3 className="snack-name">Speculoos</h3>
      <p className="snack-bio">
        Shows up with every coffee. Nobody asked; everybody's grateful.
      </p>
      <span className="heat">{'🔥'.repeat(controversy)} controversy</span>
    </article>
  );
}

export default function ComponentsView() {
  return (
    <div className="cards">
      <SnackCard />
      <SnackCard />
      <SnackCard />
    </div>
  );
}
