import { Text, StyleSheet } from "react-native";
import Colors from "../../assets/utils/colors";

function InstrunctionText({ children }) {
  return <Text style={styles.instuctionText}>{children}</Text>;
}

export default InstrunctionText;

const styles = StyleSheet.create({
  instuctionText: {
    color: Colors.accentYellow500,
    fontSize: 24,
  },
});
