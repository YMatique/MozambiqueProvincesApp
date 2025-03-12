import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegionScreen from './RegionScreen';

const Stack = createNativeStackNavigator();

const regioes = [
  {
    nome: 'Norte',
    provincias: [
      { nome: 'Cabo Delgado', capital: 'Pemba', distritos: ['Ancuabe', 'Balama', 'Chiúre', 'Ibo', 'Macomia', 'Mecúfi', 'Meluco', 'Metuge', 'Mocímboa da Praia', 'Montepuez', 'Mueda', 'Muidumbe', 'Namuno', 'Nangade', 'Palma', 'Pemba', 'Quissanga'] },
      { nome: 'Nampula', capital: 'Nampula', distritos: ['Angoche', 'Eráti', 'Ilha de Moçambique', 'Lalaua', 'Malema', 'Meconta', 'Mecubúri', 'Memba', 'Mogincual', 'Mogovolas', 'Moma', 'Monapo', 'Mossuril', 'Muecate', 'Murrupula', 'Nacala-a-Velha', 'Nacala Porto', 'Nacarôa', 'Nampula', 'Rapale', 'Ribáuè'] },
      { nome: 'Niassa', capital: 'Lichinga', distritos: ['Chimba', 'Lago', 'Lichinga', 'Majune', 'Mandimba', 'Marrupa', 'Mavago', 'Mecanhelas', 'Metarica', 'Muembe', 'N’gauma', 'Nipepe', 'Sanga', 'Cuamba', 'Maúa', 'Mecula'] },
    ],
  },
  {
    nome: 'Centro',
    provincias: [
      { nome: 'Manica', capital: 'Chimoio', distritos: ['Bárue', 'Chimoio', 'Gondola', 'Guro', 'Macate', 'Machaze', 'Macossa', 'Manica', 'Mossurize', 'Sussundenga', 'Tambara', 'Vanduzi'] },
      { nome: 'Sofala', capital: 'Beira', distritos: ['Búzi', 'Caia', 'Chemba', 'Cheringoma', 'Chibabava', 'Dondo', 'Gorongosa', 'Machanga', 'Marínguè', 'Marromeu', 'Muanza', 'Nhamatanda', 'Beira'] },
      { nome: 'Tete', capital: 'Tete', distritos: ['Angónia', 'Cahora-Bassa', 'Changara', 'Chifunde', 'Chiuta', 'Dôa', 'Macanga', 'Magoé', 'Marávia', 'Moatize', 'Mutarara', 'Tete', 'Tsangano', 'Zumbu'] },
      { nome: 'Zambézia', capital: 'Quelimane', distritos: ['Alto Molócue', 'Chinde', 'Gilé', 'Gurué', 'Ile', 'Inhassunge', 'Luabo', 'Maganja da Costa', 'Milange', 'Mocuba', 'Mopeia', 'Morrumbala', 'Namacurra', 'Namarroi', 'Nicoadala', 'Pebane', 'Quelimane'] },
    ],
  },
  {
    nome: 'Sul',
    provincias: [
      { nome: 'Gaza', capital: 'Xai-Xai', distritos: ['Bilene', 'Chibuto', 'Chicualacuala', 'Chigubo', 'Chókwè', 'Guijá', 'Mabalane', 'Manjacaze', 'Massangena', 'Massingir', 'Xai-Xai'] },
      { nome: 'Inhambane', capital: 'Inhambane', distritos: ['Funhalouro', 'Govuro', 'Homoíne', 'Inhambane', 'Inharrime', 'Inhassoro', 'Jangamo', 'Mabote', 'Massinga', 'Maxixe', 'Morrumbene', 'Panda', 'Vilanculos', 'Zavala'] },
      { nome: 'Maputo (Província)', capital: 'Matola', distritos: ['Boane', 'Magude', 'Manhiça', 'Marracuene', 'Matola', 'Matutuíne', 'Moamba', 'Namaacha'] },
      { nome: 'Maputo (Cidade)', capital: 'Maputo', distritos: ['Maputo'] },
    ],
  },
];

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Moçambique</Text>
      <Text style={styles.descricao}>
        Moçambique é um país localizado no sudeste da África, com uma costa de cerca de 2.700 km ao longo do Oceano Índico. Sua capital é Maputo. Com uma área de aproximadamente 801.590 km², o país é conhecido por sua rica biodiversidade, incluindo parques nacionais como o Gorongosa, e praias paradisíacas como as do Arquipélago de Bazaruto. A população é de cerca de 32 milhões de habitantes (estimativa 2023), composta por diversos grupos étnicos, como os Makua, Tsonga e Sena.
      </Text>
      <Text style={styles.descricao}>
        O clima de Moçambique é predominantemente tropical, com duas estações principais: a estação chuvosa (outubro a março) e a estação seca (abril a setembro). As temperaturas variam entre 20°C e 30°C na costa, sendo mais amenas no interior montanhoso.
      </Text>
      <Text style={styles.subtitulo}>Regiões</Text>
      {regioes.map((regiao) => (
        <TouchableOpacity
          key={regiao.nome}
          style={styles.botaoRegiao}
          onPress={() => navigation.navigate('Region', { regiao })}
        >
          <Text style={styles.textoBotao}>{regiao.nome}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Moçambique' }} />
        <Stack.Screen name="Region" component={RegionScreen} options={({ route }) => ({ title: route.params.regiao.nome })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  descricao: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
    marginBottom: 15,
  },
  subtitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2196F3',
    marginTop: 20,
    marginBottom: 10,
  },
  botaoRegiao: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});