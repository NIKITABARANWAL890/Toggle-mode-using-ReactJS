import "./EV.css";

export const EventHandling = () =>{

    const handleButtonClick = (event) =>{
        console.log(event)
        console.log(event.target)
        alert("Hey, ia am onclick event")
    }

    const handleWelcomeUser = (user)=>{
        console.log(`Hey ${user}, welcome`)
    }

    return (
        <>
            <button onClick={handleButtonClick}>click Me</button>
            <br/>
            <button onClick={()=>handleButtonClick(event)}> click me2 </button>
            <button onClick={()=>handleWelcomeUser("Nikita")}>click me</button>
        </> 
    );
};