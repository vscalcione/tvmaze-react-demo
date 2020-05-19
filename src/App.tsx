import React, { useState } from 'react';
import Axios from 'axios'
import { Series } from './model/series-tv';
import css from './App.module.css';
import { TVMazeResults } from './components/TVMazeResults';

export const App = () => {

  const [text, setText] = useState<string>('soprano')
  const [result, setResult] = useState<Series[]>([]);
  
  const onChangeHandler  = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setText(event.target.value);
  };

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Axios.get(`http://api.tvmaze.com/search/shows?q=${text}`)
      .then(res => setResult(res.data));
  };


  return (
    <div>
      <form onSubmit={searchHandler}>
        <input
          type="text"
          placeholder="Search TV Series"
          value={text}
          onChange={onChangeHandler}
        />
      </form>

      <TVMazeResults 
        result={result}
      />
    </div>
  );
}

export default App;

export const NoImage = () => {
  return <div className={css.noImage}></div>
}
// operator
