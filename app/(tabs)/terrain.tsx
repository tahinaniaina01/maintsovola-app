import { Stack } from 'expo-router';
import { StyleSheet, View ,Text, TouchableOpacity} from 'react-native';

import { ScreenContent } from '@/components/ScreenContent';
import { Plus } from 'lucide-react-native';

export default function Home() {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Gestion des terrains</Text>
      <TouchableOpacity style={styles.button}>
        <Plus size={16} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.buttonText}>Nouveau terrain</Text>
      </TouchableOpacity>
    </View>
    <View>
        <Text style={styles.text}>Terrains en attente de validation</Text>
    </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#65a30d',
    textAlign: 'left',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#65a30d',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
  text :{
    
  },

});
