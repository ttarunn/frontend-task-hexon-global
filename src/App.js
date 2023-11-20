import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Home from './components/Home';
import RepoPage from './components/RepoPage';


const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <Home/>,
      children: [
        {
          path:"/",
          element:<LandingPage/>
        },
        {
          path:"/repo/:username",
          element:<MainPage/>
        },
        {
          path:"/repo/:username/:reponame",
          element:<RepoPage/>
        },
      ]
    }
  ]);


function App() {
  return (
    
    <div>
      <RouterProvider router={appRouter}/>
    </div>
    
  );
}

export default App;
