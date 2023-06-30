import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
  <>
  <Navbar title="TextUtils" aboutText="About"/>
  <div className='container my-2'>
    <Textform heading="Enter Text Here to Analysis Below"/>
  </div>
  </>
  );
}

export default App;
