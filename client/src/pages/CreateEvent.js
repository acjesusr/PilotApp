import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

class CreateEvent extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onDescription = this.onDescription.bind(this);
        this.state = {
            name: '',
            descripton: '',
            date: new Date()
        }
    }

    onSubmit(e){
        e.preventDedafult()
        const event = {
            name: this.state.name,
            descripton: this.state.descripton,
            date: this.state.date
        }
        console.log(event);
    }
    onChangeDate(date){
        this.setState({
            date:date
        });
    }
    onChangeDescription(e){
        this.setState({
            descripton:e.target.value
        });
    }
    onChangeName(e){
        this.setState({
            name:e.target.value
        });
    }

    render() {
        return (
            <div>
                <h3>Create new Event</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Event Name</label>
                        <input type="text"
                            required
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div>
                        <label>Event Description</label>
                        <input type="text"
                            required
                            value={this.state.descripton}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div>
                        <label>Event Date</label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Create Event" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateEvent;