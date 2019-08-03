import React from "react";
import Book from './Book';
import PropTypes from 'prop-types'

function Turn({ author, books, highlight, onAnswerSelected }) {

	Turn.propTypes = {
		author: PropTypes.shape({
			name: PropTypes.string.isRequired,
			imageUrl: PropTypes.string.isRequired,
			imageSource: PropTypes.string.isRequired,
			books: PropTypes.arrayOf(PropTypes.string).isRequired
		}),
		books: PropTypes.arrayOf(PropTypes.string).isRequired,
		highlight: PropTypes.string.isRequired,
		onAnswerSelected: PropTypes.func.isRequired,
	}


	function highlightToBackgroundColor(highlight) {
		const mapping = {
			'none': '',
			'correct': '#6bc95d',
			'wrong': '#c95d5d'
		};
		return mapping[highlight];
	}

	return (
		<div className="row turn " style={{ backgroundColor: highlightToBackgroundColor(highlight) }}>
			<div className="col-4 offset-1">
				<img src={author.imageUrl} className="authorImage" alt="author" />
			</div>
			<div className="col-6">
				{books.map(title => <Book title={title} key={title} onClick={onAnswerSelected} />)}
			</div>
		</div>
	)
}


export default Turn;
