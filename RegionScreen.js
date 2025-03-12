import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function RegionScreen({ route, navigation }) {
  const { regiao } = route.params;

  const renderProvincia = ({ item }) => (
    <TouchableOpacity
      style={styles.provinciaContainer}
      onPress={() => navigation.navigate('Province', { provincia: item })}
    >
      <Text style={styles.provinciaTexto}>
        {item.nome} <Text style={styles.capitalTexto}>(Capital: {item.capital})</Text>
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.regiaoTitulo}>{regiao.nome}</Text>
      <View style={styles.resumoContainer}>
        <Text style={styles.resumoTitle}>Culturas Predominantes</Text>
        <Text style={styles.resumoText}>{regiao.culturas}</Text>
        <Text style={styles.resumoTitle}>Idiomas</Text>
        <Text style={styles.resumoText}>{regiao.idiomas}</Text>
      </View>
      <Text style={styles.provinciasTitle}>Províncias</Text>
      <FlatList
        data={regiao.provincias}
        renderItem={renderProvincia}
        keyExtractor={(provincia) => provincia.nome}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E1',
    padding: 20,
  },
  regiaoTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D81B60',
    textAlign: 'center',
    marginBottom: 20,
  },
  resumoContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  resumoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF9800',
    marginBottom: 5,
  },
  resumoText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 10,
  },
  provinciasTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF9800',
    marginBottom: 10,
  },
  provinciaContainer: {
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  provinciaTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
  },
  capitalTexto: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#888',
  },
});