"use client"

import addIngredientToRecipe from '<spoon>/actions/add/add-ingredient-to-recipe-action'
import { type Ingredient, type Recipe } from '@prisma/client'
import { toast } from 'react-hot-toast'
import InputUI from '<spoon>/components/ui/input-ui'
import ButtonUI from '<spoon>/components/ui/button-ui'
import SelectUI from '<spoon>/components/ui/select-ui'

type AddIngredientToRecipeFormProps = {
  recipe: Recipe
  ingredients: Ingredient[]
}

const AddIngredientToRecipeForm = (props: AddIngredientToRecipeFormProps) => {

  const handleFormAction = async (formData: FormData) => {
    const response = await addIngredientToRecipe(formData)
    if (response.error) {
      return toast.error(response.error);
    } 
    toast.success('Ingredient added');
  }

  return (
    <form action={handleFormAction}>
      <div className='flex items-center justify-start gap-x-2' >
        <InputUI type="hidden" name="recipe" value={props.recipe.id} />

        <SelectUI label='Ingredient' name='ingredient' defaultValue={0} >
          <option value={0} disabled>Select Ingredient</option>
          {props.ingredients.map((ingredient) => (
            <option value={ingredient.id} key={ingredient.id}>{ingredient.name}</option>
          ))}
        </SelectUI>

        <InputUI type="number" name="weight" label='Weight (g)' />
        
        <ButtonUI>
          Submit
        </ButtonUI>
      </div>
    </form>
  )
}

export default AddIngredientToRecipeForm