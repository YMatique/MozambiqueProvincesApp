import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ProvinceScreen({ route }) {
  const { provincia } = route.params;

  const renderDistrito = ({ item }) => (
    <Text style={styles.distritoTexto}>- {item}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.provinciaTitulo}>{provincia.nome}</Text>
      <View style={styles.resumoContainer}>
        <Text style={styles.resumoTitle}>Resumo</Text>
        <Text style={styles.resumoText}>{provincia.resumo}</Text>
        <Text style={styles.resumoTitle}>Capital</Text>
        <Text style={styles.resumoText}>{provincia.capital}</Text>
      </View>
      <Text style={styles.distritosTitle}>Distritos</Text>
      <FlatList
        data={provincia.distritos}
        renderItem={renderDistrito}
        keyExtractor={(distrito) => distrito}
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
  provinciaTitulo: {
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
  distritosTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF9800',
    marginBottom: 10,
  },
  distritoTexto: {
    fontSize: 16,
    color: '#555',
    marginLeft: 15,
    lineHeight: 22,
  },
});