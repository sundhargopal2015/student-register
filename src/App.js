import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Student Register</h1>
      <section>
        <Link
          to="lists"
          style={{
            marginRight: "20px",
          }}
        >
          Student Lists
        </Link>
        <Link to="new">Add Student</Link>
      </section>
    </div>
  );
}

export default App;
