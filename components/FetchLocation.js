import React from 'react';
import { Button } from 'react-native';
const fetchLocation = props => {
    return (
        <Button title="Open Model" onPress={props.onGetLocation} />
    );
};
export default fetchLocation;