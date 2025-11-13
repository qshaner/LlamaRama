import { CounterView } from "@/views/CounterView";
import { LoginView } from "@/views/LoginView";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function Index() {
  

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LoginView} />
      <Tab.Screen name="Profile" component={CounterView} />
    </Tab.Navigator>
  );
}
  
  return (
    <MyTabs />
  );
}
