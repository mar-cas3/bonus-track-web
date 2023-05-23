import "./Character.css";
function Character(props) {

    const data = props.info

    const imgSrc = `${data.thumbnail.path}.${data.thumbnail.extension}`

    return (
        <div className="char-info">
            <h1>{data.name}</h1>
            <p>{data.description}</p>

            <img src={imgSrc}></img>
            {data.comics.available > 0 && <h2>Appears in {data.comics.available} comics </h2>}
            
        </div>
    )

}

export default Character;