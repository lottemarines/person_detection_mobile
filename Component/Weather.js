import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import DayComonent from '../Modules/DayComponent.js';

export default class Weather extends Component<Props> {
  render() {
    const information = this.props.information
    function InformationExit() {
      if (information.length != 0) {
		  const last_info = information[information.length - 1]
		  const month = last_info.created_at.slice(5,7)
		  const day = last_info.created_at.slice(8,10)
		  const time = last_info.created_at.slice(11,16)
        return(
          <View style={styles.weather}>
            <Text style={styles.weatherTitle}>{last_info.name}さんは</Text>
			<Text style={styles.weatherTitle}>直近{month}月{day}日{time}頃</Text>
				<Text style={styles.weatherTitle}>{last_info.place}にいました</Text>
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