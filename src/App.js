import { useContext } from 'react';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import { AuthContext } from './context/AuthContext';

function App() {
  const { isDark } = useContext(AuthContext);
  return (
    <div className={`App ${isDark? 'dark':'light'}`}>
      <Navbar />
      <Form />
    </div>
  );
}

export default App;
