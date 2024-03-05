import { Text, View } from "react-native"
import { styles } from "./styles"
import { IngredientsList } from "@/components/IngredientsList"
import { useEffect, useState } from "react"
import { services } from "@/services"

export default function Index() {
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

  useEffect(() => {
    services.ingredtients.findAll().then(setIngredients)
  }, [])
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
          Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu.
      </Text>

      <IngredientsList ingredients={ingredients}/>
    </View>
  )
}