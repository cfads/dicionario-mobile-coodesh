import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Word } from "../../types/types";
import { capitalize } from "../../utils/formatStrings";
import { RootStackParamList } from "../../navigation/AppNavigator";
import useHistory from "../../hooks/useHistory";

interface ListProps {
  data: Word[];
}

const List: React.FC<ListProps> = ({ data }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { saveHistory } = useHistory();

  const handlePress = async (item: Word) => {
    await saveHistory(item.word);
    navigation.navigate("Word", item);
  };

  return (
    <View style={styles.list}>
      <View style={styles.grid}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.touchable}
            onPress={() => handlePress(item)}
          >
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.cardTitle}>{capitalize(item.word)}</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    margin: 10,
    paddingTop: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  touchable: {
    width: "32%",
    marginBottom: 10,
  },
  card: {
    flex: 1,
    height: 120,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default List;
