import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <main className="Main">
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
