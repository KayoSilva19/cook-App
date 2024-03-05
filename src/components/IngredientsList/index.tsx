import { Alert, ScrollView } from "react-native";
import { Ingredient } from "../ingredient";
import { styles } from "./styles";
import { useState } from "react";
import { Selected } from "../Selected";
import { router } from "expo-router";

export function IngredientsList() {
  const [selected, setSelected] = useState<string[]>([])

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
        Array.from({ length: 100 }).map((item, index) => (
          <Ingredient key={index} name='Maçã' image='' selected={selected.includes(String(index))}
            onPress={() => handleToggleSelected(String(index))}
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