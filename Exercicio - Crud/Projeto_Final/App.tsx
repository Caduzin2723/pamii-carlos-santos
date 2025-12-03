import { StatusBar} from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, SafeAreaViewBase, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    const [newTask, setNewTask] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Adicione uma nova tarefa</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua tarefa"
                    onChangeText={(text) => setNewTask(text)}
                    value={newTask}
                />
            </View>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F5F5F5",
},
title: {
    fontSize:20,
    marginBottom: 5,
    color: "#333",
},
inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
},
input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#CCC",
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    marginRight: 10,
},
});
