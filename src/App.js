import React , { useState , useEffect} from 'react';
import './App.css';
import Shuffle from './utilities/shuffle';
import Card from './components/Card';
import Header from './components/Header';
import useAppBadge from './hooks/useAppBadge';

function App() {

  const [cards, setCards] = useState(Shuffle)
  const [pickOne, setPickOne] = useState(null)
  const [pickTwo, setPickTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [wins, setWins] = useState(0)
  const [setBadge, clearBadge] = useAppBadge();

  const handleClick = (card , selected)=>{
    if(!disabled && !selected){
      pickOne ? setPickTwo(card) : setPickOne(card)
    }

  }

  const handleTurn = ()=>{
    setPickOne(null)
    setPickTwo(null)
    setDisabled(false)
  }

  useEffect(()=>{
    let pickTimer;
    if(pickOne && pickTwo){

      if(pickOne.image === pickTwo.image){

        setCards((prevCards) =>{

          return prevCards.map((card) =>{
             
            if(card.image === pickOne.image){
              return {...card , matched : true}
            } else {
              return card
            }

          })

        })
        handleTurn()
      } else {
        setDisabled(true);

        pickTimer = setTimeout(() => {
          handleTurn()
        }, 1000)
      }
    }

    return ()=>{
      clearTimeout(pickTimer)
    };
  },[cards, pickOne, pickTwo])


  useEffect(()=>{
    const checkWin = cards.filter((card) => !card.matched)
    let pickTimer
    if(checkWin.length < 1){
        setWins(wins + 1)
        handleTurn()
        setBadge()
        setCards(Shuffle)

    }
    return ()=>{
      clearTimeout(pickTimer)
    }
  }, [cards,wins])

  const handleNewGame = ()=>{
    clearBadge();
    setWins(0)
    handleTurn()
    setCards(Shuffle)
  }

  return (
    <>
      <Header handleNewGame={handleNewGame} wins={wins}/>

      <div className='container'>
          <div className='toast'>
            <span>You Won! 🎉</span>
          </div>
          <div className="grid">
              {cards.map((card) => {
                const { image , id , matched} = card
                return (
                  <Card 
                    key={id}
                    image={image}
                    selected={card === pickOne || card === pickTwo || matched}
                    onClick={() => {handleClick(card , card === pickOne || card === pickTwo || matched)}}
                  />
                )
              })}
          </div>
      </div>
    </>

  );
}

export default App;
