import React, {FC, createContext} from 'react';
import './App.css';
import { Person} from './components/Person';
import { HairColor } from './Enums';

interface AppContextInterface {
    name: string;
    age: number;
    country: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {

    const contextValue: AppContextInterface = {
        name: "Mena",
        age: 29,
        country:"Canada"
    }

  return (
    <AppContext.Provider value={contextValue}>
    <div className='App'>
        <Person name="Michael" age={29} email='xpogomena@gmail.com' hairColor={HairColor.Blonde}/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
