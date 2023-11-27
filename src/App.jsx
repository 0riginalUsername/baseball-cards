import playerData from './playerData.js'
import {useState} from 'react'
// getting 
function App(){
  
  let cards = playerData.map((player) => (
  <BaseballCard 
  name={player.name}
  team={player.team}
  position={player.position}
  stats={player.stats}
  img={player.imgUrl}
  key={player.cardId}
  />))  
  
  return <>
  {cards}
  </>
  
}


function BaseballCard(props) {
  let statDisplay = []

  for(let stat in props.stats){
    let tag = <p>{stat}: {props.stats[stat]}</p>
    statDisplay.push(tag) 
  }

    const [showPicture, setshowPicture] = useState (true)
  
const toggleCard = () => {
  setshowPicture(!showPicture)
}

if(showPicture === true){
  return (
    <div className="card" onClick={toggleCard}>
      <h2>{props.name}</h2>
      <img src={props.img}></img>
    </div>
  )}
    else{return (
      <div className="card" onClick={toggleCard}>
      <p>{props.name}</p>
      <p>{props.team}</p>
      <p>{props.position}</p>
      {statDisplay}
    </div>)}
}




export default App;
