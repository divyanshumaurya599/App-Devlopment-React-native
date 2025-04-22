import React from "react";
import { Button, Text, View } from "react-native";
import First from "./src/comoonents/First";
const App = () => {
    return (
        <View>
            <Text style={ { fontSize : 30 }}>Divyanshu Maurya</Text>
            <Text style={ { fontSize : 30 }}>Software Devlopment Intrn</Text>
            <Text style={ { fontSize : 30 }}>Btech</Text>
            <Button title="Press Hear"/>
            <First/>
            <First/>
        </View>
    );
};

export default App;