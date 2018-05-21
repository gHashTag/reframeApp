import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import '../../index.css'

class Contacts extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ position: 'absolute', top: '50%', right: '15%' }}>
          <Text style={{ fontSize: 80, textAlign: 'right' }} >
            Contacts
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
  }
})

export default Contacts
