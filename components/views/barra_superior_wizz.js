import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const BarraWizz = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/ic_launcher-web.png')}
      />
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/ic_launcher.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    position: 'relative',
    top: 5,
    padding: 25,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default BarraWizz;
