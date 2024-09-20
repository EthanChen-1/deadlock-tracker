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
          <li>Hero Soul Scaling</li>
        </ul>
        <h2 className="text-xl font-extrabold">Upcoming Features</h2>
        <ul className="list-decimal list-inside">
          <li>Hero Build Guides</li>
          <li>Leaderboards</li>
          <li>Player Search</li>
        </ul>
      </div>
    </section>
  );
}
