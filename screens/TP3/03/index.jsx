import { View, Text, StyleSheet, FlatList } from 'react-native';
import ListItem from './listItem';

export default function TP3_03() {
    const listItems = [
        { text: 'Item A' },
        { text: 'Item B' },
        { text: 'Item C' },
        { text: 'Item D' },
        { text: 'Item E' },
        { text: 'Item F' },
        { text: 'Item G' },
        { text: 'Item H' },
        { text: 'Item I' },
        { text: 'Item J' },
        { text: 'Item K' },
        { text: 'Item L' },
        { text: 'Item M' },
        { text: 'Item N' },
        { text: 'Item O' },
        { text: 'Item P' },
        { text: 'Item Q' },
        { text: 'Item R' },
        { text: 'Item S' },
        { text: 'Item T' },
        { text: 'Item U' },
        { text: 'Item V' },
        { text: 'Item W' },
    ]
    return (
        <View style={styles.container}>
            <FlatList
                data={listItems}
                renderItem={({ item }) => <ListItem text={item.text} />}
                keyExtractor={item => item.id}
                style={styles.flatList}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        gap: 15,
        paddingHorizontal: 5,
        marginVertical: 15,
        flexWrap: 'wrap'
    },
    flatList : {
        width: '100%'
    }
})