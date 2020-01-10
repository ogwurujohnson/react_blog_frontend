import React from "react";
import Home from "./pages/Home";
import Register from './pages/Register';
import {Route} from 'react-router-dom';
import Editor from "./pages/Editor";
import Profile from "./pages/Profile";
import ArticleModal from "./components/ArticleModal";
import ReadArticle from './pages/ReadArticle';

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={props => <Home {...props} />}/>
      <Route path='/register' component={Register}/>
      <Route path="/profile" component={Profile} />
      <Route path="/create" component={Editor} />
      <Route path="/read" component={ReadArticle}/>
      <ArticleModal />
    </div>
  );
}
export default App;
