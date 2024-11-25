import { View, Text, StyleSheet } from 'react-native';
import ListItem from './listItem';

export default function TP3_01() {
    const listItems = [
        { text: 'Item A' },
        { text: 'Item B' },
        { text: 'Item C' }
    ]
    return (
        <View style={styles.container}>
           <Text style={styles.text}>TP1 pode ser verificado ao observar a estrutura de pastas do projeto.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alingItems: 'center',
        justifyContent: 'center',
        gap: 15,
        paddingHorizontal: 5,
        marginVertical: 15,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})