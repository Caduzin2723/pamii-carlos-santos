import React from 'react';
import { TextInput, StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={() => alert('Touchable Opacity pressionado!')}>
        <Text style={styles.touchableText}>GERAR DECLARAÇÃO DE MATRÍCULA ONLINE</Text>
      </TouchableOpacity>
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
      <TouchableOpacity style={styles.touchable} onPress={() => alert('Touchable Opacity pressionado!')}>
        <Text style={styles.touchableText}>SOLICITAR</Text>
      </TouchableOpacity>
      <TextInput 
        style={styles.input}
        placeholder="Digite aqui..."
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.touchable} onPress={() => alert('Touchable Opacity pressionado!')}>
        <Text style={styles.touchableText}>CONSULTAR</Text>
      </TouchableOpacity>
      {/* <Button 
        title="Pressionar"
        onPress={() => alert('Botão pressionado!')}
        color="#c2c2c2"
      /> */}
      <TouchableOpacity style={styles.touchable} onPress={() => alert('Touchable Opacity pressionado!')}>
        <Text style={styles.touchableText}>Pressionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  touchable: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#c2c2c2',
    borderRadius: 8,
  },
  touchableText: {
    color: '#fff',
    fontSize: 16,
  },
});
