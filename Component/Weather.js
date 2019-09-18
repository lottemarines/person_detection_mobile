import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import DayComonent from '../Modules/DayComponent.js';

export default class Weather extends Component<Props> {
  render() {
    const information = this.props.information

    function InformationExit() {
      if (information.length != 0) {
        return(
          <View style={styles.weather}>
            <Text style={styles.weatherTitle}>{information[0].name}さんは</Text>
			<Text style={styles.weatherTitle}>直近、
				{information[0].created_at}頃、
				{information[0].place}にいました</Text>
            <View style={styles.dayWeather}>
              
            </View>
          </View>
        )
      } else {
        return(
          <View></View>
        )
      }
    }


    return (
      <InformationExit />
    );
  }
}

const styles = StyleSheet.create({
  weather: {
    backgroundColor: '#fff',
    paddingTop: 10,
    borderRadius: 10,
    marginBottom: 10
  },
  weatherTitle: {
    fontSize: 18,
    textAlign: 'center'
  },
  dayWeather: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});