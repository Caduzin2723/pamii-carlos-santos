import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NSA</Text>
      <Text style={styles.subtitle}>ALUNO</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.placeholder}>Código da Etec (ex: 031)</Text>
        </View>
        <View style={styles.helpButton}>
          <Text style={styles.helpText}>?</Text>
        </View>
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.placeholder}>Digite seu RM</Text>
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.placeholder}>Digite sua senha</Text>
      </View>

      <View style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate("home")}>ENTRAR</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.smallButton}>
          <Text style={styles.buttonText}>NOVA SENHA</Text>
        </View>
        <View style={styles.smallButton}>
          <Text style={styles.buttonText}>PRIVACIDADE</Text>
        </View>
      </View>

      <View style={styles.button}>
        <Text style={styles.buttonText}>CÓDIGO DE ENTRADA</Text>
      </View>

      <Text style={styles.footer}>Sistema NSA - Versão 1.34.61</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d3d3d3",
    width: "100%",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputBox: {
    backgroundColor: "white",
    padding: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 6,
    width: 300,
    marginVertical: 5,
  },
  placeholder: {
    color: "gray",
  },
  helpButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 6,
    marginLeft: 5,
  },
  helpText: {
    color: "white",
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 6,
    width: 300,
    marginVertical: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
  },
  smallButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 6,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  footer: {
    marginTop: 20,
    fontSize: 12,
  },
});
