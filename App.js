import React, { Component } from 'react';

import { Picker, StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import Header from './Component/Header.js';
import Weather from './Component/Weather.js';
type Props = {};

//API宣言
//HTTPクライアント読み込み（下準備）
import axios from 'axios';
//BaseURL読み込み
const baseRequest = axios.create({
  baseURL: 'http://172.16.1.86:8000/person_list/',
  responseType: 'json',
})

export default class App extends Component<Props> {

  state = {
    information: [],
  }

  onEndEditing(text) {
    baseRequest
      .get('', {params: {name: text ,created_at__gte: ''} })
      .then( res => {
        this.setState({information: res.data})
		console.log(res.data);
      })
      .catch( error => {
        console.log(error.response);
      });
    this.setState({inputText: text})
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <Header />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="名前を入力"
            style={styles.textInput}
            onEndEditing={ e => this.onEndEditing(e.nativeEvent.text)}
          />
        </View>
		<Picker
		  style={[styles.picker]} itemStyle={styles.pickerItem}
			//初期値の設定　selectedValue={3}とやったらそこが選ばれる
		  selectedValue={''}
		  onValueChange={(itemValue) => this.setState({job: itemValue})}
			onValueChange={ (itemValue) => this.onEndEditing(itemValue)}
		>
			<Picker.Item label="誰か選択してください" value={''} />
		  <Picker.Item label="村瀬（システム）" value={'Murase_Yu'} />
		  <Picker.Item label="大塚（システム）" value={'Otuka_Hiroki'} />
		  <Picker.Item label="梅澤（運用）" value={'Umezawa_Shun'} />
		</Picker>
        <View style={styles.weatherContainer}>
          <Weather information={this.state.information}/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'gray'
  },
  inputContainer: {
  	padding: 10,
  	paddingBottom: 5,
  	backgroundColor: '#f1f2f6'
},
textInput: {
  height: 40,
  padding: 10,
  borderRadius: 10,
  backgroundColor: '#fff',
  borderColor: '#fff',
  borderWidth: 1
},
weatherContainer: {
  backgroundColor: '#f1f2f6',
  padding: 10,
  paddingBottom: 0
}
});
