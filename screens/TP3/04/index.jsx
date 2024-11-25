import { View, Text, StyleSheet, FlatList, SectionList } from 'react-native';
import ListItem from './listItem';

export default function TP3_04() {
    const listItems = [
        { title: "Sessão 1", data: ['Item A', 'Item B', 'Item C', 'Item D'] },
        { title: "Sessão 2", data: ['Item E', 'Item F'] },
        { title: "Sessão 3", data: ['Item G', 'Item H', 'Item I'] },
        { title: "Sessão 4", data: ['Item J', 'Item K', 'Item L'] },
        { title: "Sessão 5", data: ['Item M', 'Item N'] },
    ]
    return (
        <View style={styles.container}>
            <SectionList
                sections={listItems}
                renderItem={({ item }) => <ListItem text={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
                keyExtractor={(item, index) => `${item}-${index}`}
                style={styles.sectionList}
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
    sectionList: {
        width: '100%'
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10
    }
})