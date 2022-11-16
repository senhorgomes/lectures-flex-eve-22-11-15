// import { useState } from "react";

const NewHero = () => {
    // need to make an input that allows entry of new hero
    // save that information as state
    // then a button that makes an axios request to add new hero
    // const [newHero, setNewHero] = useState("");
    return(
        <div>
            <form action="/heroes" method="POST">
                <label for="newHero">Input a new hero</label>
                {/* <input onChange={(event)=>setNewHero(event.target.value)} id="newHero"></input> */}
                <input id="newHero" name="newHero"/>
                <button type="submit">Submit your new hero</button>
            </form>
        </div>
    )
}
export default NewHero;