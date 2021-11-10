import { Component } from 'react';

class UserInfoForm extends Component {
    constructor(){
        super();
        this.state = {
            notARobot: false,
            userTitle: '',
            fullName: ''
        }
    }

    handleFormSubmit=(event)=>{
        event.preventDefault();
        let { fullName, userTitle, notARobot } = this.state;

        if (notARobot && userTitle && fullName) {
          alert(
            `Form submitted! \n ${notARobot} \n ${userTitle} \n ${fullName}`
          );
        } else {
          alert("Please fill out the form completely");
        }
      
    }

    handleCheckboxChange=(event)=>{
        this.setState({
            notARobot: event.target.checked
        });
    }

    handleSelectChange=(event)=>{
        this.setState({
            userTitle: event.target.value
        })
    }

    handleFullNameChange=(event)=>{
        // console.log(event.target.value)
        this.setState({
            fullName: event.target.value
        })
    }

    render(){
      
      return (
        <div>
            <div>Current User</div>
            <div>Title: {this.state.userTitle}</div>
            <div>Full name: {this.state.fullName}</div>
            <div>Are you a human?: {this.state.notARobot ? "True" : "False"}</div>
            <form onSubmit={this.handleFormSubmit} className="form-container">
                <h2>User Information</h2>

                <label>
                    Are you human?
                    <input
                        id="not-robot"
                        type="checkbox"
                        checked={this.state.notARobot}
                        onChange={this.handleCheckboxChange}
                    />
                </label>
                <select value={this.state.userTitle} onChange={this.handleSelectChange}>
                    <option value=''>--Please select title--</option>
                    <option value='mr'>Mr.</option>
                    <option value="ms">Ms.</option>
                    <option value='mrs'>Mrs.</option>
                    <option value='mx'>Mx.</option>
                    <option value='dr'>Dr.</option>
                </select>

                <input 
                    type="text"
                    placeholder="Please enter fullname"
                    value={this.state.fullName}
                    onChange={this.handleFullNameChange}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
      )
    }
}

export default UserInfoForm;