import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, counterReset } from 'react-native';
import starIcon from './assets/star.png';
// import guardIcon from './assets/shield.png';

const App = () => {
  const [coinSide, setCoinSide] = useState('Star or Guard?');
  const [count, setCount] = useState(0);


  const flipCoin = () => {
    const result = Math.random() < 0.5 ? 'Star' : 'Guard';
    const  newCount = setCount(count + 1);

    if (result === 'Star') {
      newCount
      setCoinSide(`${result}`);
    } else if (result === 'Guard') {
      newCount
      setCoinSide(`${result}`)
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{coinSide}</Text>
      <TouchableOpacity style={styles.button} onPress={flipCoin}>
        <Text style={styles.buttonText}>Flip the Coin</Text>
      </TouchableOpacity>
      <Text style={styles.buttonText}>
        {count}
      </Text>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.buttonText} onPress={() => {setCount(0)}}>Reset Flips</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  resultText: {
    display: 'flex',
    fontSize: 32,
    marginBottom: 20,
    color: 'white',
  },
  deleteButton: {
    display: 'block',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 15,
    paddingVertical: 7,
  },
  button: {
    backgroundColor: '#337',
    padding: 10,
    borderRadius: 15,
    paddingVertical: 7,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default App;
