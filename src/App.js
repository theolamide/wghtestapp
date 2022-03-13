import TasoloGifOraangeBG from '../src/assets/TasoloGifOraangeBG.gif'
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${TasoloGifOraangeBG})`}}>
      <h1>{process.env.REACT_APP_TEST_KEY}</h1>
    </div>
  );
}

export default App;
