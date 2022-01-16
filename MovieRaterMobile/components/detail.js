import { StyleSheet, Text, View} from 'react-native';

export default function Detail(props) {

  const movie = props.navigation.getParam('movie', null)

  return (
    <View>
      <Text style={styles.detail}>Detail about {movie.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detail: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
