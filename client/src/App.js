import logo from './logo.svg';
import './App.css';
import PostList from './PostList'
import AddPost from './AddPost';
import EditPost from './EditPost';
import {BrowserRouter , Route} from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
         <h1 style={{backgroundColor:'black', color:'white' , padding:'10px'}}>MERN Stack CRUD Application</h1>
         <BrowserRouter>
            
            <Route path='/' component={PostList} exact/>
            <Route path='/addpost' component={AddPost} exact />
            <Route path='/editpost/:postid' component={EditPost}/>

         </BrowserRouter>
         
    </div>
  );
}

export default App;
