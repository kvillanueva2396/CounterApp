import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const BtnTxt = ({text, counterOperation}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={counterOperation}>
      <Text style={styles.btnTxt}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    width: 70,
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 5,
  },
  btnTxt: {
    fontSize: 25,
    color: '#000',
  },
});

BtnTxt.propTypes = {
  text: PropTypes.string.isRequired,
  counterOperation: PropTypes.func.isRequired,
};

export default BtnTxt;
