import {useState} from "react";
export const State = () =>{
    const [count, setCount] = useState(0);
    console.log("Parent component Rendered");
    const handleButtonClick = () =>{
        setCount(()=>count+1)
    }
    console.log(count);
    return (
        <>
        <section className="main-div">
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
        </section>
        <ChildComponent/>
        </>
    );
};

function ChildComponent () {
    console.log("Child Component rendered");
    return(
        <div>Child Component</div>
    )
}