import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import Viewer from './components/views/index';
import BarraWizz from './components/views/barra_superior_wizz';
import BtnTxt from './components/BtnTxt';

let initialState = 0;

const App = () => {
  const [counter, setCounter] = useState(initialState);

  const counterRest = () => {
    setCounter(counter - 1);
  };

  const counterAdd = () => {
    setCounter(counter + 1);
  };

  const counterReset = () => {
    setCounter(initialState);
  };

  return (
    <>
      <View style={styles.container}>
        <BarraWizz />
        <View style={styles.subcontainer}>
          <BtnTxt text="R" counterOperation={counterReset} />
          <View style={styles.counter}>
            <Text style={styles.textCounter}>{counter}</Text>
          </View>
          <View style={styles.containerButtons}>
            <BtnTxt text="+" counterOperation={counterAdd} />
            <BtnTxt text="-" counterOperation={counterRest} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#778beb',
  },
  subcontainer: {
    flex: 8,
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  counter: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textCounter: {
    color: '#fff',
    fontSize: 25,
  },
  containerButtons: {
    flexDirection: 'column',
    height: 150,
  },
});

export default App;
