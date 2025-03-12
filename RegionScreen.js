import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function RegionScreen({ route }) {
  const { regiao } = route.params;
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (provinciaNome) => {
    setExpanded(expanded === provinciaNome ? null : provinciaNome);
  };

  const renderDistrito = ({ item }) => (
    <Text style={styles.distritoTexto}>- {item}</Text>
  );

  const renderProvincia = ({ item }) => (
    <View style={styles.provinciaContainer}>
      <TouchableOpacity onPress={() => toggleExpand(item.nome)}>
        <Text style={styles.provinciaTexto}>
          {item.nome} <Text style={styles.capitalTexto}>(Capital: {item.capital})</Text>
        </Text>
      </TouchableOpacity>
      {expanded === item.nome && (
        <FlatList
          data={item.distritos}
          renderItem={renderDistrito}
          keyExtractor={(distrito) => distrito}
          style={styles.distritosLista}
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.regiaoTitulo}>{regiao.nome}</Text>
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
  distritosLista: {
    marginTop: 10,
  },
  distritoTexto: {
    fontSize: 16,
    color: '#555',
    marginLeft: 15,
    lineHeight: 22,
  },
});