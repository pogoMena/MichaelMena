import React, { FC, createContext } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom'
import './App.css';
import { Person } from './components/Person';
import { HairColor } from './Enums';
import Home from './pages/Home';
import {Game, dataLoader} from './pages/Game';

interface AppContextInterface {
    name: string;
    age: number;
    country: string;
}

//const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {


/*
    const contextValue: AppContextInterface = {
        name: "Mena",
        age: 29,
        country: "Canada"
    }
    */

    const Root = () => {
        return(
        <>
            <div>
                <Link to="/">Home</Link>
                <Link to="/game">Game</Link>
            </div>

            <div>
                <Outlet />
            </div>
        </>
        )
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="/game" element={<Game />} loader={dataLoader}/>
            </Route>

        )
    )

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
/*
    return (
        <AppContext.Provider value={contextValue}>
            <div className='App'>
                <Person name="Michael" age={29} email='xpogomena@gmail.com' hairColor={HairColor.Blonde} />
            </div>
        </AppContext.Provider>
    );

*/
}


export default App;
