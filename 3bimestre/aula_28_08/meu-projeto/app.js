import { View, Text, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';

export default function App() {

    const usuarios = [
        { id: '1', nome: 'João', img: '84358734yt' },
        { id: '200', nome: 'Emanuela' },
    ];

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Bem-vindo!</Text>

            <Text style={styles.subtitulo}>Lista de usuários:</Text>

            <FlatList
                data={usuarios}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.nome}>{item.nome}</Text>
                    </View>
                )}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    subtitulo: {
        fontSize: 18,
        marginBottom: 15,
    },

    item: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#eee',
        borderRadius: 8,
    },

    nome: {
        fontSize: 16,
    },
});