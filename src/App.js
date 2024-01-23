import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Auth/Login/Login';
import SignUp from './Pages/Auth/SignUp/SignUp';

function App() {
  return (
    <div>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/blog' element={<Blog></Blog>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
    </div>
  );
}

export default App;
