import React, { PureComponent } from 'react' 
import { StyleSheet, TouchableOpacity, Dimensions, Image, View, Text } from 'react-native'
import _ from 'lodash'
import data from './data.json'
import ArrowNext from '../ArrowNext.png'
import ArrowBack from '../ArrowBack.png'
import '../../index.css'

const win = Dimensions.get('window')


class Master extends PureComponent {
  render() {
    const img = "http://www.cityretreat.ru/static/media/8.737bc909.png"
    return (
      <View style={styles.container}>
        <Image source={img} style={{ position: 'absolute', left: '8%', bottom: 0, width: 500, height: 500 }} />
        <View style={{ position: 'absolute', top: '50%', right: '15%' }}>
          <Text style={{ fontFamily: 'Museo500', fontSize: 80, textAlign: 'right' }} >
             Hello world 
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})

export default Master
