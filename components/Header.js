import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Welcome!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 50,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Header;
