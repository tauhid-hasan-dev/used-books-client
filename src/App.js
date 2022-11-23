import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/routes';


function App() {
  return (
    <div className="lg:px-20 px-5">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
