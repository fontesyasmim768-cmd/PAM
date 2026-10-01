import { Text, View, Button, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        📚 Biblioteca Escolar
      </Text>

      <Text style={styles.subtitulo}>
        Sistema de Biblioteca
      </Text>

      <View style={styles.botao}>
        <Button
          title="Consultar Livros"
          onPress={() => alert('Consulta de livros')}
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Cadastrar Aluno"
          onPress={() => alert('Cadastro de aluno')}
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Cadastrar Livro"
          onPress={() => alert('Cadastro de livro')}
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Empréstimos"
          onPress={() => alert('Empréstimos')}
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Devoluções"
          onPress={() => alert('Devoluções')}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddefff',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 18,
    color: '#555',
    marginBottom: 30,
  },

  botao: {
    width: 250,
    marginBottom: 15,
  },
});
