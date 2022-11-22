import { useState , useCallback , useEffect } from 'react'
import './App.css'
import words from './wordList.json';
import {HangmanDrawing} from './components/hangmanDrawing';
import {HangmanWord} from './components/hangmanWord';
import {HangmanKeyboard} from './components/hangmanKeyboard';

function App() {
  const getWord = () => {
    return words[Math.floor(Math.random() * words.length)]
  }
  const [wordToGuess, setWordToGuess] = useState(getWord)

  const [guessedLetters , setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= wordToGuess.length;
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter:string) => {
      if(guessedLetters.includes(letter) || isLoser || isWinner) return
      setGuessedLetters(currentLetters => [...currentLetters , letter])
  } , [guessedLetters , isWinner , isLoser])

  

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if(!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)
    } 
    document.addEventListener('keypress' , handler)
    return () => document.removeEventListener('keypress' , handler)
  } , [guessedLetters])

   useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if(key !== "Enter") return

      e.preventDefault();
      setGuessedLetters([])
      setWordToGuess(getWord())
    } 
    document.addEventListener('keypress' , handler)
    return () => document.removeEventListener('keypress' , handler)
  } , [guessedLetters])

  return (
    <div className="App">
      <div className="gameOver">{isWinner && "Winner! - Refresh to start Again"}{isLoser && "Loser! - Refresh to start Again"}</div>
      <HangmanDrawing numOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{alignSelf: "stretch"}}>
        <HangmanKeyboard disabled={isLoser || isWinner} activeLetter={guessedLetters.filter(letter => wordToGuess.includes(letter))} inactiveLetters={incorrectLetters} addGuessedLetter={addGuessedLetter} />
      </div>
    </div>
  )
}

export default App
