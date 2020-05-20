import { Show } from '../../model/series-tv'
import React from 'react';
import css from './TVMazeShowDetails.module.css';

interface TVMazeShowDetailsProps {
    show: Show | null;
    onClose: () => void;
}

export const TVMazeShowDetails: React.FC<TVMazeShowDetailsProps> = ({show, onClose}) => {
    return show && (
        <div className={css.wrapper}>
            <div className={css.content}>
                <span
                    className={css.closeButton}
                    onClick={onClose}
                    role="img"
                    aria-label="Close"
                ></span>

                <img className={css.image} src={show?.image} />

                {
                    show?.genres.map(g => {
                        <span className={css.tag} key={g}>{g}</span>
                    })
                }
            </div>
        </div>
    )
}