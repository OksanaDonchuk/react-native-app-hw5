import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import PostsScreen from "../screens/PostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import styles from "../styles/BottomTabStyles";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        if (route.name === "Posts") {
          return <MaterialIcons name="grid-view" size={24} color="#212121" />;
        } else if (route.name === "Create Post") {
          return (
            <View style={styles.addPostWrapper}>
              <MaterialIcons name="add" style={styles.addPostIcon} />
            </View>
          );
        } else if (route.name === "Profile") {
          return (
            <MaterialIcons name="person-outline" size={24} color="#212121" />
          );
        }
      },
      tabBarShowLabel: false,
      tabBarStyle: styles.defaultTabBar,
      tabBarIconStyle: {
        marginTop: 8,
      },
    })}
  >
    <Tab.Screen
      name="Posts"
      component={PostsScreen}
      options={({ navigation }) => ({
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 16 }}
            onPress={() => navigation.navigate("Login")}
          >
            <MaterialIcons name="logout" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        ),
        headerLeft: () => <View style={{ width: 40 }} />,
        headerTitle: "Публікації",
        headerTitleAlign: "center",
      })}
    />
    <Tab.Screen
      name="Create Post"
      component={CreatePostsScreen}
      options={({ navigation, route }) => ({
        headerLeft: () => (
          <TouchableOpacity
            style={{ marginLeft: 16 }}
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
        ),
        headerRight: () => <View style={{ width: 40 }} />,
        headerTitle: "Створити публікацію",
        headerTitleAlign: "center",
      })}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);
export default BottomTabNavigator;
