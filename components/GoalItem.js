import {StyleSheet, View, Text} from 'react-native';

function GoalItem(props) {
    return(
        <View style={styles.goalItems}>
            <Text style={styles.goalText}> {props.text} </Text>
        </View>
      );
}

const styles = StyleSheet.create({

  goalItems:{
    backgroundColor: "#E6E6FA",
    color: "#67074e",
    borderRadius: 5,
    marginTop: 10,
  },

  goalText:{
    padding: 15,
  },

  });
  export default GoalItem;
