import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>📅 HORÁRIO</Text>
      </View>

      {/* Seletor de semana */}
      <View style={styles.weekSelector}>
        <TouchableOpacity style={styles.selectedOption}>
          <Text style={styles.optionText}>● Semana Atual</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.unselectedOption}>
          <Text style={styles.optionText}>○ Próxima Semana</Text>
        </TouchableOpacity>
      </View>

      {/* Data */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>Terça-feira - 18/02/2025</Text>
      </View>

      {/* Texto de instrução */}
      <Text style={styles.instructionText}>TOQUE NA LINHA PARA VER DETALHES</Text>

      {/* Lista de aulas */}
      {[
        { hora: "07h00", componente: "Matemática", professor: "João Edison Tamelini Martins" },
        { hora: "07h50", componente: "Matemática", professor: "João Edison Tamelini Martins" },
        { hora: "08h40", componente: "Sociologia", professor: "Felipe Silva Avelino" },
        { hora: "09h45", componente: "Língua Portuguesa", professor: "Vanessa Araujo Gomes Giron" },
      ].map((aula, index) => (
        <TouchableOpacity key={index} style={styles.classCard}>
          <Text style={styles.bold}>Aula: {index + 1}ª Hora - {aula.hora}</Text>
          <Text style={styles.bold}>Componente: <Text style={styles.normal}>{aula.componente}</Text></Text>
          <Text style={styles.bold}>Professor: <Text style={styles.normal}>{aula.professor}</Text></Text>
          <Text style={styles.bold}>Ambiente: <Text style={styles.normal}>-</Text></Text>
        </TouchableOpacity>
      ))}

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Sistema NSA</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    padding: 10,
  },
  header: {
    backgroundColor: "#333",
    padding: 15,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  weekSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  selectedOption: {
    alignItems: "center",
  },
  unselectedOption: {
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
  },
  dateContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  instructionText: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },
  classCard: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
  },
  bold: {
    fontWeight: "bold",
  },
  normal: {
    fontWeight: "normal",
  },
  footer: {
    backgroundColor: "#333",
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
  footerText: {
    color: "white",
    fontSize: 16,
  },
});
