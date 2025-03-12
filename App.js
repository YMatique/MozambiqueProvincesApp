import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [expanded, setExpanded] = useState(null);

  const regioes = [
    {
      nome: 'Norte',
      provincias: [
        {
          nome: 'Cabo Delgado',
          capital: 'Pemba',
          distritos: [
            'Ancuabe', 'Balama', 'Chiúre', 'Ibo', 'Macomia', 'Mecúfi', 'Meluco',
            'Metuge', 'Mocímboa da Praia', 'Montepuez', 'Mueda', 'Muidumbe',
            'Namuno', 'Nangade', 'Palma', 'Pemba', 'Quissanga',
          ],
        },
        {
          nome: 'Nampula',
          capital: 'Nampula',
          distritos: [
            'Angoche', 'Eráti', 'Ilha de Moçambique', 'Lalaua', 'Malema', 'Meconta',
            'Mecubúri', 'Memba', 'Mogincual', 'Mogovolas', 'Moma', 'Monapo',
            'Mossuril', 'Muecate', 'Murrupula', 'Nacala-a-Velha', 'Nacala Porto',
            'Nacarôa', 'Nampula', 'Rapale', 'Ribáuè',
          ],
        },
        {
          nome: 'Niassa',
          capital: 'Lichinga',
          distritos: [
            'Chimba', 'Lago', 'Lichinga', 'Majune', 'Mandimba', 'Marrupa',
            'Mavago', 'Mecanhelas', 'Metarica', 'Muembe', 'N’gauma', 'Nipepe',
            'Sanga', 'Cuamba', 'Maúa', 'Mecula',
          ],
        },
      ],
    },
    {
      nome: 'Centro',
      provincias: [
        {
          nome: 'Manica',
          capital: 'Chimoio',
          distritos: [
            'Bárue', 'Chimoio', 'Gondola', 'Guro', 'Macate', 'Machaze', 'Macossa',
            'Manica', 'Mossurize', 'Sussundenga', 'Tambara', 'Vanduzi',
          ],
        },
        {
          nome: 'Sofala',
          capital: 'Beira',
          distritos: [
            'Búzi', 'Caia', 'Chemba', 'Cheringoma', 'Chibabava', 'Dondo', 'Gorongosa',
            'Machanga', 'Marínguè', 'Marromeu', 'Muanza', 'Nhamatanda', 'Beira',
          ],
        },
        {
          nome: 'Tete',
          capital: 'Tete',
          distritos: [
            'Angónia', 'Cahora-Bassa', 'Changara', 'Chifunde', 'Chiuta', 'Dôa',
            'Macanga', 'Magoé', 'Marávia', 'Moatize', 'Mutarara', 'Tete', 'Tsangano',
            'Zumbu',
          ],
        },
        {
          nome: 'Zambézia',
          capital: 'Quelimane',
          distritos: [
            'Alto Molócue', 'Chinde', 'Gilé', 'Gurué', 'Ile', 'Inhassunge', 'Luabo',
            'Maganja da Costa', 'Milange', 'Mocuba', 'Mopeia', 'Morrumbala',
            'Namacurra', 'Namarroi', 'Nicoadala', 'Pebane', 'Quelimane',
          ],
        },
      ],
    },
    {
      nome: 'Sul',
      provincias: [
        {
          nome: 'Gaza',
          capital: 'Xai-Xai',
          distritos: [
            'Bilene', 'Chibuto', 'Chicualacuala', 'Chigubo', 'Chókwè', 'Guijá',
            'Mabalane', 'Manjacaze', 'Massangena', 'Massingir', 'Xai-Xai',
          ],
        },
        {
          nome: 'Inhambane',
          capital: 'Inhambane',
          distritos: [
            'Funhalouro', 'Govuro', 'Homoíne', 'Inhambane', 'Inharrime', 'Inhassoro',
            'Jangamo', 'Mabote', 'Massinga', 'Maxixe', 'Morrumbene', 'Panda',
            'Vilanculos', 'Zavala',
          ],
        },
        {
          nome: 'Maputo (Província)',
          capital: 'Matola',
          distritos: [
            'Boane', 'Magude', 'Manhiça', 'Marracuene', 'Matola', 'Matutuíne',
            'Moamba', 'Namaacha',
          ],
        },
        {
          nome: 'Maputo (Cidade)',
          capital: 'Maputo',
          distritos: ['Maputo'],
        },
      ],
    },
  ];

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

  const renderRegiao = ({ item }) => (
    <View style={styles.regiaoContainer}>
      <Text style={styles.regiaoTexto}>{item.nome}</Text>
      <FlatList
        data={item.provincias}
        renderItem={renderProvincia}
        keyExtractor={(provincia) => provincia.nome}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Províncias de Moçambique</Text>
      <FlatList
        data={regioes}
        renderItem={renderRegiao}
        keyExtractor={(regiao) => regiao.nome}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  regiaoContainer: {
    marginBottom: 20,
  },
  regiaoTexto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 10,
  },
  provinciaContainer: {
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
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