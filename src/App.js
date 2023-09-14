import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className='bg-slate-800'>

        <div className='grid grid-cols-1 grid-rows-4 min-w-full min-h-screen'>
          <Header span="p-4"/>
          <Body bodystyle="bg-white rounded row-span-3"/>
          <Footer />
        </div>
        
      </div>

    </div>
  );
}

export default App;
