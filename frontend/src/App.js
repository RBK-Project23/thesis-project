import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './component/signIn';
import SignUp from './component/register';;

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path='/signin' element ={<SignIn />} />
        <Route path='/register' element ={<SignUp />} />
      </Routes>
    </Router>
      
     
    
   </>
  );
}

export default App;
