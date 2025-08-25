import { SafeAreaView, Text, View, StyleSheet, StatusBar, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>

        <View style={styles.header}>
          <Image
            source={require('./assets/avatar.png')}
            style={styles.avatar}
          />
          <Text style={styles.author}>Victor Vidigal Ribeiro</Text>
        </View>
        <Text style={styles.content}>
          Este é o meu primeiro post.
          Vou aprender sobre View, Text e SytleSheet.
        </Text>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  container: {
    margin: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8
  },
  content: {
    fontSize: 16,
    color: '#555555',
  },
  avatar: {
    width: 100,
    height: 100
  }
});