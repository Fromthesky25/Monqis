import {Header} from './modules/Header';
import {Content} from './modules/Content';
import {Footer} from './modules/Footer';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
