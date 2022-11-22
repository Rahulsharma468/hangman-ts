import styles from './keyboard.module.css';
const KEYS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

type HangmanKeyboardProps = {
	inactiveLetters: string[];
	addGuessedLetter: any;
	disabled?: boolean;
	activeLetter: any;
}

export function HangmanKeyboard ({activeLetter , disabled=false, addGuessedLetter ,inactiveLetters} : HangmanKeyboardProps) {
	return (
		<div className={`${styles.keyboardContainer}`}>
			{KEYS.map(key => {
				const isActive = activeLetter.includes(key);
				const inActive = inactiveLetters.includes(key);
				return <button onClick={() => addGuessedLetter(key)} className={`${styles.keyboardKeys}  ${isActive ? styles.active : ''} ${inActive ? styles.inactive : ''}`} disabled={inActive || isActive || disabled} key={key}>{key}</button>
			})}
		</div>
	) 
}