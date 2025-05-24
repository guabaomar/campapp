import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'




export class landing extends Component {
  render() {
    return (
      <View>
      
       <Image
          source={require('../assets/images/login.png')}
          style={{ width: '100%', height: '80%' }}
        />

        <View>

          <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 20 }}>

            Welcome to CampusApp  


          </Text>
          




        </View>

       



      </View>
    )
  }
}

export default landing

