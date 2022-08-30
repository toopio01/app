import React,{ Component } from 'react'

class Form extends Component{
constructor(props){
	super(props)
	this.state = { email:'',name:'', age:null, address:'',phoneNo:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { email, name, age, address, phoneNo,} = this.state
	event.preventDefault()
	alert(`
	____Your Details____\n
	Email : ${email}
	Name : ${name}
	Age : ${age}
	Address : ${address}
	Phone No : ${phoneNo}
    `)
}

// Method causes to store all the values of the
// input field in react state single method handle
// input changes of all the input field using ES6
// javascript feature computed property names
handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
	<form onSubmit={this.handleSubmit}>
		<div>
		<label htmlFor='email'>Email</label>
		<input
			name='email'
			placeholder='Email'
			value = {this.state.email}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='name'>Name</label>
		<input
			name='name'
			placeholder='Name'
			value={this.state.name}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='age'>Age</label>
		<input
			name='age'
			placeholder='Age'
			value={this.state.age}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='address'>Address</label>
		<input
			name='address'
			placeholder='Address'
			value={this.state.address}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='phoneNo'>Phone Number</label>
		<input
			name='phoneNo'
			placeholder='Phone No'
			value={this.state.phoneNo}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label for="favcolor">Select your favorite color:</label>
        <input type="color" id="favcolor" name="favcolor"/>
		</div>
		<div>
		<label for="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday"/>
		</div>
		<div>
		<label for="email">Enter your email:</label>
        <input type="email" id="email" name="email"></input>
		</div>
		<div>
		<label for="myfile">Select a file:</label>
        <input type="file" id="myfile" name="myfile"/>
		</div>
		<div>
		<label for="bdaymonth">Birthday (month and year):</label>
        <input type="month" id="bdaymonth" name="bdaymonth"/>
		</div>
		<div>
		<label for="quantity">Quantity (between 1 and 5):</label>
        <input type="number" id="quantity" name="quantity" min="1" max="5"/>
		</div>
		<diiv>
		<label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" min="0" max="100" step="10" value="30"/>
		</diiv>
		<div>
		<label for="vol">Volume (between 0 and 50):</label>
        <input type="range" id="vol" name="vol" min="0" max="50"/>
		</div>
		<div>
		<label for="gsearch">Search Google:</label>
        <input type="search" id="gsearch" name="gsearch"/>
		</div>
		<div>
		<label for="phone">Enter your phone number:</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
       </div>
	   <div>
	   <label for="appt">Select a time:</label>
       <input type="time" id="appt" name="appt"/>
	   </div>
	   <div>
	   <label for="homepage">Add your homepage:</label>
       <input type="url" id="homepage" name="homepage"/>
	   </div>
	   <div>
	   <label for="week">Select a week:</label>
       <input type="week" id="week" name="week"/>
	   </div>
        <div>
		<button>Create Account</button>
		</div>
	</form>
	)
}
}

export default Form
