import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exportAllDeclaration } from '@babel/types';

Enzyme.configure({ adapter: new Adapter() });

const state = {
	turnData: {
		books: ["Ulysses", "The Rum Diary", "The BFG", "A Farewell to Arms"],
		author: {
			name: "James Joyce",
			imageUrl: "images/authors/JamesJoyce.jpg",
			imageSource: "Wikimedia Commons",
			books: ["Dubliners", "A Portrait of the Artist as a Young Man", "Exiles", "Ulysses"]
		},
	},
	highlight: 'none'
}

describe("Author Quiz", () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={() => { }} />, div);
	});

	describe("When no answer is selected", () => {
		let wrapper;
		beforeAll(() => {
			wrapper = mount(
				<AuthorQuiz {...state} onAnswerSelected={() => { }} />)
		})

		it("should have no background color", () => {
			expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('');
		})
	})

	describe("When the correct answer is selected", () => {
		let wrapper;
		beforeAll(() => {
			wrapper = mount(
				<AuthorQuiz {...(Object.assign({}, state, { highlight: 'correct' }))} onAnswerSelected={() => { }} />)
		})

		it("should have a green background color", () => {
			expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('#6bc95d');
		})
	})

	describe("When the wrong answer is selected", () => {
		let wrapper;
		beforeAll(() => {
			wrapper = mount(
				<AuthorQuiz {...(Object.assign({}, state, { highlight: 'wrong' }))} onAnswerSelected={() => { }} />)
		})

		it("should have a red background color", () => {
			expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('#c95d5d');
		})
	})

	describe("When the first answer is selected", () => {
		let wrapper;
		const handleAnswerSelected = jest.fn();

		beforeAll(() => {
			wrapper = mount(
				<AuthorQuiz {...(Object.assign({}, state, { highlight: 'wrong' }))} onAnswerSelected={handleAnswerSelected} />)
			wrapper.find('.answer').first().simulate('click');
		});

		it("onAnswerSelected should be called", () => {
			expect(handleAnswerSelected).toHaveBeenCalled();
		});

		it("Should recieve Ulysses answer", () => {
			expect(handleAnswerSelected).toHaveBeenCalledWith("Ulysses");
		});
	})
})





