import { Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  function fazerLogin() {
    alert('Login realizado!');
  }

  return (
    <View>

      <Text>📚 SISTEMA DE BIBLIOTECA</Text>

      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
        }}
        style={{ width: 200, height: 200 }}
      />

      <Text>Bem-vindo à Biblioteca!</Text>

      <Text>E-mail</Text>

      <TextInput
        placeholder="Digite seu e-mail"
      />

      <Text>Senha</Text>

      <TextInput
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <Button
        title="Entrar"
        onPress={fazerLogin}
      />

    </View>
  );
}
