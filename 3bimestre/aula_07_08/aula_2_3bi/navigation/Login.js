import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Yasmim Lash</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
      />

      <Button
        title="Entrar"
        color="#7a4565"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f0f5',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: '#7a4565',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
