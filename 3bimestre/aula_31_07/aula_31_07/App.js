import { StatusBar } from 'expo-status-bar';

import {

  StyleSheet,

  ScrollView,

  Image,

  Text,

  TextInput,

  Button

} from 'react-native';

export default function App() {

  return (

    <ScrollView style={styles.container}>

      <Image

        source={{

          uri: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800'

        }}

        style={styles.imagem}

      />

      <Text style={styles.titulo}>Power Fitness</Text>

      <Text style={styles.subtitulo}>

        Faça seu cadastro e comece a treinar hoje.

      </Text>

      <Text style={styles.label}>Nome</Text>

      <TextInput

        placeholder="Digite seu nome"

        style={styles.input}

      />

      <Text style={styles.label}>E-mail</Text>

      <TextInput

        placeholder="Digite seu e-mail"

        style={styles.input}

      />

      <Text style={styles.label}>Objetivo</Text>

      <TextInput

        placeholder="Ex: Ganhar massa muscular"

        style={styles.input}

      />

      <Button

        title="Cadastrar"

        onPress={() => alert("Cadastro realizado com sucesso!")}

      />

      <StatusBar style="auto" />

    </ScrollView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#111",

    padding: 20,

  },

  imagem: {

    width: "100%",

    height: 220,

    borderRadius: 15,

    marginBottom: 20,

  },

  titulo: {

    fontSize: 30,

    fontWeight: "bold",

    color: "#FFD700",

    textAlign: "center",

    marginBottom: 10,

  },

  subtitulo: {

    color: "#fff",

    fontSize: 16,

    textAlign: "center",

    marginBottom: 20,

  },

  label: {

    color: "#fff",

    fontSize: 16,

    marginBottom: 5,

  },

  input: {

    backgroundColor: "#fff",

    borderRadius: 8,

    padding: 10,

    marginBottom: 15,
  },
});