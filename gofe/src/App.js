import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
    <div  style={{
        display: 'flex'}}>
      <Sidebar></Sidebar>
    <div fullwidth style={{
      padding: '24px 12px 24px 12px' ,width:'80%'}}>
     <Dashboard></Dashboard>
    </div>
    </div>
    </>
  );
}

export default App;
