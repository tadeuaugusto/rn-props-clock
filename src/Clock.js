import React, { Component } from 'react';
import {
    Text,
} from 'react-native';

class Clock extends Component {
    render() {
        return(
            <Text style={{fontSize: 60}}>{this.props.time}</Text>
        );
    }
}

export default Clock;