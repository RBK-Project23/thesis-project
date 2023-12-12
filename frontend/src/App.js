import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Events from './components/Events';
import PhotoGallery from './components/PhotoGallery';
import Forum from './components/Forum';
import Chat from './components/Chat';
import UserProfiles from './components/UserProfiles';
import Home from './components/Home';
import SignIn from './component/signIn';
import SignUp from './component/register';;

function App() {
  return (
   <>
    <Router>
    <Header />
      <Routes>
      <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profiles" element={<UserProfiles />} />
        <Route path='/signin' element ={<SignIn />} />
        <Route path='/register' element ={<SignUp />} />
      </Routes>
    </Router>
      
     
    
   </>
  );
}

export default App;
