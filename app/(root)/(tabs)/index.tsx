import { Text, View } from "react-native";
import{Link} from 'expo-router'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text className="text-black font-rubik-bold">Welcome to Restate</Text>
      <Link href="/sign_in">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">profile</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  );
}
