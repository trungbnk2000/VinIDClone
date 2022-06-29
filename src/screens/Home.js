import React from "react";
import { StatusBar, Image, StyleSheet, Text, View, Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../colors/colors'
import Images from '../images/Images'

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.white}}>
            <StatusBar translucent backgroundColor={COLORS.tranparent} />
            <Image
                source = {require('../images/onboarding1.png')}
                style = {style.image}
            />
            <View style = {style.indicatiorContainer}>
                <View style={style.indicator} />
                <View style={style.indicator} />
                <View style={[style.indicator, style.indicatorActive]} />
            </View>
            <View style={{paddingHorizontal: 20, paddingTop: 20}}>
                <View>
                    <Text style={style.title}>VinID</Text>
                    <Text style={style.title}>Voucher</Text>
                </View>
                <View style={{marginTop:10}}>
                    <Text>Nhanh tay</Text>
                    <Text>Rinh voucher cực hot</Text>
                </View>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 40}}>
                <Pressable onPress={() => navigation.navigate('MainScreen')}>
                    <View style={style.btn}>
                        <Text style={{color: COLORS.white}}>Bắt đầu</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    image : {
        height : 420,
        width: '100%',
        borderBottomLeftRadius: 100,
    },

    indicatiorContainer : {
        height : 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    indicator: {
        height: 3,
        width: 30,
        backgroundColor: COLORS.grey,
        marginHorizontal: 5,
        borderRadius: 5,
    },

    indicatorActive: {
        backgroundColor: COLORS.dark,

    },
    
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.dark,
    },

    btn: {
        height: 60,
        marginHorizontal: 20, 
        backgroundColor: COLORS.grey,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default HomeScreen;