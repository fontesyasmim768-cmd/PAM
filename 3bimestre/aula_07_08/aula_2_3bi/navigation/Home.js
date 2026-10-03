import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Yasmim Lash</Text>

      <Text style={styles.subtitulo}>
        Realce sua beleza com nossos procedimentos de cílios
      </Text>

      <View style={styles.card}>
        <Text style={styles.servico}>Fio a Fio</Text>
        <Text style={styles.preco}>R$ 80,00</Text>
        <Text style={styles.descricao}>
          Resultado delicado e natural.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.servico}>Egípcio</Text>
        <Text style={styles.preco}>R$ 120,00</Text>
        <Text style={styles.descricao}>
          Mais volume e destaque para o olhar.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.servico}>Fox</Text>
        <Text style={styles.preco}>R$ 135,00</Text>
        <Text style={styles.descricao}>
          Efeito alongado e marcante.
        </Text>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Agendar horário</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f0f5',
    padding: 25,
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7a4565',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
  },

  servico: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7a4565',
  },

  preco: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
  },

  descricao: {
    color: '#666',
    marginTop: 5,
  },

  botao: {
    backgroundColor: '#7a4565',
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
  },

  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
});