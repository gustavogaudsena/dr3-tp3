import { View, Text, Button } from "react-native";
import { ScrollView } from "react-native";

export default function TP3(props) {
  const navigation = props.navigation;

  return (
    <ScrollView>
        <View>
          {Array.from({ length: 11 }, (_, i) => (
            <Button
              key={i}
              title={`TP3 - ${i + 1}`}
              onPress={() => navigation.navigate(`TP3 - ${i + 1}`, { id: i + 1 })}
            />
          ))}
        </View>
    </ScrollView>
  );
}