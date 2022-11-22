import './drawing.css';

const HEAD = (
	<div className="head"></div>
)

const BODY = (
	<div className="body"></div>
)

const RIGHT_ARM = (
	<div className="rightArm"></div>
)

const LEFT_ARM = (
	<div className="leftArm"></div>
)

const RIGHT_LEG = (
	<div className="rightLeg"></div>
)

const LEFT_LEG = (
	<div className="leftLeg"></div>
)

const BODY_PARTS = [HEAD , BODY , RIGHT_ARM , LEFT_ARM , RIGHT_LEG , LEFT_LEG];

type HangmanDrawingProps = {
	numOfGuesses: number;
}
export function HangmanDrawing ({numOfGuesses}: HangmanDrawingProps) {
	return(
		<div className="drawingContainer">
			{BODY_PARTS.slice(0 , numOfGuesses)}
			<div className="topBar"></div>
			<div className="smallLine"></div>
			<div className="lineMid"></div>
			<div className="bottomBar"></div>
		</div>
	)
}