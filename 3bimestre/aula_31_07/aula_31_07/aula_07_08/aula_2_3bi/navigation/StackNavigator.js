import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <ScrollView>

      <Image source={{
        uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
      }}
      style={{width: 200, height: 200}}/>

      <Text>E-mail</Text>
      <TextInput placeholder='fulano@hotmail.com' style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
      }}></TextInput>

      <Text>Senha</Text>
      <TextInput placeholder='abcd@1234' style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
      }}></TextInput>

      <Button title='Login' onPress={() => { }}/>

    </ScrollView>
  );
}