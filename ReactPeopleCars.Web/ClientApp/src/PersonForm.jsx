import React from 'react';
import { produce } from 'immer';
import axios from 'axios';
class PersonForm extends React.Component {
    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }
    onTextChange = e => {
        const newState = produce(this.state, draftState => {
            draftState.person[e.target.name] = e.target.value;
        })
        this.setState(newState)
    }
    onSubmitClick = async () => {
        await axios.post('/api/peoplecars/addperson', this.state.person);
        this.props.history.push('/'); 
    }
    render() {
        const { firstName, lastName, age } = this.state.person;
        return (
            <div className='container' style={{ marginTop: 60 }}>
                <div style={{ minHeight: 1000, paddingTop: 200 }}>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3 card bg-light p-4'>
                            <h2>Add New Person</h2>
                            <input type='text' onChange={this.onTextChange} value={firstName} className='form-control' name='firstName' placeholder='First Name' />
                            <br />
                            <input type='text' onChange={this.onTextChange} value={lastName} className='form-control' name='lastName' placeholder='Last Name' />
                            <br />
                            <input type='text' onChange={this.onTextChange} value={age} className='form-control' name='age' placeholder='Age' />
                            <br />
                            <button onClick={this.onSubmitClick} className='btn btn-primary btn-lg btn-block'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PersonForm