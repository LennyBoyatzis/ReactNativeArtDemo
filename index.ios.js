/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import VectorWidget from './components/VectorWidget'

class ReactArtDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <VectorWidget style={styles.vector} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  vector: {
    width: 100,
    height: 100
  }
});

AppRegistry.registerComponent('ReactArtDemo', () => ReactArtDemo);
