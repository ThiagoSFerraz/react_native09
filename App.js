import React from "react";
import { View, StatusBar } from "react-native";
import Login from "./src/pages/login"


function App() {
  return (
    <View>
      <StatusBar backgroundColor="lightblue" barStyle="default" animated={true} />
      <Login />
    </View>
  );
}


export default App;
