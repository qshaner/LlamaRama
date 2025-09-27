import { Button } from "react-native";

type ActionButtonProps = {
    action: () => void;
}

export function ActionButton({action}: ActionButtonProps) {
    
    return (
        <Button 
            title="click"
            color="#f194ff"
            onPress={action}
/>
    )
}