import { StyleSheet, Text, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Detail(props) {

  const movie = props.navigation.getParam('movie', null)

  return (
    <View>
      <Text style={styles.detail}>{movie.title}</Text>
      <View style={styles.starContainer}>
        <FontAwesomeIcon style={movie.avg_rating > 0 ? styles.orange : styles.white} icon={faStar} />
        <FontAwesomeIcon style={movie.avg_rating > 1 ? styles.orange : styles.white} icon={faStar} />
        <FontAwesomeIcon style={movie.avg_rating > 2 ? styles.orange : styles.white} icon={faStar} />
        <FontAwesomeIcon style={movie.avg_rating > 3 ? styles.orange : styles.white} icon={faStar} />
        <FontAwesomeIcon style={movie.avg_rating > 4 ? styles.orange : styles.white} icon={faStar} />
        <Text style={styles.detail}>({movie.no_of_ratings})</Text>
      </View>
      <Text style={styles.detail}>{movie.description}</Text>
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
  starContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  white: {
    color: 'black',
  },
  orange: {
    color: 'orange',
  },
});
