import { Image, Pressable, Text, PressableProps } from "react-native";
import { styles } from "./styles";
import { services } from "@/services";

export type IngredientProps = PressableProps & {
  name: string,
  image: string,
  selected?: boolean
}

export function Ingredient({name, image, selected = false, ...rest}:IngredientProps) {
  return (
    <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
      <Image style={styles.image} source={{ uri: `${services.storage.imagePath}/${image}`}}/>
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  )
}