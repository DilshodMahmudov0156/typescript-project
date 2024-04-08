import {ChangeEvent, useState} from "react";
import {IData} from "./interfaces";

import {data} from "./const";

function App(): JSX.Element {
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
    };

    const deleteItem = (id: number): void => {
        const newData = arr.filter(item => item.id != id);
        setArr(newData);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-xl-3">
                    <div className="card shadow-lg p-3">
                        <div className="top">
                            <h2 className="text-center text-warning">ToDo list</h2>
                            <input
                                type="text"
                                className="form-control my-3 px-3"
                                placeholder="enter_todo..."
                                value={title}
                                onChange={changeHandler}
                            />
                            <div className="text-center">
                                <button className="btn btn-success" onClick={handleSubmit}>Add new</button>
                            </div>
                        </div>
                        <ol className="list-group mt-3">
                            {arr.map(item => (
                                <li key={item.id} className="list-group-item d-flex justify-content-between">
                                    {item.title}
                                    <button className="btn btn-danger" onClick={() => {deleteItem(item.id)}}>
                                        <i class="bi bi-trash3-fill"></i>
                                    </button>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
