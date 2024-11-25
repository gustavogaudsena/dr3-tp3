import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import Card from './card';
import { useEffect, useState } from 'react';

export default function TP3_06() {
    const [produtos, setProdutos] = useState([])
    const url = "https://dfef-dmrn-tps-default-rtdb.firebaseio.com/products.json";

    useEffect(() => {
        fetch(url).then(async resp => await resp.json()).then(jsonResp => setProdutos(Object.values(jsonResp)))
    }, [])
    return (
        <View style={styles.container}>
            <FlatList
                data={produtos}
                renderItem={({ item }) => <Card produto={item} />}
                keyExtractor={item => item.id}
                style={styles.flatList}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        gap: 15,
        paddingHorizontal: 5,
        marginVertical: 15,
        flexDirection: 'column',
    },
})