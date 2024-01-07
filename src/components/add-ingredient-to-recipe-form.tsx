"use client"

import addIngredientToRecipe from '<spoon>/actions/add-ingredient-to-recipe-action'
import { type Ingredient, type Recipe } from '@prisma/client'
import { toast } from 'react-hot-toast'
import Input from './ui/input-ui'
import ButtonUI from './ui/button-ui'
import Select from './ui/select-ui'

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
        <Input type="hidden" name="recipe" value={props.recipe.id} />

        <Select label='Ingredient' name='ingredient' defaultValue={0} >
          <option value={0} disabled>Select Ingredient</option>
          {props.ingredients.map((ingredient) => (
            <option value={ingredient.id} key={ingredient.id}>{ingredient.name}</option>
          ))}
        </Select>

        <Input type="number" name="weight" label='Weight (g)' />
        
        <ButtonUI>
          Submit
        </ButtonUI>
      </div>
    </form>
  )
}

export default AddIngredientToRecipeForm