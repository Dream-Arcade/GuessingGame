import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../assets/utils/colors";
import { View } from "react-native";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center", //position elements on main axis, default column
    alignItems: "center", // Along the cross axis, opposite axis, default is stretch
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primaryRed400,
    borderRadius: 8,
    elevation: 8,
  },
});
