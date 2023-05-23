import { useEffect, useState } from "react";
import { getCharacters } from "../../helpers";
import Character from "./Character";

function Characters () {

    const [list, setList] = useState([])

    useEffect( () => {
        if(!navigator.onLine) {
            if(localStorage.getItem('list') === null) {
                setList([])
            } else {
                console.log('Getting list from local storage')
                setList(JSON.parse(localStorage.getItem('list')))
            }
        } else {
            getCharacters().then(data =>{
                setList(data);
                localStorage.setItem('list', JSON.stringify(data))
            });
        }
    }, [])

    const loadInfo = () => {
        if(list.length > 0)
            return list.map((person) => <Character info={person}/>)
        return <h2>Loading...</h2>
    }

    return (

        <>
            {loadInfo()}
        </>
    )
}
export default Characters;