import { Component } from 'react';

class UserInfoForm extends Component {
    constructor(){
        super();
        this.state = {
            notARobot: false,
            userTitle: ''
        }
    }

    handleFormSubmit=(event)=>{
        event.preventDefault();
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

    render(){
      
      return (
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

            <button type="submit">Submit</button>
        </form>
      )
    }
}

export default UserInfoForm;