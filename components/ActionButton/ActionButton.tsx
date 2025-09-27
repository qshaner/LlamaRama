import { Alert, Button } from "react-native";

export function ActionButton() {
    
    return (
<Button 
title="click"
color="#f194ff"
onPress={()=> Alert.alert("Button with color pressed")}
/>
    )
}