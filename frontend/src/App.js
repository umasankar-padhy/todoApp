// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import DeletePost from './components/DeletePost';
import ViewPost from './components/ViewPost';
function App() {
  return (
    <div>
      <div>
        <h1>My App</h1>
        <h4>In here you can create your post and view your post</h4>   
             <AddPost />
         {/* Render the AddPost component here */}
      </div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/viewpost" element={<ViewPost />}></Route>
            <Route path="/addpost" element={<AddPost />}></Route>
            <Route path="/editpost" element={<EditPost />}></Route >
            <Route path="/deletepost" element={<DeletePost />}></Route >
            <Route path="/" element={<ViewPost />}></Route >


            {/* <code> is an bootstrap element  */}
            <Route path="*" element={<main><code>not found  </code></main>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
