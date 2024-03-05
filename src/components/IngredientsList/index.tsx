import { Alert, ScrollView } from "react-native";
import { Ingredient } from "../ingredient";
import { styles } from "./styles";
import { useState } from "react";
import { Selected } from "../Selected";
import { router } from "expo-router";

type IngredientsListProps = {
  ingredients: IngredientResponse[]
}

export function IngredientsList({ ingredients }: IngredientsListProps) {
  const [selected, setSelected] = useState<string[]>([])

  console.log('first', ingredients)

  function handleToggleSelected(value: string) {
    if(selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value))
    }

    setSelected((state) => [...state, value])
  }

  function handleClearSelected() {
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      { text: "Não", style: 'cancel'},
      { text: "Sim", onPress: () => setSelected([])},
    ])
  }

  function handleSearch() {
    router.navigate('/recipes')
  }

  return (
  <>
    <ScrollView contentContainerStyle={styles.container}  showsVerticalScrollIndicator={false}  >

      {
        ingredients.map((item) => (
          <Ingredient 
            key={item.id} 
            name={item.name} 
            image={item.image} 
            selected={selected.includes(item.id)}
            onPress={() => handleToggleSelected(item.id)}
          />
        ))
      }
    </ScrollView>

   { selected.length > 0 && (
      <Selected 
        quantity={selected.length} 
        onClear={handleClearSelected} 
        onSearch={handleSearch}
      />
     )
   }
   </>
  )
}