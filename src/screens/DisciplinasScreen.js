import { View, Text, StyleSheet } from 'react-native';

const disciplinas = [
{ nome: 'Matemática', emoji: '📐' },
{ nome: 'Português', emoji: '📝' },
{ nome: 'História', emoji: '📚' },
{ nome: 'Ciências', emoji: '🔬' },
];

export default function HomeScreen() {
return (
<View style={styles.container}>
<Text style={styles.titulo}>Disciplinas</Text>

{disciplinas.map((d, i) => (
<View key={i} style={styles.bloco}>
<Text style={styles.emoji}>{d.emoji}</Text>
<Text style={styles.nome}>{d.nome}</Text>
</View>
))}
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f4ff',
padding: 20,
paddingTop: 60,
},
titulo: {
fontSize: 24,
fontWeight: 'bold',
color: '#1e40af',
marginBottom: 20,
},
bloco: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
padding: 16,
borderRadius: 10,
marginBottom: 12,
},
emoji: {
fontSize: 24,
marginRight: 12,
},
nome: {
fontSize: 18,
color: '#334155',
},
});
