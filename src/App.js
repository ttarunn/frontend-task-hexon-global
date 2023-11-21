import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Home from './components/Home';
import RepoPage from './components/RepoPage';
import History from './components/History';
import Error from './components/Error';


const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <Home/>,
      errorElement: <Error />,
      children: [
        {
          path:"/",
          element:<LandingPage/>
        },
        {
          path:"/repos/:username",
          element:<MainPage/>
        },
        {
          path:"/repos/:username/:reponame",
          element:<RepoPage/>,
        },
        {
          path:"/repos/:username/:reponame/history",
          element:<History/>
        }
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
