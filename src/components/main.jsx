import {useState, useEffect} from "react"



let results = [{"name":"raticate","url":"https://pokeapi.co/api/v2/pokemon/20/"},{"name":"spearow","url":"https://pokeapi.co/api/v2/pokemon/21/"},{"name":"fearow","url":"https://pokeapi.co/api/v2/pokemon/22/"},{"name":"ekans","url":"https://pokeapi.co/api/v2/pokemon/23/"},{"name":"arbok","url":"https://pokeapi.co/api/v2/pokemon/24/"},{"name":"pikachu","url":"https://pokeapi.co/api/v2/pokemon/25/"},{"name":"raichu","url":"https://pokeapi.co/api/v2/pokemon/26/"},{"name":"sandshrew","url":"https://pokeapi.co/api/v2/pokemon/27/"}]

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}




function Main({src}){
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [keyList, setKeyList] = useState([])
  const rndInt = randomIntFromInterval(0, 10)
  function onClick(pokemon){
    
    const key = pokemon.name
    console.log(key)
    if(keyList.includes(key)){
      setScore(0)
      setKeyList([])  
      if(score>=bestScore){
        setBestScore(score)
      }

    }else{
      const newKeyList = keyList
      newKeyList.push(key) 
      const newScore = score+1
      setKeyList(newKeyList)
      setScore(newScore)
      
    }  
    
  }
  

  console.log(score)
  console.log(keyList)

  useEffect(() => {
    async function getData(){
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=8&offset=2${rndInt}`,{mode:"cors"})
      const pokemonData = await response.json()
      
      
      results = pokemonData.results
      
      
    }
    getData()
  }, [score])
  console.log(results)
  


  return(
    <div className="body">
      <header>
        <div className="bestScore heading2">Best Score: {bestScore}</div>
        <div className="heading1">Poke Card Game</div>
        <div className="score heading2">Score: {score}</div>
      </header>
      <div>
        <div className="flexWrap">
          {results.map((pokemon) =>{
            const number = parseInt(pokemon.url.slice(34, -1))
            console.log(number)
            return(
              
              <div className="item" key={pokemon.name} onClick={() => onClick(pokemon)}>
              <img src={`sprites/sprites/pokemon/other/dream-world/${number}.svg`} alt="" />
              <div className="pokeName">{pokemon.name}</div></div>
            )
          })}
          
        </div>
      </div>
    </div>
  )
}

export {Main}