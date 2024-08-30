import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Error, ViewGameAll, ViewGameDetails } from '../views/index';
import BaseLayout from "../layouts/BaseLayout";
import axios from 'axios';
import { Toaster } from 'react-hot-toast'
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Profile from '../components/pages/Profile';
import { UserContextProvider } from '../../context/userContext';
import GameDetails from '../components/game/GameDetails';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

const AppRouter = () => {
    return (
<BrowserRouter>
<UserContextProvider>
        <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
        <Routes>
            <Route path = "/" element = { <BaseLayout/>}>
                <Route path = "/" element = { <Home/> } />
                <Route path = "/error" element = { <Error/> } />
                <Route path = "/games" element = { <ViewGameAll/> } />
                <Route path = "/games/:gameId" element = { <ViewGameDetails/> } />
                <Route path = "*" element = { <Error/> } />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
                <Route path="/games/:id" element={<GameDetails />} />
            </Route>
        </Routes>
        </UserContextProvider>
</BrowserRouter>

    )
}

export default AppRouter