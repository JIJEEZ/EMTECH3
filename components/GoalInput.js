import { useState } from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';

function GoalInput(props) {
const [enteredGoalText, setEnteredText] = useState("");

function textInputHandler(enteredText) {
  setEnteredText(enteredText);
};

function addGoalHandler() {
  props.onAddGoal(enteredGoalText);
  setEnteredText('');
};

  return(
    <View style={StyleSheet.inputContainer}>
      <TextInput placeholder='Your course goals!'
      style={StyleSheet.textInput}
      onChangeText={textInputHandler}
      />
      <Button title='Add Goal' onPress={props.onAddGoal}color={'#3f7579'}></Button>
    </View>
  )
}
export default GoalInput;
