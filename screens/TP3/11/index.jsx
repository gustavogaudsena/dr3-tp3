import { View, Text, StyleSheet, ScrollView, FlatList, TextInput, Button, ActivityIndicator } from 'react-native';
import Card from './card';
import { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default function TP3_11() {
    const [produtos, setProdutos] = useState([])
    const [filter, setFilter] = useState("")
    const [orderBy, setOrderBy] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);

    const url = "https://dfef-dmrn-tps-default-rtdb.firebaseio.com/products.json";

    const filtrar = () => {
        const items = produtos.filter(produto => produto.nome.toLowerCase().includes(filter.toLowerCase()) || produto.descricao.toLowerCase().includes(filter.toLowerCase()));
        setProdutosFiltrados(items);
    }

    const ordernar = (order) => {
        const itemsOrdenados = produtosFiltrados.sort((a, b) => {
            if (order === 'nomeAsc') return b.nome.localeCompare(a.nome)
            if (order === 'nomeDesc') return a.nome.localeCompare(b.nome)
            if (order === 'precoAsc') return Number(a.preco) - Number(b.preco)
            if (order === 'precoDesc') return Number(b.preco) - Number(a.preco)
        })
        setProdutosFiltrados(itemsOrdenados)
    }
    const loadItems = () => {
        setIsLoading(true)
        fetch(url).then(async resp => await resp.json()).then(jsonResp => setProdutos(Object.values(jsonResp))).catch((err) => console.error(err.message)).finally(setIsLoading(false))
    }

    useEffect(() => {
        loadItems()
    }, [])

    useEffect(() => {
        setProdutosFiltrados(produtos)
    }, [produtos])

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
                onValueChange={(value) => {
                    setOrderBy((prev) => {
                        ordernar(value)
                        return value
                    })
                }}
                style={styles.picker}
            >
                <Picker.Item label="Ordenar por nome de forma crescente" value="nomeAsc" />
                <Picker.Item label="Ordenar por nome de forma decrescente" value="nomeDesc" />
                <Picker.Item label="Ordenar por preço de forma crescente" value="precoAsc" />
                <Picker.Item label="Ordenar por preço de forma decrescente" value="precoDesc" />
            </Picker>
            <FlatList
                data={produtosFiltrados}
                renderItem={({ item }) => <Card produto={item} />}
                keyExtractor={(item, index) => `${item}-${index}`}
                style={styles.flatList}
                onEndReached={loadItems}
            />
            {isLoading && <ActivityIndicator size="large" />}
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