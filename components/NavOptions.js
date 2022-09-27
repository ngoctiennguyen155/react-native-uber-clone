import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const data = [
  {
    id: 123,
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: 234,
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "FoodScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pt-4 pb-8 pl-6 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 mt-2 bg-black rounded-full w-10`}
              type="antdesign"
              name="arrowright"
              color={"white"}
            />
          </View>
        </TouchableOpacity>
      )}
    ></FlatList>
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
