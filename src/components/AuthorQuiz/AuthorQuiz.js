import React from 'react';
import { Link } from 'react-router-dom'

import './AuthorQuiz.css';
import '../../bootstrap.min.css';

import Hero from '../Hero';
import Turn from '../Turn';
import Continue from '../Continue';
import Footer from '../Footer';


function AuthorQuiz({ turnData, highlight, onAnswerSelected }) {
	return (
		<div className="container-fluid">
			<Hero />
			<Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
			<Continue />
			<p>
				<Link to="/add">Add an Author></Link>
			</p>
			<Footer />
		</div>
	);
}

export default AuthorQuiz;
