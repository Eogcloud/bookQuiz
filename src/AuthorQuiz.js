import React from "react";
import "./AuthorQuiz.css";
import "./bootstrap.min.css";

import Hero from "./components/Hero";
import Turn from "./components/Turn";
import Continue from "./components/Continue";
import Footer from "./components/Footer";

function AuthorQuiz({ turnData, highlight, onAnswerSelected }) {
	return (
		<div className="container-fluid">
			<Hero />
			<Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
			<Continue />
			<Footer />
		</div>
	);
}

export default AuthorQuiz;
