import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Home/Header'
import GoogleMapView from '../Components/Home/GoogleMapView'

const Home = () => {
  return (
    <View style={{padding:20,paddingTop:30,backgroundColor:'#fff',flex:1}}>
      <Header />
      <GoogleMapView />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})