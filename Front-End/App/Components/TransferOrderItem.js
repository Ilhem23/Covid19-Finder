import React from 'react'
import { View, TouchableOpacity, Dimensions } from 'react-native'
import { Text, Icon } from 'native-base'
import { Circle, Rect } from 'react-native-svg'
import styles from './Styles/TransferItemStyles'
import { ContentLoader } from './'

const TransferOrderItem = ({ item }) => {
  // status  ['traitement', 'valide' ,'rejete'] //bad
  if (!item) return <TransferOrderLoaderItem />
  const [date/*, time*/] = item.created_at ? item.created_at.split(' ') : ['traitement']
  const type = item.reason === 'out'
  const color = type ? "#e74c3c" : "#218c74"
  const icon = type ? 'arrow-down' : 'arrow-up'

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.target}>{item.reason}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.rightContainer}>

        <Icon style={[styles.icon, { color }]} name={icon} />
      </View>
    </TouchableOpacity>
  )
}

const TransferOrderLoaderItem = () => {
  const { width } = Dimensions.get('window')

  return (
    <View style={[styles.container, styles.loaderContainer]}>
      <ContentLoader
        primaryColor="#95a5a6"
        secondaryColor="#7f8c8d"
        height={50}
        width={width - 20}
        duration={1000}>
        <Rect x="7" y="15" rx="4" ry="4" width="100" height="10" />
        <Rect x={width - 150} y="20" rx="4" ry="4" width="100" height="12" />
        <Circle cx={width - 35} cy="25" r="10" />
        <Rect x="7" y="32" rx="4" ry="4" width="50" height="8" />
      </ContentLoader>
    </View>
  )
}
export { TransferOrderItem, TransferOrderLoaderItem }