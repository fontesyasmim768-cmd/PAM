import { Text, View, Image, TextInput, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>

      <Image source={{
        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
      }}
      style={{ width: 200, height: 200 }} />

      <Text>Deu certo</Text>

    </View>
  );
}