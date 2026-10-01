import { Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  function fazerLogin() {
    alert('Login realizado!');
  }

  return (
    <View>

      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
        }}
        style={{ width: 200, height: 200 }}
      />

      <Text>E-mail</Text>

      <TextInput
        placeholder="fulano@hotmail.com"
      />

      <Text>Senha</Text>

      <TextInput
        placeholder="abcd@1234"
        secureTextEntry
      />

      <Button
        title="Login"
        onPress={fazerLogin}
      />

    </View>
  );
}
