import React, {useState} from 'react';
import css from './App.module.css';
import {TVMazeResults} from './components/TVMazeResults/TVMazeResults';
import {TVMazeSearch} from "./components/TVMazeSearch/TVMazeSearch"
import {useTVMaze} from "./hooks/useTVMaze";
import {TVMazeShowDetails} from "./components/TVMazeShowDetails/TVMazeShowDetails";

export const App = () => {

    const {
        series, details,
        search, itemClick, closeModal
    } = useTVMaze();

    return (
        <div>
            <TVMazeSearch search={search} />
            <TVMazeResults result={series} itemClick={itemClick} />
            <TVMazeShowDetails show={details} onClose={closeModal} />
        </div>
    );
}

export default App;

export const NoImage = () => {
    return <div className={css.noImage}></div>
}