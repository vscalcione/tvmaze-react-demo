import React, {useState} from 'react';

export interface TVMazeSearchProps {
    search: (text: string) => void
}

export const TVMazeSearch: React.FC<TVMazeSearchProps> = ({ search }) => {

    const [text, setText] = useState<string>('soprano')

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        search(text)
    };

    return <form onSubmit={searchHandler}>
        <input
            type="text"
            placeholder="Search TV Series"
            value={text}
            onChange={onChangeHandler}
        />
    </form>
}