//Por Carlos Santos e Kauã Gomes
import React from 'react';
import { TextInput, StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ gap: "12px", alignItems: "center", width: "100%", maxWidth: "350px" }}>
        <TouchableOpacity style={styles.touchable} onPress={() => alert('Touchable Opacity pressionado!')}>
          <Text style={styles.touchableText}>GERAR DECLARAÇÃO DE MATRÍCULA ONLINE</Text>
        </TouchableOpacity>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={{ fontWeight: "600" }}>SOLICITAÇÃO DE DECLARAÇÃO PARA RETIRADA</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite aqui..."
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Digite aqui..."
            placeholderTextColor="#888"
          />
        </View>
        <TouchableOpacity style={styles.touchable} onPress={() => alert('Touchable Opacity pressionado!')}>
          <Text style={styles.touchableText}>SOLICITAR</Text>
        </TouchableOpacity>
        <View style={{ alignItems: "center", width: "100%" }}>
          <Text style={{ fontWeight: "600" }}>CONSULTA DE DECLARAÇÃO SOLICITADA</Text>
          <View style={{ width: "100%", alignItems: "center", flexDirection: "row", justifyContent: "center", gap: "10px" }}>
            <TextInput
              style={styles.input}
              placeholder="Digite aqui..."
              placeholderTextColor="#888"
            />
            <TouchableOpacity style={styles.touchable} onPress={() => alert('Touchable Opacity pressionado!')}>
              <Text style={styles.touchableText}>CONSULTAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginTop: "1rem",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  touchable: {
    padding: 10,
    backgroundColor: '#111',
    borderRadius: 8,
  },
  touchableText: {
    color: '#fff',
    fontSize: 16,
  },
});
