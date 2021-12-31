import { StyleSheet, Text, View} from 'react-native';

export default function Detail() {

  return (
    <View>
      <Text style={styles.detail}>Detail</Text>
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
