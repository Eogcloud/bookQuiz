import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthorQuiz from "./AuthorQuiz";
import * as serviceWorker from "./serviceWorker";
import { shuffle, sample } from 'underscore';

const authors = [
	{
		name: "Mark Twain",
		imageUrl: "images/authors/MarkTwain.jpg",
		imageSource: "Wikimedia Commons",
		books: ["The Adventures of Huckleberry Finn", "Roughing it", "The Gilded Age", "A Connecticut Yankee in King Arthur’s Court"]
	},
	{
		name: "Ernest Hemingway",
		imageUrl: "images/authors/ErnestHemingway.jpg",
		imageSource: "Wikimedia Commons",
		books: ["A Farewell to Arms", "A Moveable Feast", "The Old Man and the Sea", "The Sun Also Rises"]
	},
	{
		name: "Roald Dahl",
		imageUrl: "images/authors/RoaldDahl.jpg",
		imageSource: "Wikimedia Commons",
		books: ["The BFG", "Matilda", "Danny the Champion of the world", "The Twits"]
	},
	{
		name: "Stephen King",
		imageUrl: "images/authors/StephenKing.jpg",
		imageSource: "Wikimedia Commons",
		books: ["The Dark Tower", "Pet Semetary", "It", "Misery"]
	},
	{
		name: "Hunter S Thompson",
		imageUrl: "images/authors/HunterSThompson.jpg",
		imageSource: "Wikimedia Commons",
		books: ["Hell's Angels: The Strange and Terrible Saga of the Outlaw Motorcycle Gangs", "Fear and Loathing in Las Vegas: A Savage Journey to the Heart of the American Dream", "The Rum Diary"]
	},
	{
		name: "James Joyce",
		imageUrl: "images/authors/JamesJoyce.jpg",
		imageSource: "Wikimedia Commons",
		books: ["Dubliners", "A Portrait of the Artist as a Young Man", "Exiles", "Ulysses"]
	},
	{
		name: "J R R Tolkien",
		imageUrl: "images/authors/JRRTolkien.jpg",
		imageSource: "Wikimedia Commons",
		books: ["The Hobbit", "The Adventures of Tom Bombadil", "The Road Goes Ever On", "Tree and Leaf"]
	}
];

function getTurnData(authors) {
	const allBooks = authors.reduce((p, c, i) => {
		return p.concat(c.books);
	}, []);
	const fourRandombooks = shuffle(allBooks).slice(0, 4);
	const answer = sample(fourRandombooks);

	return {
		books: fourRandombooks,
		author: authors.find((author) =>
			author.books.some((title) => title === answer))
	}
}

const state = {
	turnData: getTurnData(authors)
};

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
