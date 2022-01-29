import { createStore } from "redux";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { useSelector } from "react-redux";
import test from "./components/test";
import HomeScreen from "./screens/HomeScreen";

const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
