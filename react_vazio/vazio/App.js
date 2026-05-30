import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewred}>
        <Text style={styles.red}>Studio de Cilios</Text>
      </View>

      <View style={styles.viewred}>
        <Text style={styles.bigBlue}>Realce sua Beleza</Text>
      </View>

      <View style={styles.viewred}>
        <Text style={[styles.bigBlue, styles.red]}>
          Alongamento de Cilios
        </Text>
      </View>

      <View style={styles.viewred}>
        <Text style={[styles.red, styles.bigBlue]}>
          Agende seu Horario!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdfdf',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  viewred: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
  },

  bigBlue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2D2D2D',
    textAlign: 'center',
  },

  red: {
    fontSize: 20,
    color: '#ff001e',
    textAlign: 'center',
    fontWeight: '600',
  },
});