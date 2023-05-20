import { Navbar } from '../widgets/Navbar';
import { AppRouter } from './providers/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';


function App() {

  return (
    <div className='app'>
        <Navbar/>
        <div className="content-page">
            {/* <Sidebar /> */}
            <AppRouter />
        </div>
    </div>
  );
}

export default App;
