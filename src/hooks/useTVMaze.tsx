import {useState} from "react";
import {Series, Show} from "../model/series-tv";
import Axios from "axios";

export function useTVMaze()  {

    const [details, setDetails] = useState<Show | null>(null);

    const closeModal = () => {
        setDetails(null)
    }

    const [result, setResult] = useState<Series[]>([]);

    const searchHandler = (text: string) => {
        Axios.get(`http://api.tvmaze.com/search/shows?q=${text}`).then(res => setResult(res.data));
    };

    const itemClickHandler = (series: Series) => {
        window.open(series.show.url);
    };

    return {
        series: result,
        search: searchHandler,
        itemClick: itemClickHandler,
    }
}

