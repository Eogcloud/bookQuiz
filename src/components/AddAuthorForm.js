import React from 'react';
import "./AddAuthorForm.css";

class AuthorForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			imageUrl: '',
		}

		this.onFieldChange = this.onFieldChange.bind(this);
	}

	onFieldChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onAddAuthor(this.state);
	}

	render() {
		return (<form onSubmit={this.handleSubmit}>
			<div className="AddAuthorForm_input">
				<label htmlFor="name">Name</label>
				<imput type="text" name="name" value={this.state.name} onChage={this.onFieldChange} />
			</div>
			<div className="AddAuthorForm_input">
				<label htmlFor="imageUrl">imageUrl</label>
				<imput type="text" name="imageUrl" value={this.state.imageUrl} onChage={this.onFieldChange} />
			</div>
			<div className="AddAuthorForm_input">
				<label htmlFor="name">Name</label>
				<imput type="text" name="name" />
			</div>
			<div className="AddAuthorForm_input">
				<label htmlFor="name">Name</label>
				<imput type="text" name="name" />
			</div>
		</form>
		)
	}
}


function AddAuthorForm({ match, onAddAuthor }) {
	return (
		<div className="AddAuthorForm">
			<h1>Add Author</h1>
			<AuthorForm onAddAuthor={onAddAuthor} />
		</div>
	)
}

export default AddAuthorForm;