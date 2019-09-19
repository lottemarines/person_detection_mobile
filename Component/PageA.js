import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {
    Actions,
} from 'react-native-router-flux';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linkText: {
        fontSize: 32,
        color: 'rgb(95, 177, 237)',
    },
	text: {
		fontSize: 48
	}
});

const PageA = () => (
    <View style={styles.container}>
        <TouchableOpacity onPress={Actions.pageB}>
            <Text style={styles.linkText}>Link</Text>
        </TouchableOpacity>
		      <SafeAreaView style={styles.safeAreaView}>
        <Header />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="時刻を入力"
            style={styles.textInput}
            onEndEditing={ e => this.onEndEditing(e.nativeEvent.text)}
          />
        </View>
		<Picker style={styles.inputContainer}
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
    </View>
);
export default PageA;