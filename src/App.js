
import './App.css';

import Shop from './components/Shop';
import VShop from './components/Vshop';
import {ImmutableArray} from './components/reduxImmutableArray';

function App() {
  return (
    <div className="App">
      <Shop/>
      <VShop/>
      <ImmutableArray/>
    </div>
  );
}

export default App;
