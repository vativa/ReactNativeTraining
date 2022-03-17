import React, { useState }  from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const useReducer = (reducer, initState) => {
  const [state, setState] = useState(initState);
  const dispatch = action => setState(reducer(state, action));
  return [state, dispatch];
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return state.counter + action.payload < 10
        ? { ...state, counter: state.counter + action.payload }
        : { ...state, counter: 10 };
    case DECREMENT:
      return action.payload < state.counter
        ? { ...state, counter: state.counter - action.payload }
        : { ...state, counter: 0 };
    default:
      return { ...state };
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  
  return <View style={styles.view}>
    <Button title="Count up to 10" onPress={() => dispatch({ type: INCREMENT, payload: 1 })} />
    <Text style={[styles.centered, styles.text, styles.view]}>{state.counter}</Text>
    <Button title="Count back down" onPress={() => dispatch({ type: DECREMENT, payload: 1 })} />
  </View>;
};

const styles = StyleSheet.create({
  view: {
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
  centered: {
    textAlign: 'center'
  }
});

export default CounterScreen;
