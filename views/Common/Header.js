import React, { PureComponent } from 'react'
//import { img, TouchableOpacity, Text, StyleSheet, div } from 'react-native' // eslint-disable-line
import Responsive from 'react-responsive'
import Mansion from './Mansion.svg'

const Desktop = props => <Responsive {...props} minWidth={992} />
const Tablet = props => <Responsive {...props} minWidth={415} maxWidth={991} />
const Mobile6 = props => <Responsive {...props} minWidth={321} maxWidth={414} />
const Mobile5 = props => <Responsive {...props} maxWidth={320} />

class Header extends PureComponent {
  render() {
    const { title } = this.props
    const { container, h1 } = styles 
    return (
      <React.Fragment>
        <Desktop>
          <div style={container}>
            <img src={Mansion} style={{ width: 328, height: 70 }} />
          </div>
          {this.props.children}
        </Desktop>

        <Tablet>
          <div style={container}>
            <img src={Mansion} style={{ width: 328, height: 70 }} />
          </div>
          {this.props.children}
        </Tablet>

        <Mobile6>
          <div style={[container, { height: 60 }]}>
            <Text style={[h1, { paddingTop: 0, fontSize: 21 }]}>
              {title}
            </Text>
          </div>
          {this.props.children}
        </Mobile6>

        <Mobile5>
          <div style={[container, { height: 60 }]}>
            <Text style={[h1, { paddingTop: 0, fontSize: 18 }]}>
              {title}
            </Text>
          </div>
          {this.props.children}
        </Mobile5>
      </React.Fragment>
    )
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: '100%',
    borderBottomWidth: 0,
    shadowColor: '#9B9B9B',
    shadowOffset: { width: 0, height: 2.5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'fixed',
    zIndex: 4
  },
  h1: {
    flex: 1,
    color: '#4B4B4B',
    fontFamily: 'CirceLight',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '100',
    textAlign: 'center'
  }
}

export { Header }
