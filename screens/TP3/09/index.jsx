import { View, Text, StyleSheet, ScrollView, FlatList, TextInput, Button } from 'react-native';
import Card from './card';
import { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default function TP3_09() {
    const [produtos, setProdutos] = useState([])
    const [filter, setFilter] = useState("")
    const [orderBy, setOrderBy] = useState("asc")
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);

    const url = "https://dfef-dmrn-tps-default-rtdb.firebaseio.com/products.json";

    const filtrar = () => {
        const items = produtos.filter(produto => produto.nome.toLowerCase().includes(filter.toLowerCase()) || produto.descricao.toLowerCase().includes(filter.toLowerCase()));
        setProdutosFiltrados(items);
    }

    const ordernar = () => {
        const itemsOrdenados = produtosFiltrados.sort((a, b) => orderBy === 'asc' ? b.nome.localeCompare(a.nome) : a.nome.localeCompare(b.nome))
        setProdutosFiltrados(itemsOrdenados)
    }

    useEffect(() => {
        fetch(url).then(async resp => await resp.json()).then(jsonResp => setProdutos(Object.values(jsonResp)))
    }, [])

    useEffect(() => {
        setProdutosFiltrados(produtos)
    }, [produtos])

    useEffect(() => {
        ordernar();
    }, [orderBy]);

    return (
        <View style={styles.container}>

            <View style={styles.containerFilter}>
                <TextInput
                    style={styles.input}
                    placeholder="Filtrar por nome e descrição"
                    value={filter}
                    onChangeText={setFilter}
                />
                <Button title="Filtrar" onPress={filtrar} />
            </View>
            <Picker
                selectedValue={orderBy}
                onValueChange={(value) => setOrderBy(value)}
                style={styles.picker}
            >
                <Picker.Item label="Ordenar por Nome de forma crescente" value="asc" />
                <Picker.Item label="Ordenar por Nome de forma decrescente" value="desc" />
            </Picker>
            <FlatList
                data={produtosFiltrados}
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