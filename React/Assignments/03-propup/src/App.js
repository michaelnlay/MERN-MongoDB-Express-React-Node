import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <h1>Welcome to User Card</h1>
      <PersonCard
        firstName={"Doe"}
        lastName={"Jane"}
        age={45}
        hColor={"Black"}
      ></PersonCard>
      <PersonCard
        firstName={"Smith"}
        lastName={"John"}
        age={88}
        hColor={"Brown"}
      ></PersonCard>
      <PersonCard
        firstName={"Fillmore"}
        lastName={"Millard"}
        age={50}
        hColor={"Brown"}
      ></PersonCard>
      <PersonCard
        firstName={"Smith"}
        lastName={"Maria"}
        age={62}
        hColor={"Brown"}
      ></PersonCard>
    </div>
  );
}

export default App;
