import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./App.css";

function App() {
  return (
    <section className="container">
      <div className="clock_content">
        <h1>We are almost there</h1>
        <h3>Stay tuned for something amazing.</h3>
        <FlipClockCountdown
          className="flip-clock"
          to={new Date("2025-03-15T00:00:00").getTime() + 2424 * 3600 * 1000 + 5000}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
        <div className="button">Notify Me</div>
      </div>
    </section>
  );
}

export default App;
