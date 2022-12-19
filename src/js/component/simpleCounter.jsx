import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom"

//create your first component
const SimpleCounter = (props) => {
	return (
		<div className="main-container">
			<div className="counter">
				<div className="clock">
					<i className="fa-regular fa-clock"></i>
				</div>
				<div className="six">{props.digit6}</div>
				<div className="five">{props.digit5}</div>
				<div className="four">{props.digit4}</div>
				<div className="three">{props.digit3}</div>
				<div className="two">{props.digit2}</div>
				<div className="one">{props.digit1}</div>
			</div>

		</div>
	);
};

SimpleCounter.propTypes = {
	digit1: PropTypes.number,
	digit2: PropTypes.number,
	digit3: PropTypes.number,
	digit4: PropTypes.number,
	digit5: PropTypes.number,
	digit6: PropTypes.number,
}

let counter = 0;

setInterval(function () {

	const six = Math.floor(counter / 100000 % 10);
	const five = Math.floor(counter / 10000 % 10);
	const four = Math.floor(counter / 1000 % 10);
	const three = Math.floor(counter / 100 % 10);
	const two = Math.floor(counter / 10 % 10);
	const one = Math.floor(counter / 1 % 10);

	counter++

ReactDOM.render(<SimpleCounter digit1 = {one} digit2 = {two} digit3 = {three} digit4 = {four} digit5 = {five} digit6 = {six}  />, document.querySelector("#counter"));
},1000)

