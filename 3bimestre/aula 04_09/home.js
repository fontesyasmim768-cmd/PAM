import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from './Estilo';
import { realizarCalculo } from './Funcoe';

export default function Home() {
const [numero1, setNumero1] = useState('');
const [numero2, setNumero2] = useState('');
const [operacao, setOperacao] = useState('+');
const [resultado, setResultado] = useState('');

return (
<View style={styles.container}>

<Text style={styles.titulo}>
Média de Notas
</Text>

<TextInput
style={styles.input}
placeholder="Digite a primeira nota"
keyboardType="numeric"
value={numero1}
onChangeText={setNumero1}
/>

<TextInput
style={styles.input}
placeholder="Digite a segunda nota"
keyboardType="numeric"
value={numero2}
onChangeText={setNumero2}
/>

<View style={styles.operacoes}>

<TouchableOpacity
style={styles.botao}
onPress={() => setOperacao('+')}
>
<Text style={styles.textoBotao}>Média</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.botao}
onPress={() => setOperacao('-')}
>
<Text style={styles.textoBotao}>Maior</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.botao}
onPress={() => setOperacao('*')}
>
<Text style={styles.textoBotao}>Aprovado</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.botao}
onPress={() => setOperacao('/')}
>
<Text style={styles.textoBotao}>Menor</Text>
</TouchableOpacity>

</View>

<Text style={styles.operacaoSelecionada}>
Opção: {operacao}
</Text>

<TouchableOpacity
style={styles.botaoCalcular}
onPress={() =>
realizarCalculo(
numero1,
numero2,
operacao,
setResultado
)
}
>
<Text style={styles.textoCalcular}>
Verificar
</Text>
</TouchableOpacity>

<Text style={styles.resultado}>
Resultado: {resultado}
</Text>

</View>
);
}