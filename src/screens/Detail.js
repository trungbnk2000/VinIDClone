import React, { useRef } from "react";
import { FlatList, Image, Text, View, StyleSheet, Button, Dimensions, Animated, Pressable, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../colors/colors";
import {useNavigation, useRoute} from '@react-navigation/native';
import {Icon} from 'react-native-elements';

const hotDealData = [
    {title: 'Giảm 40% khi đặt beFood', img: require('../images/beFood.png'), company: 'Be', discount: '5'},
    {title: 'Giảm tới 20% cho 02 chuyến beBike', img: require('../images/beBike.png'), company: 'Be', discount: '5'},
    {title: 'Giảm 50% Dịch vụ giao hàng xe máy', img: require('../images/ahamove.png'), company: 'Ahamove', discount: '5'},
    {title: 'Giảm 100,000đ khi mua trà sữa online', img: require('../images/milkTea.png'), company: '1000Miu', discount: 'Miễn phí'},
    {title: 'Tiết kiệm 300,000đ đi chợ Online', img: require('../images/vinIdGiaSoc.png'), company: 'VinID Giá Sốc', discount: 'Miễn phí'},
    {title: 'Giảm 50,000đ Món Thái đặc sắc', img: require('../images/kohYam.png'), company: 'Bếp Thái Koh Yam', discount: '5'},
    {title: 'Giảm 100,000đ Thời trang mua sắm online' ,img :require('../images/rabity.png'), company: 'Rabity', discount: '5'},
]

const _renderItem = ({item, index}) => {
    return (
        <Pressable onPress={() => navigation.navigate('DetailScreen', item)}>
            <View style={style.itemCard} >
                <Image source={item.img} style={style.itemImage} />
                <View style={{marginHorizontal: 5, marginVertical: 5}}>
                    <Text style={{color: COLORS.dark, fontSize: 13, paddingHorizontal: 7, paddingTop:5}}>
                        {item.title}
                    </Text>
                    <Text style={{paddingHorizontal: 7, fontSize: 12, paddingTop: 15}}>
                        {item.company}
                    </Text>
                    <Text style={{color: COLORS.blue, fontSize: 13, paddingHorizontal: 7, paddingTop: 0}}>
                    <Icon name="account-balance-wallet" size={12} style={{paddingHorizontal: 0, paddingTop: 2, paddingEnd: 5}} />
                    {item.discount}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
};

const DetailScreen = () => {
    const scrollA = useRef(new Animated.Value(0)).current;
    {
    /*
    const route = useRoute();
    const {item} = route.params ?? {};
    const navigation = useNavigation();
    */
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.light}}>
            <Animated.ScrollView    
                scrollEventThrottle={16}
            >
                <View style={style.titleContainer}>
                    <Animated.Image style={style.image(scrollA)}
                    source = {require('../images/beBike.png')} 
                    />
                    <View style={{flex:1, marginHorizontal: 10, marginVertical: 10}}>
                        <Text style={{color: COLORS.blue, fontSize: 15}}>
                        <Icon name="account-balance-wallet" size={15} style={{paddingHorizontal: 0, paddingTop: 2, paddingEnd: 5}} />    
                        5
                        </Text>
                        <Text numberOfLines={2} ellipsizeMode='tail' style={{color: COLORS.dark, fontSize: 17, fontWeight: '400'}}>
                            Giảm 40% Đồ ăn ngon beFood giao tận nơi
                        </Text>
                        <View style = {style.lineStyle} />
                        <View>
                            <Text style={{fontSize: 12}}>Ưu đãi đến 31/08/2022</Text>
                        </View>
                    </View>
                </View>
                <View style={style.detailContainer}>
                    <View style={{marginVertical: 8, marginHorizontal: 10,}}>
                        <Text style={{color:COLORS.dark, fontWeight: '500', fontSize: 14}}>
                            Thông tin voucher
                        </Text>
                        <Text style={{marginHorizontal: 5, marginVertical: 8, color:COLORS.dark}}>
                            Giảm 40% (tối đa 60,000đ) áp dụng cho đơn từ 49,000đ khi đặt be Food
                        </Text>
                    </View>
                    <View style={{marginVertical: 8, marginHorizontal: 10,}}>
                        <Text style={{color:COLORS.dark, fontWeight: '500', fontSize: 14}}>
                            Điều kiện sử dụng
                        </Text>
                        <Text style={{marginHorizontal: 5, marginVertical: 8, color:COLORS.dark}}>
                            - Voucher có hiệu lực đến 31/08/2022
                        </Text>
                    </View>
                    <View style={{marginVertical: 8, marginHorizontal: 10,}}>
                        <Text style={{color:COLORS.dark, fontWeight: '500', fontSize: 14}}>
                            Cách dùng
                        </Text>
                        <Text style={{marginHorizontal: 5, marginVertical: 8, color:COLORS.dark}}>
                            Giảm 40% (tối đa 60,000đ) áp dụng cho đơn từ 49,000đ khi đặt be Food
                        </Text>
                    </View>
                </View>
                <View style={style.companyContainer}>
                    <Pressable style={{marginVertical: 10, marginHorizontal: 13, flexDirection: 'row'}}>
                        <Image source={require('../images/beLogo.png')} style={{height: 40, width: 40, marginTop: 2}} />
                        <View style={{marginHorizontal: 10}}>
                            <Text style={{fontSize: 13}}>
                                Cung cấp bởi
                            </Text>
                            <Text style={{marginTop: 4,color: COLORS.dark}}>
                                CÔNG TY CỔ PHẦN BE GROUP
                            </Text>
                        </View>
                        <Icon
                            name='chevron-forward-outline'
                            type='ionicon'
                            color='#517fa4'
                            containerStyle={{marginVertical: 8, marginHorizontal: 80}}
                        />
                    </Pressable>
                    <View style = {{
                        borderWidth: 0.4,
                        backgroundColor: '#add8e6',
                        borderColor: '#add8e6',
                        marginVertical: 10,
                        marginHorizontal: 15}} />
                    <View style={{marginVertical:0, marginHorizontal: 15, flexDirection: 'row'}}>
                        <View>
                            <Text style={{fontSize: 12}}>Bấm theo dõi để nhận thông tin ưu đãi hấp dẫn</Text>
                            <Text style={{fontSize: 12}}>từ thương hiệu này bạn nhé.</Text>
                        </View>
                        <Text style={{color: COLORS.blue, marginVertical: 7, marginHorizontal:50, fontWeight: '500'}}>
                            Theo dõi
                        </Text>
                    </View>
                </View>
                <View style={style.otherVoucherContainer}>
                    <View style={{flexDirection:'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 7}}>
                        <Text style = {{color: COLORS.dark, fontWeight : 'normal', fontSize: 18}}>
                            Có thể bạn quan tâm
                        </Text>
                        <Text style ={{color: COLORS.blue, fontSize: 15, fontWeight: 'normal', paddingTop: 2}}>
                            Xem tất cả
                        </Text>
                    </View>
                    <FlatList 
                        data={hotDealData} 
                        horizontal 
                        contentContainerStyle={{
                            marginHorizontal: 5,
                        }}
                        renderItem={_renderItem}
                        />
                </View>
            </Animated.ScrollView>
            <View style={style.buttonContainer}>
                <TouchableOpacity style={style.button}>
                    <Text style={{color: COLORS.white, fontSize: 16, fontWeight: '400'}}>
                        Nhận ngay
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    titleContainer: {
        backgroundColor: COLORS.white,
        height: 300,
        overflow: 'hidden',
    },

    detailContainer: {
        backgroundColor: COLORS.white,
        height: 250,
        marginTop: 8,
    },

    companyContainer: {
        backgroundColor: COLORS.white,
        height: 125,
        marginTop: 8,
    },

    otherVoucherContainer: {
        backgroundColor: COLORS.white,
        height: 300,
        marginVertical: 8
    },

    buttonContainer: {
        backgroundColor: COLORS.white,
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 15,
        shadowOpacity: 1.0
    },

    button: {
        backgroundColor: COLORS.blue,
        height: 35,
        width: '95%',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },

    image: scrollA => ({
        height: 200,
        width: '100%'
      }),
    
    lineStyle:{
        borderWidth: 0.4,
        backgroundColor: '#add8e6',
        borderColor: '#add8e6',
        marginVertical: 10,
   },

    itemCard: {
        height: 200,
        backgroundColor: COLORS.white,
        width: 170,
        marginHorizontal: 5,
        borderRadius: 5,
        marginBottom: 20,
        elevation: 12,
    },

    itemImage: {
        flex: 1,
        width: '100%',
        height: 120,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        resizeMode: 'cover',
        
    },
    
});

export default DetailScreen;