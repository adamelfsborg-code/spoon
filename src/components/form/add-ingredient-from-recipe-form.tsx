"use client"

import ButtonUI from '<spoon>/components/ui/button-ui'
import SelectUI from '<spoon>/components/ui/select-ui'
import InputUI from '<spoon>/components/ui/input-ui'
import { type Recipe, type Category } from '@prisma/client'
import AddIngredientFromRecipeAction from '<spoon>/actions/add/add-ingredient-from-recipe-action'
import { toast } from 'react-hot-toast'

type AddIngredientFromRecipeFormProps = {
  recipe: Recipe
  categories: Category[]
}

const AddIngredientFromRecipeForm = (props: AddIngredientFromRecipeFormProps) => {
  const handleFormAction = async (formData: FormData) => {
    const response = await AddIngredientFromRecipeAction(formData);
    if (response.error) {
      return toast.error(response.error);
    } 

    if (Number(response.data) === 0) {
      return toast.error(`No ingredient created becuase "${props.recipe.name}" is empty.`);
    } 

    toast.success(`${response.data} ingredients created`);
  }

  return (
    <form action={handleFormAction}>
      <InputUI type="hidden" name="recipe" value={props.recipe.id} />

      <div className='flex gap-x-2' >
        <SelectUI name="category" defaultValue={0} label='Category'>
          <option value={0} disabled>Select Category</option>
          {props.categories.map((category) => (
            <option value={category.id} key={category.id}>{category.name}</option>
          ))}
        </SelectUI>

        <ButtonUI>
          Generate
        </ButtonUI>
      </div>
    </form>
  )
}

export default AddIngredientFromRecipeForm