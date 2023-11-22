import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";

import Colors from "../assets/utils/colors";
import Title from "../components/ui/Title";

import Card from "../components/ui/Card";
import InstrunctionText from "../components/ui/InstructionText";

function StartGameScreen({ onConfirmNumber }) {
  const [mobile, setMobile] = useState(""); //mobile is the inputted text

  const numberInputHandler = (inputText) => {
    setMobile(inputText.replace(/[^1-9]/g, ""));
  };

  function resetInputHandler() {
    setMobile("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(mobile);
    console.log("Hmmm");
    if (isNaN(chosenNumber)) {
      Alert.alert("Invalid number!", "Stop trying to break the program!", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    console.log(mobile);
    onConfirmNumber(chosenNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number!</Title>
      <Card>
        <InstrunctionText>Enter a number</InstrunctionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          secureTextEntry={false}
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={mobile}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressed={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressed={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    justifyContent: "center", //position elements on main axis, default column
    alignItems: "center", // Along the cross axis, opposite axis, default is stretch
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primaryRed400,
    borderRadius: 8,
    elevation: 8,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accentYellow500,
    borderBottomWidth: 2,

    color: Colors.accentYellow500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  instuctionText: {
    color: Colors.accentYellow500,
    fontSize: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
