import { StyleSheet, Text, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Detail(props) {

  const movie = props.navigation.getParam('movie', null)

  return (
    <View style={styles.container}>
      <View style={styles.starContainer}>
        <FontAwesomeIcon style={movie.avg_rating > 0 ? styles.orange : styles.white} icon={faStar} />
        <FontAwesomeIcon style={movie.avg_rating > 1 ? styles.orange : styles.white} icon={faStar} />
        <FontAwesomeIcon style={movie.avg_rating > 2 ? styles.orange : styles.white} icon={faStar} />
        <FontAwesomeIcon style={movie.avg_rating > 3 ? styles.orange : styles.white} icon={faStar} />
        <FontAwesomeIcon style={movie.avg_rating > 4 ? styles.orange : styles.white} icon={faStar} />
        <Text style={styles.white}>({movie.no_of_ratings})</Text>
      </View>
      <Text style={styles.description}>{movie.description}</Text>
    </View>
  );
}

Detail.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam('title'),
  headerStyle: {
    backgroundColor: 'orange'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24
  }
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282C35',
    flex: 1,
    padding: 10,
  },
  description: {
    fontSize: 20,
    color: 'white',
    padding: 10
  },
  starContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  white: {
    color: 'white',
  },
  orange: {
    color: 'orange',
  },
});
