import React from "react";
import { View, Image, ScrollView, Text } from "react-native";
import BgImg from "../assets/images/bg-img.jpg";
import styles from "../styles/CommentsListStyle";

const CommentsList = ({ navigation }) => {
  return (
    <ScrollView style={styles.containerList}>
      <View style={styles.commentCard}>
        <View style={styles.imgWrapper}>
          <Image source={BgImg} style={styles.img} />
        </View>
        <View style={styles.commentWrapper}>
          <Text style={styles.commentText}>
            Really love your most recent photo. I’ve been trying to capture the
            same thing for a few months and would love some tips!
          </Text>
          <Text style={styles.commentDate}>09 червня, 2020 | 08:40</Text>
        </View>
      </View>
      <View style={styles.commentCard}>
        <View style={styles.commentWrapperRight}>
          <Text style={styles.commentText}>
            A fast 50mm like f1.8 would help with the bokeh. I’ve been using
            primes as they tend to get a bit sharper images.
          </Text>
          <Text style={styles.commentDateLeft}>09 червня, 2020 | 09:14</Text>
        </View>
        <View style={styles.imgWrapper}>
          <Image source={BgImg} style={styles.img} />
        </View>
      </View>
      <View style={styles.commentCard}>
        <View style={styles.imgWrapper}>
          <Image source={BgImg} style={styles.img} />
        </View>
        <View style={styles.commentWrapper}>
          <Text style={styles.commentText}>
            Really love your most recent photo. I’ve been trying to capture the
            same thing for a few months and would love some tips!
          </Text>
          <Text style={styles.commentDate}>09 червня, 2020 | 08:40</Text>
        </View>
      </View>
      <View style={styles.commentCard}>
        <View style={styles.commentWrapperRight}>
          <Text style={styles.commentText}>
            A fast 50mm like f1.8 would help with the bokeh. I’ve been using
            primes as they tend to get a bit sharper images.
          </Text>
          <Text style={styles.commentDateLeft}>09 червня, 2020 | 09:14</Text>
        </View>
        <View style={styles.imgWrapper}>
          <Image source={BgImg} style={styles.img} />
        </View>
      </View>
    </ScrollView>
  );
};
export default CommentsList;
