export default function Home() {
  return (
    <section className="p-2">
      <h1 id="welcome-message" className="text-2xl font-extrabold">
        Welcome to Deadlock Tracker
      </h1>
      <div className="">
        <h2 className="text-xl font-extrabold">Current Features</h2>
        <ul className="list-decimal list-inside">
          <li>Hero Details, Base Stats, and Abilities</li>
          <li>Soul Scaling Breakpoints</li>
        </ul>
        <h2 className="text-xl font-extrabold">In Progress</h2>
        <ul className="list-decimal list-inside">
          <li>Shop Items</li>
        </ul>
        <h2 className="text-xl font-extrabold">Upcoming Features</h2>
        <ul className="list-decimal list-inside">
          <li>News About Deadlock</li>
          <li>Hero Build Guides</li>
          <li>Leaderboards</li>
          <li>Player Search</li>
        </ul>
      </div>
    </section>
  );
}
