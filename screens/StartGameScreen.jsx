import { TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  const [mobile, setMobile] = useState("");

  const numberInputHandler = (inputText) => {
    setMobile(inputText.replace(/[^0-9]/g, ""));
  };

  return (
    <View style={styles.inputContainer}>
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
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center", //position elements on main axis, default column
    alignItems: "center", // Along the cross axis, opposite axis, default is stretch
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#72063c",
    borderRadius: 8,
    elevation: 8,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,

    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
