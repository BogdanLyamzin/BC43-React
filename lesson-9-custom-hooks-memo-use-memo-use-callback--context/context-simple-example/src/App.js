import Navbar from './modules/Navbar/Navbar';
import Main from "./modules/Main/Main";
import Footer from './modules/Footer/Footer';

import LangContextComponent from "./context/langContext";

import "./App.css";

function App() {

  return (
    <LangContextComponent>
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </LangContextComponent>
  );
}

export default App;
