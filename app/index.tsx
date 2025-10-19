import { LoginView } from "@/views/LoginView";
import { Button, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginView />
    </View>
  );
  /*
      <Text>Login Screen</Text>
      <Link href="/counter" asChild>
        <Button title="Go to counter" />
      </Link>
  */
}
