import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions, TextInput, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const { width, height } = Dimensions.get('window');

// Air Quality data
const airQuality = [
    { id: 1, cityname: "Gurugram", number: 30 },
    { id: 2, cityname: "Air Quality", number: "Moderate" },
    { id: 3, cityname: "Delhi", number: "Pollution" },
    { id: 4, cityname: "Chandigarh", number: "Clean City" }
];

// Dummy news data
const newsData = [
    {
        id: 1,
        name: "John Doe",
        role: "Developer",
        profile_image: "https://igimage.indiaglitz.com/telugu/gallery/actor/rahulvijay/poster.jpg",
        bio: "A passionate developer who loves coding and open-source projects.",
        location: "New York, USA",
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Designer",
        profile_image: "https://i.pinimg.com/236x/40/1e/ed/401eed72ad2db46fd0bc927e2b3d8e4a.jpg",
        bio: "Creative mind, always focused on user experience and design trends.",
        location: "London, UK",
    },
    {
        id: 3,
        name: "Alice Johnson",
        role: "Product Manager",
        profile_image: "https://c8.alamy.com/comp/2B450BM/rajinikanth-indian-actor-producer-screenwriter-rajnikant-shivaji-rao-gaekwad-india-asia-old-vintage-1900s-picture-2B450BM.jpg",
        bio: "Experienced product manager with a focus on delivering high-quality products.",
        location: "Sydney, Australia",
    },
    {
        id: 4,
        name: "Bob Brown",
        role: "Backend Engineer",
        profile_image: "https://static.toiimg.com/thumb/msid-91687000,width-400,resizemode-4/91687000.jpg",
        bio: "Backend engineer with a passion for scalable systems and performance optimization.",
        location: "San Francisco, USA",
    },
    {
        id: 5,
        name: "Charlie Davis",
        role: "UI/UX Specialist",
        profile_image: "https://im.indiatimes.in/content/2023/Jul/000_33EM74J_64c24a7e42072.jpg?w=640&h=480&cc=1&webp=1&q=75",
        bio: "UI/UX designer with expertise in creating intuitive and user-friendly interfaces.",
        location: "Berlin, Germany",
    },
];

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Air Quality Data */}
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: width,
                paddingBottom: 20

            }}>
                <Text style={{
                    fontSize: 26,
                    color: '#fff',
                    fontWeight: 'bold',


                }}>
                    Google
                </Text>
            </View>
            <View style={{
                height: height * 0.065,
                backgroundColor: 'grey',
                flexDirection: 'row',
                width: width * 0.95,
                // justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 50,
                marginBottom: 20
            }}>
                <View style={{
                    width: width * 0.14,
                    alignItems: 'center',
                    // backgroundColor: 'red'
                }}>
                    <Image

                        source={{ uri: "https://static-00.iconduck.com/assets.00/search-icon-512x512-dxj09ddf.png" }}
                        style={{
                            height: 25,
                            width: 25,

                        }}
                    />
                </View>
                <View style={{
                    // backgroundColor: 'green',
                    width: width * 0.55
                }}>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#d3d3d3"
                        style={styles.input}
                    />
                </View>
                <View style={{
                    // backgroundColor: 'yellow',
                    width: width * 0.1
                }}>
                    <Image source={{ uri: "https://www.clipartmax.com/png/middle/209-2095098_white-microphone-icon-png.png" }}
                        style={{

                            height: 30,
                            width: 30,
                            // color: '#fff'
                        }} />
                </View>
                <View style={{
                    width: width * 0.1,
                    // backgroundColor: 'pink'
                }}>
                    <Image source={{ uri: "https://i.pinimg.com/originals/e7/48/24/e7482473475793983cdcfdb64b01cc41.jpg" }}

                        style={{

                            height: 35,
                            width: 35,
                            color: '#fff'
                        }} />
                </View>

            </View>

            <View>
                <FlatList
                    data={airQuality}
                    horizontal
                    contentContainerStyle={{
                        height: height * 0.1,
                        paddingRight: 20,
                    }}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{
                            // backgroundColor:'red',
                            borderWidth: 1,
                            borderColor: 'grey',
                            paddingHorizontal: 20,
                            height: height * 0.08,
                            borderRadius: 10,
                            alignItems: 'center',
                            marginLeft: 20,
                            width: width * 0.43,
                            paddingVertical: 4

                        }}>
                            <Text style={styles.cityName}>{item.cityname}</Text>
                            <Text style={styles.airQuality}>{item.number}</Text>
                        </View>
                    )}
                />
            </View>

            {/* News Data */}
            <FlatList
                data={newsData}
                contentContainerStyle={{paddingBottom:30}}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.profile_image }} style={styles.image} />
                        <TouchableOpacity>

                            <Text style={styles.bio}>{item.bio}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#000',
        paddingVertical: 20,

    },
    card: {
        marginBottom: 20,
        backgroundColor: '#111',
        borderRadius: 12,
        paddingTop: 20,
        alignItems: 'center',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    image: {
        width: width * 0.9,
        height: height * 0.4,
        borderRadius: 10,
        marginBottom: 10,
        resizeMode: 'cover',
    },

    bio: {
        fontSize: 18,
        color: '#eee',
        lineHeight: 20,
        fontWeight: '600',
    },
    input: {
        // flex: 1,
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',

    },
    cityName: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 5,
        alignSelf: 'flex-start'

    },
    airQuality: {
        fontSize: 16,
        color: '#bbb',
        alignSelf: 'flex-start'
    },
});

export default HomeScreen;
