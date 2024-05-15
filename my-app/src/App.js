import logo from './logo.svg';
import './App.css';
import HomePage from './components/homepage/homepage';
import StylePage from './components/StylePage.js';

function App(props) {
  const {style_data} =props;
  return (
      <div className="App">
        <StylePage style_data={style_data}/>
        <h1>hi</h1>
      </div>
    );
  }
  

export default App;
