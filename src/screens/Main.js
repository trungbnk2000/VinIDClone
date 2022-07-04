import React, { useEffect, useState, useRef } from "react";
import { ImageBackground, StatusBar, FlatList, View , StyleSheet, Text, Image, ScrollView, TextInput, Dimensions, Pressable} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../colors/colors";
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import {Icon} from 'react-native-elements'
const {width} = Dimensions.get('window');

const menuData = [
    {title: 'Làm đẹp', img: require('../images/beauty_2.png')},
    {title: 'Thời trang', img: require('../images/fashion.png')},
    {title: 'Vé xem phim 0đ', img: require('../images/movie-ticket.png')},
    {title: 'Cà phê trà sữa', img: require('../images/boba.png')},
    {title: 'Nhà hàng quán ăn', img: require('../images/restaurant.png')},
    {title: 'Dịch vụ khác', img: require('../images/other-services.png')},
]

const carouselData = [
    {title: 'Khuyến mãi 1', img: require('../images/khuyen_mai_1.png')},
    {title: 'Khuyến mãi 2', img: require('../images/khuyen_mai_2.png')},
    {title: 'Khuyến mãi 3', img: require('../images/khuyen_mai_3.png')},
]

const hotDealData = [
    {title: 'Giảm 40% khi đặt beFood', img: require('../images/beFood.png'), company: 'Be', discount: '5'},
    {title: 'Giảm tới 20% cho 02 chuyến beBike', img: require('../images/beBike.png'), company: 'Be', discount: '5'},
    {title: 'Giảm 50% Dịch vụ giao hàng xe máy', img: require('../images/ahamove.png'), company: 'Ahamove', discount: '5'},
    {title: 'Giảm 100,000đ khi mua trà sữa online', img: require('../images/milkTea.png'), company: '1000Miu', discount: 'Miễn phí'},
    {title: 'Tiết kiệm 300,000đ đi chợ Online', img: require('../images/vinIdGiaSoc.png'), company: 'VinID Giá Sốc', discount: 'Miễn phí'},
    {title: 'Giảm 50,000đ Món Thái đặc sắc', img: require('../images/kohYam.png'), company: 'Bếp Thái Koh Yam', discount: '5'},
    {title: 'Giảm 100,000đ Thời trang mua sắm online' ,img :require('../images/rabity.png'), company: 'Rabity', discount: '5'},
]

const _renderMenu = ({item, index}) => {
    return (
        <View style={style.listCard} key={index}>
            <Image source={item.img} style={style.menuCardImage}/>
            <Text style={{marginTop: 7, fontSize: 13, flexDirection: 'row', flexWrap: 'wrap'}}>{item.title}</Text>
        </View>
    );
};


const MainScreen = ({navigation}) => {
    const [imageList, setImageList] = useState([]);
    const [itemList , setItemList] = useState([]);
    const stepCarousel = useRef(null); 

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

    useEffect(() => {
        setImageList(carouselData);
        setItemList(hotDealData);
    }, []);

    useEffect(() => {
        if(imageList.length > 0){
            let index = 0;
                setInterval(() => {
                    stepCarousel?.current?.scrollTo({ x: index * width * 92.4 / 100, y : 0, animated:true})
                    index += 1;
                    if(index === imageList.length){
                        index = 0;
                    }
                }, 3000);
        }
    }, [imageList])

    return(
    <View style={{backgroundColor: COLORS.white, flex: 1}}>
        <StatusBar translucent={false} backgroundColor={COLORS.white} barStyle="dark-content"  />
            <View style={style.header}>
                <View>
                    <Text style={{color: COLORS.dark, fontSize: 10}}>Địa điểm áp dụng</Text>
                    <Text style={{color: COLORS.dark, fontSize: 15, fontWeight: 'bold'}}><Icon name='location-on' size={12} /> Hà Nội</Text>
                </View>
                <Image source={require('../images/cart.png')} style={style.cart}/>
            </View>
        <FlatList 
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{flexGrow: 1}}
            ListHeaderComponent={
                <>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
                    <View style={style.searchContainer}>
                    <Image source={require('../images/search.png')} style={{height: 20, width: 20}} />
                    <TextInput placeholder="Tìm voucher" />
                    </View>
                </View>
                <FlatList 
                    data={menuData}
                    renderItem={_renderMenu}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{
                        flexGrow: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    numColumns={3}
                    key={3}
                /> 
                <View style={{marginTop: 40, paddingHorizontal: 15, width: width, height: 150}}>
                    <ScrollView pagingEnabled horizontal contentContainerStyle={{width: width * carouselData.length * 92.4 / 100, height: 150}} ref={stepCarousel}>
                        {imageList.map((item, index) => (
                            <Image 
                                key = {index}
                                source = {item.img}
                                style = {{width: width * 92.4 / 100, height: '100%', resizeMode: 'cover', borderRadius: 10}}
                            />
                        ))}
                    </ScrollView>
                </View>
                <ImageBackground source={require('../images/gradient_background.png')} resizeMode="cover" style={{flex:1}}>
                <View style={style.flashSaleContainer}>
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text style = {{color: COLORS.dark, fontWeight : 'normal', fontSize: 20}}>
                            Flash Sale
                        </Text>
                        <Text style ={{color: COLORS.blue, fontSize: 15, fontWeight: 'normal', marginTop: 4}}>
                            Xem tất cả
                        </Text>
                    </View>
                    <FlatList 
                        data={itemList} 
                        horizontal 
                        contentContainerStyle={{
                            marginTop: 10,
                        }}
                        renderItem={_renderItem}
                        />
                </View>
                </ImageBackground>
                <View style={{marginTop: 20, paddingHorizontal: 15}}>
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text style = {{color: COLORS.dark, fontWeight : 'normal', fontSize: 20}}>
                            Hot Deal
                        </Text>
                        <Text style ={{color: COLORS.blue, fontSize: 15, fontWeight: 'normal', marginTop: 4}}>
                            Xem tất cả
                        </Text>
                    </View>
                    <FlatList 
                        data={itemList} 
                        horizontal 
                        contentContainerStyle={{
                            marginTop: 10,
                        }}
                        renderItem={_renderItem}
                        />
                </View>
                <View style={{paddingHorizontal: 15}}>
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text style = {{color: COLORS.dark, fontWeight : 'normal', fontSize: 20}}>
                            Cho trẻ đi chơi
                        </Text>
                        <Text style ={{color: COLORS.blue, fontSize: 15, fontWeight: 'normal', marginTop: 4}}>
                            Xem tất cả
                        </Text>
                    </View>
                    <FlatList 
                        data={itemList} 
                        horizontal 
                        contentContainerStyle={{
                            marginTop: 10,
                        }}
                        renderItem={_renderItem}
                        />
                </View>
                <View style={{paddingHorizontal: 15}}>
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text style = {{color: COLORS.dark, fontWeight : 'normal', fontSize: 20}}>
                            Vi vu đón hè
                        </Text>
                        <Text style ={{color: COLORS.blue, fontSize: 15, fontWeight: 'normal', marginTop: 4}}>
                            Xem tất cả
                        </Text>
                    </View>
                    <FlatList 
                        data={itemList} 
                        horizontal 
                        contentContainerStyle={{
                            marginTop: 10,
                        }}
                        renderItem={_renderItem}
                        />
                </View>
                </>
            }
        />
    </View>
    );
};

const style = StyleSheet.create({
    header: {
        backgroundColor: COLORS.white,
        elevation: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    cart: {
        resizeMode: 'stretch',
        height: 30,
        width: 30,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: COLORS.grey
    },

    searchContainer: {
        height: 40, 
        backgroundColor: COLORS.white,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 25,
        borderWidth: 0.9,
        borderColor: COLORS.grey,
    },

    menuListContainer: {                    
        flexDirection: 'row',
        justifyContent: 'space-between',        
        marginTop: 20,      
        paddingHorizontal: 20,          
    },

    listCard: {   
        marginVertical: 4,
        marginHorizontal: 5,          
        height: 90,
        width: 120,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
    },

    menuCardImage: {
        height: 45,
        borderRadius: 15,
        width: 45,
        backgroundColor: '#fafdfe',
        resizeMode: 'stretch',
    },

    itemImage: {
        flex: 1,
        width: '100%',
        height: 120,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        resizeMode: 'cover',
        
    },

    itemCard: {
        height: 200,
        backgroundColor: COLORS.white,
        width: 170,
        marginHorizontal: 5,
        borderRadius: 5,
        marginBottom: 20,
        elevation: 5,
    },

    flashSaleContainer: {
        marginTop: 20, 
        paddingHorizontal: 15,
    }
})

export default MainScreen;