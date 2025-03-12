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
          {item.nome} (Capital: {item.capital})
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
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  provinciaContainer: {
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  provinciaTexto: {
    fontSize: 18,
    color: '#333',
  },
  distritosLista: {
    marginTop: 10,
  },
  distritoTexto: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
  },
});