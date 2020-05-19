import React from 'react';
import css from '../App.module.css'
import { NoImage } from '../App'
import { Series } from '../model/series-tv';

export interface TVMazeResultsProps {
    result: Series[];
}

const itemClickHandler = (series : Series) => {
    window.open(series.show.url);
};


export const TVMazeResults: React.FC<TVMazeResultsProps> = (props) => {
    return <>
        {props.result.length} results
        <div className={css.grid}>
            {
                props.result.map((series) => {
                    const { show: { id, image, name }} = series;
                    // @ts-ignore
                    return <div key={id} className={css.gridItem}>
                        <div className={css.movie} onClick={() => itemClickHandler(series)}>
                        {
                            image ? <img src={image?.medium} alt="" /> :
                            <NoImage></NoImage>
                        }
                        <div className={css.movieText}>{name}</div>
                        </div>
                    </div>

                })
            }
        </div>
    </>
}