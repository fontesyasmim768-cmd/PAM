import { Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
        📚 Biblioteca Escolar
      </Text>

      <Text style={{ fontSize: 18 }}>
        Bem-vindo!
      </Text>

      <Button
        title="Consultar Livros"
        onPress={() => alert('Consulta de livros')}
      />

      <Button
        title="Cadastrar Aluno"
        onPress={() => alert('Cadastro de aluno')}
      />

      <Button
        title="Cadastrar Livro"
        onPress={() => alert('Cadastro de livro')}
      />

      <Button
        title="Empréstimos"
        onPress={() => alert('Empréstimos')}
      />

      <Button
        title="Devoluções"
        onPress={() => alert('Devoluções')}
      />

    </View>
  );
}