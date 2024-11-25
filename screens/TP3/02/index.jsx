import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ListItem from './listItem';

export default function TP3_02() {
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
        <ScrollView >
            <View style={styles.container}>
                {
                    listItems.map((item, idx) => <ListItem text={item.text} key={`list_${idx}`} />)
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        gap: 15,
        paddingHorizontal: 5,
        marginVertical: 15
    },
})