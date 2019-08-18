import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Restaurant = ({result}) => {
    return (
      <View style={styles.container}>
          <Image source={{uri: result.image_url || 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
                 style={styles.image}
          />
          <Text style={styles.name}> {result.name}</Text>
      </View>)
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    name: {
        fontWeight: 'bold'
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    }
});

export default Restaurant;