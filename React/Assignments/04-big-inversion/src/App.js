import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World!</h1> */}
      <PersonCard lastName={"Jane"} firstName={"Doe"} age={45} hColor={"Black"}></PersonCard>
      <PersonCard lastName={"John"} firstName={"Smith"} age={88} hColor={"Brown"}></PersonCard>
      <PersonCard lastName={"Millard"} firstName={"Fillmore"} age={50} hColor={"Brown"}></PersonCard>
      <PersonCard lastName={"Maria"} firstName={"Smith"} age={62} hColor={"Brown"}></PersonCard>

    </div>
  );
}

export default App;
