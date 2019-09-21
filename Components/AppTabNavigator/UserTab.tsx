import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Container, Header, Content, Thumbnail, Text } from 'native-base';

export default class UserTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-person' style={{ color: tintColor }} />
        )
    }
    render() {
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        return (
                <View style={style.container}>
                    <View style={style.headertextView}>
                        <Text style={style.headerText}>
                            어떤 뮤지션을 좋아하세요?
                        </Text>
                        <Text style={style.subheaderText}>
                            원하는 뮤지션을 즐겨찾기하세요.
                        </Text>
                    </View>
                    <View style={style.content3x3} >
                        <View style={style.context1x3}>
                            <Thumbnail 
                            style = {style.celebThumb}
                            square large source={{ uri: uri }} />
                            <Text>
                                Red Velvet
                            </Text>
                        </View>
                        <View style={style.context1x3}>
                            <Thumbnail 
                            style = {style.celebThumb}
                            square large source={{ uri: uri }} />
                            <Text>
                                BTS
                            </Text>
                        </View>
                        <View style={style.context1x3}>
                            <Thumbnail 
                            style = {style.celebThumb}
                            square large source={{ uri: uri }} />
                            <Text>
                                IZ*ONE
                            </Text>
                        </View>
                    </View>
                </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    celebThumb: {
        borderRadius: 25,
        margin : 10,
    },
    content3x3: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize:27,
        margin:15,
        marginBottom:20
    },
    subheaderText: {
        fontSize:20,
        color: 'grey',
        marginBottom: 20
    },
    headertextView: {
        alignItems: 'center',
        margin: 10,
        marginTop: 20
    },
    context1x3: {
        flexDirection:'column',
        alignItems: 'center',
    }
});