import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from './Pages/Home';
import PlayGame from './Pages/PlayGame';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';







function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/playgame' element={<PlayGame/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </Router>

    

    

    </>






      /* <Header>
      

      </Header>
      <MainSlider>
        
      </MainSlider>
     
      <Footer>

      </Footer> */
      
      
      
    
  );
}

export default App;
