import React from 'react';
import css from '../../App.module.css'
import { NoImage } from '../../App'
import { Series } from '../../model/series-tv';

export interface TVMazeResultsProps {
    result: Series[];
    itemClick: (series: Series) => void;
}

export const TVMazeResults: React.FC<TVMazeResultsProps> = ({ result, itemClick }) => {
    return <>
        {result.length} results
        <div className={css.grid}>
            {
                result.map((series) => {
                    const { show: { id, image, name }} = series;
                    return <div key={id} className={css.gridItem}>
                        <div className={css.movie} onClick={() => itemClick(series)}>
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