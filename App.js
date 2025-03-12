import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegionScreen from './RegionScreen';
import ProvinceScreen from './ProvinceScreen';

const Stack = createNativeStackNavigator();

const regioes = [
  { nome: 'Norte', color: '#FF6F61', culturas: 'Makua, Maconde', idiomas: 'Makua, Swahili, Português', provincias: [
    { nome: 'Cabo Delgado', capital: 'Pemba', resumo: 'Região rica em gás natural e conhecida pelas praias de Pemba.', distritos: ['Ancuabe', 'Balama', 'Chiúre', 'Ibo', 'Macomia', 'Mecúfi', 'Meluco', 'Metuge', 'Mocímboa da Praia', 'Montepuez', 'Mueda', 'Muidumbe', 'Namuno', 'Nangade', 'Palma', 'Pemba', 'Quissanga'] },
    { nome: 'Nampula', capital: 'Nampula', resumo: 'A província mais populosa, com forte influência cultural Makua.', distritos: ['Angoche', 'Eráti', 'Ilha de Moçambique', 'Lalaua', 'Malema', 'Meconta', 'Mecubúri', 'Memba', 'Mogincual', 'Mogovolas', 'Moma', 'Monapo', 'Mossuril', 'Muecate', 'Murrupula', 'Nacala-a-Velha', 'Nacala Porto', 'Nacarôa', 'Nampula', 'Rapale', 'Ribáuè'] },
    { nome: 'Niassa', capital: 'Lichinga', resumo: 'Região montanhosa com o Lago Niassa, menos densamente povoada.', distritos: ['Chimba', 'Lago', 'Lichinga', 'Majune', 'Mandimba', 'Marrupa', 'Mavago', 'Mecanhelas', 'Metarica', 'Muembe', 'N’gauma', 'Nipepe', 'Sanga', 'Cuamba', 'Maúa', 'Mecula'] },
  ]},
  { nome: 'Centro', color: '#4CAF50', culturas: 'Sena, Ndau', idiomas: 'Sena, Ndau, Português', provincias: [
    { nome: 'Manica', capital: 'Chimoio', resumo: 'Região agrícola e montanhosa, próxima ao Zimbábue.', distritos: ['Bárue', 'Chimoio', 'Gondola', 'Guro', 'Macate', 'Machaze', 'Macossa', 'Manica', 'Mossurize', 'Sussundenga', 'Tambara', 'Vanduzi'] },
    { nome: 'Sofala', capital: 'Beira', resumo: 'Porto importante e lar do Parque Nacional da Gorongosa.', distritos: ['Búzi', 'Caia', 'Chemba', 'Cheringoma', 'Chibabava', 'Dondo', 'Gorongosa', 'Machanga', 'Marínguè', 'Marromeu', 'Muanza', 'Nhamatanda', 'Beira'] },
    { nome: 'Tete', capital: 'Tete', resumo: 'Conhecida pela barragem de Cahora Bassa e mineração de carvão.', distritos: ['Angónia', 'Cahora-Bassa', 'Changara', 'Chifunde', 'Chiuta', 'Dôa', 'Macanga', 'Magoé', 'Marávia', 'Moatize', 'Mutarara', 'Tete', 'Tsangano', 'Zumbu'] },
    { nome: 'Zambézia', capital: 'Quelimane', resumo: 'Grande produtora de chá e coco, com rios abundantes.', distritos: ['Alto Molócue', 'Chinde', 'Gilé', 'Gurué', 'Ile', 'Inhassunge', 'Luabo', 'Maganja da Costa', 'Milange', 'Mocuba', 'Mopeia', 'Morrumbala', 'Namacurra', 'Namarroi', 'Nicoadala', 'Pebane', 'Quelimane'] },
  ]},
  { nome: 'Sul', color: '#2196F3', culturas: 'Tsonga, Changana', idiomas: 'Tsonga, Português', provincias: [
    { nome: 'Gaza', capital: 'Xai-Xai', resumo: 'Região de planícies e turismo costeiro em Xai-Xai.', distritos: ['Bilene', 'Chibuto', 'Chicualacuala', 'Chigubo', 'Chókwè', 'Guijá', 'Mabalane', 'Manjacaze', 'Massangena', 'Massingir', 'Xai-Xai'] },
    { nome: 'Inhambane', capital: 'Inhambane', resumo: 'Famosa pelas praias e pelo Arquipélago de Bazaruto.', distritos: ['Funhalouro', 'Govuro', 'Homoíne', 'Inhambane', 'Inharrime', 'Inhassoro', 'Jangamo', 'Mabote', 'Massinga', 'Maxixe', 'Morrumbene', 'Panda', 'Vilanculos', 'Zavala'] },
    { nome: 'Maputo (Província)', capital: 'Matola', resumo: 'Área industrial próxima à capital nacional.', distritos: ['Boane', 'Magude', 'Manhiça', 'Marracuene', 'Matola', 'Matutuíne', 'Moamba', 'Namaacha'] },
    { nome: 'Maputo (Cidade)', capital: 'Maputo', resumo: 'Capital do país, centro político e econômico.', distritos: ['Maputo'] },
  ]},
];

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Moçambique</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Geografia</Text>
        <Text style={styles.sectionText}>Moçambique, no sudeste da África, tem 801.590 km² e 2.700 km de costa no Oceano Índico, com montanhas como o Monte Binga (2.436 m).</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Demografia</Text>
        <Text style={styles.sectionText}>Cerca de 32 milhões de habitantes (2023), com grupos étnicos como Makua, Tsonga e Sena, concentrados na costa e sul.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Clima</Text>
        <Text style={styles.sectionText}>Tropical, com estação chuvosa (outubro-março) e seca (abril-setembro). Temperaturas entre 20°C e 30°C.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Educação</Text>
        <Text style={styles.sectionText}>Obrigatória até os 12 anos, com taxa de alfabetização de 60%. Desafios persistem nas áreas rurais.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>História</Text>
        <Text style={styles.sectionText}>Colonizado por Portugal no século XVI, tornou-se independente em 1975 após a luta liderada pela FRELIMO.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hidrografia</Text>
        <Text style={styles.sectionText}>Rios como o Zambeze e o Limpopo, além do Lago Niassa, são vitais para a agricultura e energia (ex.: Cahora Bassa).</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Biodiversidade</Text>
        <Text style={styles.sectionText}>Rica em fauna e flora, com parques como Gorongosa e reservas como Niassa, abrigando elefantes, leões e mais.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Turismo</Text>
        <Text style={styles.sectionText}>Destinos como Bazaruto, Quirimbas e Ilha de Moçambique atraem por praias e história.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Economia</Text>
        <Text style={styles.sectionText}>Baseada em agricultura, pesca e gás natural. O turismo e a mineração também crescem.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cultura</Text>
        <Text style={styles.sectionText}>Música (marrabenta), dança (tufo) e culinária (matapa, piri-piri) refletem a herança africana e portuguesa.</Text>
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
        <Stack.Screen name="Province" component={ProvinceScreen} options={({ route }) => ({ title: route.params.provincia.nome })} />
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