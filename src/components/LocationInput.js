import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const LocationInput = ({location, onLocationChange, onLocationSubmit}) => {
    return <View style={styles.backgroundStyle}>
        <TextInput
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder="Insert your city"
          location={location}
          onChangeText={newLocation => onLocationChange(newLocation)}
          onEndEditing={(location) => onLocationSubmit(location)}
        />
    </View>
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginBottom: 10,
        marginHorizontal: 15,
        flexDirection: 'row',

    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
});

export default LocationInput;