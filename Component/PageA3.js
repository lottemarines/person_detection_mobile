import React from 'react';
import {
    View,
    Text,
	Image,
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
        alignItems: 'center',
    },
    linkText: {
        fontSize: 32,
        color: 'rgb(95, 177, 237)',
    },
});

const PageA = () => (
    <View style={styles.container}>
        <TouchableOpacity onPress={Actions.pageB}>
            <Text style={styles.linkText}>Link</Text>
			<Text>これはURL画像です。</Text>
			<Image
  source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
  style = {{ width: 150, height: 150 }}
/>
        </TouchableOpacity>
    </View>
);
export default PageA;