import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Registration from './pages/Registration';
import UserProfile from './pages/UserProfile';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>}>
      <Route index element={<Registration></Registration>} />
      <Route path="/profile" element={<UserProfile></UserProfile>}></Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
