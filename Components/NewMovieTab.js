import React from 'react';
import { StyleSheet, Text, View, ScrollView, AppRegistry } from 'react-native';
import Constants from '../Constants'

export default class NewMovieTab extends React.Component {

    constructor(props) {
        super(props)

    }
    render() {
        
        return (
            <View style={styles.container}>
                <ScrollView horizontal={true} style={{ flex: 2, top: 30 }}>
                    <Text style={{ fontSize: 20 }}>Scroll me plz</Text>
                    <Text style={{ fontSize: 20 }}>{Constants.Url.playingMovie} + {Constants.apikey}</Text>
                </ScrollView>
                <View style={{ flexDirection: 'row', height: 30 }}>
                    <Text style={{ fontSize: 20, flex: 2 }}>put the movie name</Text>

                </View>
                <Text style={{ fontSize: 10, flex: 2 }}>Here we put story</Text>

            </View>


        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },
});

AppRegistry.registerComponent('NewMovieTab', () => NewMovieTab);