import {
  Navbar,
  Header,
  Experience,
  FamilyDetails,
  Footer,
} from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Experience />
      <FamilyDetails />
      <Footer />
    </div>
  );
}

export default App;
