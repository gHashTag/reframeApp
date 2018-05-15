import React, { PureComponent } from 'react' 
import { TouchableOpacity, Dimensions, Image, View, Text } from 'react-native'
import _ from 'lodash'
import data from './data.json'
import './styles.css'
import { Header } from '../common'
import ArrowNext from '../ArrowNext.png'
import ArrowBack from '../ArrowBack.png'

const win = Dimensions.get('window')

export default class Master extends PureComponent {
  onPressNext = match => {
    return () => {
      const now = _.find(data, { name: match.params.name })
      const { history } = this.props
      if (data.length !== now.id + 1) {
        const next = _.find(data, { id: now.id + 1 })
        history.push(`/masters/master/${next.name}`)
      } else {
        history.push(`/masters/master/${data[0].name}`)
      }
    }
  }

  onPressBack = match => {
    return () => {
      const now = _.find(data, { name: match.params.name })
      const { history } = this.props
      if (now.id !== 0) {
        const back = _.find(data, { id: now.id - 1 })
        history.push(`/masters/master/${back.name}`)
      } else {
        const lengthdata = _.find(data, { id: data.length - 1 })
        history.push(`/masters/master/${lengthdata.name}`)
      }
    }
  }

  render() {
    const { match } = this.props
    const store = _.find(data, { name: match.params.name })
    const { img, title, subTitle, info } = store

    return (
      <View>
        <Image source={img} style={{ position: 'absolute', left: '8%', bottom: 0, width: 500, height: 500 }} />
        <View style={{ position: 'absolute', top: '30.9%', right: '15%', width: '40%' }}>
          <View className='stripe pink' />
        </View>
        <View style={{ position: 'absolute', top: '25%', right: '15%' }}>
          <Text style={{ fontFamily: 'Museo500', fontSize: 40, textAlign: 'right' }} >
            {title} 
          </Text>
        </View>

        <View style={{ position: 'absolute', top: '32%', right: '15%' }} >
          <Text style={{ fontFamily: 'CirceExtraLight', fontSize: 22, textAlign: 'right' }}>
            {subTitle} 
          </Text>
        </View>
        <View style={{ position: 'absolute', width: '40%', top: '38%', right: '15%' }} >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{ color: '#707070', fontFamily: 'CirceExtraLight', fontSize: 17, lineHeight: 20 }}>
              <Text style={{ color: '#000', fontFamily: 'Museo500', fontSize: 40, lineHeight: 1, bottom: 0 }}>
                {info.charAt(0)}
              </Text>
              {info.substring(1)}
            </Text>
          </View>
        </View>
        <View style={{ position: 'absolute', width: '7%', top: '43%', right: '5%' }} >
          <TouchableOpacity onPress={this.onPressNext(match)}>
            <Image
              style={{ height: 100, width: 100 }}
              source={ArrowNext}
            />
          </TouchableOpacity>
        </View>
        <View style={{ position: 'absolute', width: '7%', top: '43%', left: '5%' }} > 
          { parseInt(match.params.id, 10) !== 0 &&
            <TouchableOpacity onPress={this.onPressBack(match)}>
              <Image
                style={{ height: 100, width: 100 }}
                source={ArrowBack}
              />
            </TouchableOpacity>
          }
        </View>
      </View>
    )
  }
}
