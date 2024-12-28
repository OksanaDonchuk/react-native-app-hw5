import React from "react";
import { View, Text, Image } from "react-native";
import PostsList from "../components/PostList";
import Avatar from "../assets/images/Avatar.png";
import styles from "../styles/PostsScreenStyles";

const PostsScreen = ({ route, navigation }) => {
  const post = route.params?.post;

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.avatarWrapper}>
          <Image source={Avatar} style={styles.avatar} />
        </View>
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>user1@gmail.com</Text>
        </View>
      </View>
      <PostsList post={post} navigation={navigation} />
    </View>
  );
};

export default PostsScreen;
