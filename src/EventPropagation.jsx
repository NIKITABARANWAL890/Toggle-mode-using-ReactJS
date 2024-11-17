import "./EV.css";
export const EventPropagation = () =>{
    const handleGrandParent = () =>{
        console.log("GrandParent clicked");
    };
    const handleParentClick = (event) =>{
        event.stopPropagation();
        console.log("Parent clicked");
    }
    const handleChilClick = (event)=>{
        console.log(event);
        event.stopPropagation();
        console.log("child clicked");
    }
    return(
        <section className="main-div">
            <div className="g-div" onClick={handleGrandParent}>
                <div className="p-div" onClick={handleParentClick}>
                    <button className="c-div" onClick={handleChilClick}>
                        Child Div
                    </button>
                </div>
            </div>
        </section>
    )
}