import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegionScreen from './RegionScreen';

const Stack = createNativeStackNavigator();

const regioes = [
  { nome: 'Norte', color: '#FF6F61', provincias: [
    { nome: 'Cabo Delgado', capital: 'Pemba', distritos: ['Ancuabe', 'Balama', 'Chiúre', 'Ibo', 'Macomia', 'Mecúfi', 'Meluco', 'Metuge', 'Mocímboa da Praia', 'Montepuez', 'Mueda', 'Muidumbe', 'Namuno', 'Nangade', 'Palma', 'Pemba', 'Quissanga'] },
    { nome: 'Nampula', capital: 'Nampula', distritos: ['Angoche', 'Eráti', 'Ilha de Moçambique', 'Lalaua', 'Malema', 'Meconta', 'Mecubúri', 'Memba', 'Mogincual', 'Mogovolas', 'Moma', 'Monapo', 'Mossuril', 'Muecate', 'Murrupula', 'Nacala-a-Velha', 'Nacala Porto', 'Nacarôa', 'Nampula', 'Rapale', 'Ribáuè'] },
    { nome: 'Niassa', capital: 'Lichinga', distritos: ['Chimba', 'Lago', 'Lichinga', 'Majune', 'Mandimba', 'Marrupa', 'Mavago', 'Mecanhelas', 'Metarica', 'Muembe', 'N’gauma', 'Nipepe', 'Sanga', 'Cuamba', 'Maúa', 'Mecula'] },
  ]},
  { nome: 'Centro', color: '#4CAF50', provincias: [
    { nome: 'Manica', capital: 'Chimoio', distritos: ['Bárue', 'Chimoio', 'Gondola', 'Guro', 'Macate', 'Machaze', 'Macossa', 'Manica', 'Mossurize', 'Sussundenga', 'Tambara', 'Vanduzi'] },
    { nome: 'Sofala', capital: 'Beira', distritos: ['Búzi', 'Caia', 'Chemba', 'Cheringoma', 'Chibabava', 'Dondo', 'Gorongosa', 'Machanga', 'Marínguè', 'Marromeu', 'Muanza', 'Nhamatanda', 'Beira'] },
    { nome: 'Tete', capital: 'Tete', distritos: ['Angónia', 'Cahora-Bassa', 'Changara', 'Chifunde', 'Chiuta', 'Dôa', 'Macanga', 'Magoé', 'Marávia', 'Moatize', 'Mutarara', 'Tete', 'Tsangano', 'Zumbu'] },
    { nome: 'Zambézia', capital: 'Quelimane', distritos: ['Alto Molócue', 'Chinde', 'Gilé', 'Gurué', 'Ile', 'Inhassunge', 'Luabo', 'Maganja da Costa', 'Milange', 'Mocuba', 'Mopeia', 'Morrumbala', 'Namacurra', 'Namarroi', 'Nicoadala', 'Pebane', 'Quelimane'] },
  ]},
  { nome: 'Sul', color: '#2196F3', provincias: [
    { nome: 'Gaza', capital: 'Xai-Xai', distritos: ['Bilene', 'Chibuto', 'Chicualacuala', 'Chigubo', 'Chókwè', 'Guijá', 'Mabalane', 'Manjacaze', 'Massangena', 'Massingir', 'Xai-Xai'] },
    { nome: 'Inhambane', capital: 'Inhambane', distritos: ['Funhalouro', 'Govuro', 'Homoíne', 'Inhambane', 'Inharrime', 'Inhassoro', 'Jangamo', 'Mabote', 'Massinga', 'Maxixe', 'Morrumbene', 'Panda', 'Vilanculos', 'Zavala'] },
    { nome: 'Maputo (Província)', capital: 'Matola', distritos: ['Boane', 'Magude', 'Manhiça', 'Marracuene', 'Matola', 'Matutuíne', 'Moamba', 'Namaacha'] },
    { nome: 'Maputo (Cidade)', capital: 'Maputo', distritos: ['Maputo'] },
  ]},
];

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Moçambique</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Geografia</Text>
        <Text style={styles.sectionText}>
          Moçambique está localizado no sudeste da África, com uma costa de 2.700 km no Oceano Índico. Sua área total é de 801.590 km², com paisagens que variam de praias a montanhas como o Monte Binga (2.436 m).
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Demografia</Text>
        <Text style={styles.sectionText}>
          Com cerca de 32 milhões de habitantes (2023), Moçambique é um mosaico étnico com grupos como Makua, Tsonga e Sena. A densidade populacional é maior na costa e no sul.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Clima</Text>
        <Text style={styles.sectionText}>
          O clima tropical apresenta uma estação chuvosa (outubro-março) e uma seca (abril-setembro). Temperaturas variam de 20°C a 30°C, com o interior mais fresco.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Educação</Text>
        <Text style={styles.sectionText}>
          A educação é obrigatória até os 12 anos, mas o acesso ainda é um desafio rural. A taxa de alfabetização é de cerca de 60%, com esforços para expansão escolar.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Economia</Text>
        <Text style={styles.sectionText}>
          Baseada em agricultura (milho, mandioca), pesca e, mais recentemente, gás natural. O turismo cresce com destinos como Bazaruto e Quirimbas.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cultura</Text>
        <Text style={styles.sectionText}>
          Rica em música (marrabenta), dança (tufo) e culinária (matapa, piri-piri). A influência portuguesa é visível na língua e na arquitetura.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Regiões</Text>
        <View style={styles.regioesContainer}>
          {regioes.map((regiao) => (
            <TouchableOpacity
              key={regiao.nome}
              style={[styles.botaoRegiao, { backgroundColor: regiao.color }]}
              onPress={() => navigation.navigate('Region', { regiao })}
            >
              <Text style={styles.textoBotao}>{regiao.nome}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#FF6F61' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Moçambique' }} />
        <Stack.Screen name="Region" component={RegionScreen} options={({ route }) => ({ title: route.params.regiao.nome })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E1',
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#D81B60',
    textAlign: 'center',
    marginBottom: 25,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF9800',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
  regioesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  botaoRegiao: {
    width: '48%',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});