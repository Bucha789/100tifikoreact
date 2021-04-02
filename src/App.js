// import logo from './logo.svg';
import Header from './components/Header';
import Home from './pages/Home';
import './styles/global.css';

async function App() {
  return (
    <div className='Main'>
    <Header />
    <Home />
    </div>
  );
}

export default App;
