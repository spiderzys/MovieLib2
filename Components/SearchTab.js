import React from 'react'
import { Text, View, StyleSheet, Image, AppRegistry } from 'react-native'

export default class SearchTab extends React.Component {
  constructor(props){
    super(props)
    this.state = {show:0}
    setInterval ( ()=>{
      this.setState(previousState2=> {
        return {show: (previousState2.show + 1)%2}
      })
    },1000)
  }


  render() {

    let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
    var text = "!!!!5555"
    if (this.state.show == 0) {
      text = "????"
    }



    return (


      <View style = {s.styleB}>
      <Text style = {s.styleA}>{text}</Text>
      <Image source = {pic} style = {s.styleC}></Image>
      </View>
    );
  }
}


const s = StyleSheet.create({
     styleA: {
       color: 'red'
     },
     styleB: {
       backgroundColor: "green",
       width: 200,
       height: 200
     },
     styleC: {
       width: 200,
       height: 100
     }
});

AppRegistry.registerComponent('SearchTab', () => SearchTab);
