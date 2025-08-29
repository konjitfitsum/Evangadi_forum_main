import { useContext } from "react";
import { AppState } from "../App";

function Home() {
  const { user } = useContext(AppState);

  return (
    <div className="home">
      <section>
        <h1>Home</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Welcome{user.username}</h2>
      </section>
    </div>
  );
}

export default Home;
