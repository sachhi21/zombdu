import React, { Component } from 'react'
import './todo.css'


class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Username: "",
            Email: "",
            password: "",
            gender: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    
    firsthandler = (event) => {
        this.setState({
            Username: event.target.value
        })
    }
    Emailhandler = (event) => {
        this.setState({
            Email: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.Username} ${this.state.Email}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            Username: "",
            Email: "",
            password: '',
            gender: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>A lightweight and simple sign up form!</h1>
                    <label>Username :</label> <input type="text" value={this.state.Username} onChange={this.firsthandler} placeholder="Username..." /><br />
                    <label>Email :</label> <input type="text" value={this.state.Email} onChange={this.Emailhandler} placeholder="Email..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>
                
            </div>
            
        )
    }
}

export default Form