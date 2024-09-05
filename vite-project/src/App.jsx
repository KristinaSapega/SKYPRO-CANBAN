import { useEffect, useState } from 'react';
import './App.css'
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { PopBrowse } from './components/PopBrowse';
import { PopNewCard } from './components/PopNewCard';
import { PopUser } from './components/PopUser';
import { cardList } from './data';
import { GlobalStyle } from './global.styled.js';
import { Wrapper } from './global.styled.js';


function App() {

  const [cards, setCards] = useState(cardList)
  const [isLoading, setIsLoading] = useState(false)

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      themeText: "Web Design",
      title: "Новая задача",
      date: "30.10.23",
      status: "Без статуса",
    }
    setCards([...cards, newCard])
  }

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, []);

  return (
    <>
    <GlobalStyle />

    <Wrapper>
      <Header addCard={addCard} />
      {isLoading ? <p className="loader"> Данные загружаются...</p> : <Main cards={cards} />}
      <PopBrowse />
      <PopNewCard />
      <PopUser />
    </Wrapper>
    
    </>

  )
}

export default App
