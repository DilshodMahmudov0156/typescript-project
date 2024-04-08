import Header from "./components/header.tsx";
import {ChangeEventHandler, useState} from "react";
import {IData} from "./interfaces";

function App(): JSX.Element {
    const data: IData[] = [
        {id: 1, title: "Omar", descritpion: "description"},
        {id: 2, title: "Osman", descritpion: "description"},
        {id: 3, title: "Abdulloh", descritpion: "description"}
    ]
    const [title, setTitle] = useState<string>("");
    const [arr, setArr] = useState<IData>(data);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value)
    };
    const handleSubmit = (): void => {
        if (!title.length) return;

        const newData = {
            id: new Date().getTime(),
            title: title,
            description: "Description"
        }
        setArr(arr => [...arr, newData]);
        console.log(newData),
        setTitle("");
    }

    return (
        <div>
            <div className="top">
                <h2>TODO list</h2>
                <input type="text" placeholder="enter todo" value={title} onChange={changeHandler}/>
                <button className="add-btn" onClick={handleSubmit}>add+</button>
            </div>
            <div className="lists-body">
                {arr.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </div>
        </div>
    );
}

export default App;
