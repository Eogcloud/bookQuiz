import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import './AuthorQuiz.css';
import '../../bootstrap.min.css';

import Hero from '../Hero';
import Turn from '../Turn';
import Continue from '../Continue';
import Footer from '../Footer';

const state = {
	turnData: getTurnData(authors),
	highlight: ''
};

function mapStatetoProps(state) {
	return {
		turnData: state.turnData,
		highlight: state.highlight,
	}
}

function mapDispatchtoProps(dispatch) {
	return {
		onAnswerSelected: (answer) => {
			dispatch({ type: 'ANSWER_SELECTED', answer });
		},
		onContinue: () => {
			dispatch({ type: 'CONTINUE' });
		}
	}
}

let AuthorQuiz = connect(mapStateToProps, mapDispatchToProps)(
	function () {
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
		)
	}
)

export default AuthorQuiz;
