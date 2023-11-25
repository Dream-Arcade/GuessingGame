import { View, Text, StyleSheet } from "react-native";
import Colors from "../../assets/utils/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accentYellow500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accentYellow500,
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
