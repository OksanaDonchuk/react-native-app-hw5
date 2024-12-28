import React from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import PostList from "../components/PostList";
import BgImg from "../assets/images/bg-img.jpg";
import styles from "../styles/ProfileScreenStyles";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={BgImg} style={styles.background}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.contentContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={styles.logoutBtn}
            >
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
            <View style={styles.avatarWrapper}>
              <Image
                source={require("../assets/images/Avatar.png")}
                style={styles.avatar}
              />

              <TouchableOpacity style={styles.closeIconWrapper}>
                <MaterialIcons name="close" size={18} color="#BDBDBD" />
              </TouchableOpacity>
            </View>

            <Text style={styles.userName}>Natali Romanova</Text>

            <PostList navigation={navigation} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
