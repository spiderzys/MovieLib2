/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, ScrollView, TabBarIOS,AppRegistry} from 'react-native';
import NewMovieTab from './Components/NewMovieTab'
import SearchTab from './Components/SearchTab'
import MovieDataCenter from './MovieDataCenter'

export default class MovieLib extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'new'
    };
  }

  render() {

    return(
      <TabBarIOS selectedTab={this.state.selectedTab}>
     
      <TabBarIOS.Item
        selected={this.state.selectedTab === "new"}
        onPress={() => { this.setState({ selectedTab: "new" }) }}
        title="new"
      >
      <NewMovieTab></NewMovieTab>
      </TabBarIOS.Item>
      <TabBarIOS.Item
        selected={this.state.selectedTab === "search"}
        onPress={() => { this.setState({ selectedTab: "search" }) 
                          new MovieDataCenter().getPlayingMovies()
        } }
        title='search'
      
      >
       <Text>"2"</Text>
      </TabBarIOS.Item>
      </TabBarIOS>
      /* 
            <View style={styles.container}>
              <ScrollView horizontal={true} style={{flex: 2, top:30}}>
                <Text style={{ fontSize: 20 }}>Scroll me plz</Text>
                <Text style={{ fontSize: 20 }}>Scroll me plz</Text>
                <Text style={{ fontSize: 20 }}>Scroll me plz</Text>
                <Text style={{ fontSize: 20 }}>Scroll me plz</Text>
              </ScrollView>
              <View style={{ flexDirection: 'row',height: 30 }}>
                <Text style={{ fontSize: 20, flex: 2 }}>put the movie name</Text>
                
              </View>
              <Text style={{ fontSize: 10, flex: 2 }}>Here we put story</Text>
              
      
      
            </View>
      
      
       */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },
});




AppRegistry.registerComponent('MovieLib', () => MovieLib);
