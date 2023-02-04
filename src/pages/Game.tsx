import * as React from 'react';
import {useLoaderData} from 'react-router-dom';


export const Game = () => {
    const catID = useLoaderData();
    const base: string = "https://cataas.com/cat/";

    const catURL = () => {
        return (base + catID);
    };
    

    return (
        <div>
            <h1>Hello this is the game page</h1>
            <img src={catURL()} alt="cat" />
        </div>
    );
};

export const dataLoader = async () => {
    const res = await fetch("https://cataas.com/api/cats?tags=cute");
    const cat = await res.json()
    return cat[0]._id;
}
