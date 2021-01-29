import React from 'react';

class ScheduleEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name
        };
    }

    render() {
        return (
            <div>
                <div>Name: {this.state.name}</div>
                <div>ID: {this.state.id}</div>
            </div>
        );
    }
}

export default ScheduleEntry;