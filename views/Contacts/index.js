import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import '../../index.css'

class Contacts extends PureComponent {
  render() {
    const img = "http://www.cityretreat.ru/static/media/8.737bc909.png"
    return (
      <View style={styles.container}>
        <View style={{ position: 'absolute', top: '50%', right: '15%' }}>
          <Text style={{ fontFamily: 'Museo500', fontSize: 80, textAlign: 'right' }} >
            Hello!!!!
          </Text>
        </View>
         <Image source={img} style={{ position: 'absolute', left: '8%', bottom: 0, width: 500, height: 500 }} />
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

export default Contacts
