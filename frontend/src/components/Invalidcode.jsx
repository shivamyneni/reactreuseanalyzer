import React, { Component } from "react";

class InvalidComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// Missing default value for prop
		};

		// Using className instead of style prop
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		// Using an inline event handler with a regular function instead of an arrow function
		alert("Button clicked!");
	}

	render() {
		return (
			<div>
				{/* Using inheritance instead of composition */}
				<InvalidComponent />

				{/* Missing space after the opening bracket */}
				<div style={{ color: "red" }}>
					{/* Using className instead of style prop */}
					<button className="my-button" onClick={this.handleClick}>
						Click me
					</button>
				</div>

				{/* Prop name does not follow the naming convention */}
				<InvalidComponent PropName="value" />

				{/* Missing default value for prop */}
				<InvalidComponent />

				{/* Using controlled component without default values */}
				<input
					value={this.state.value}
					onChange={(e) => this.setState({ value: e.target.value })}
				/>

				{/* Component size exceeds the limit */}
				<div>
					<p>Line 1</p>
					<p>Line 2</p>
					{/* ... (repeat to exceed the limit) ... */}
					<p>Line 100</p>
				</div>
			</div>
		);
	}
}

export default InvalidComponent;
