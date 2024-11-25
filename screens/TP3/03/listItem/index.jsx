import { StyleSheet, Text, View } from "react-native";

export default function ListItem({ text }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderWidth: 0.5,
        backgroundColor: '#e6e6e6',
        borderColor: '#32302e',
        width: '100%',
        flex: 1
    },
    text: {
        fontSize: 16
    }
})