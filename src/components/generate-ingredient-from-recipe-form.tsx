"use client"

import ButtonUI from './ui/button-ui'
import Select from './ui/select-ui'
import Input from './ui/input-ui'
import { type Recipe, type Category } from '@prisma/client'
import GenerateIngredientFromRecipeAction from '<spoon>/actions/generate-ingredient-from-recipe-action'
import { toast } from 'react-hot-toast'

type GenerateIngredientFromRecipeFormProps = {
  recipe: Recipe
  categories: Category[]
}

const GenerateIngredientFromRecipeForm = (props: GenerateIngredientFromRecipeFormProps) => {
  const handleFormAction = async (formData: FormData) => {
    const response = await GenerateIngredientFromRecipeAction(formData);
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
      <Input type="hidden" name="recipe" value={props.recipe.id} />

      <div className='flex gap-x-2' >
        <Select name="category" defaultValue={0} label='Category'>
          <option value={0} disabled>Select Category</option>
          {props.categories.map((category) => (
            <option value={category.id} key={category.id}>{category.name}</option>
          ))}
        </Select>

        <ButtonUI>
          Generate
        </ButtonUI>
      </div>
    </form>
  )
}

export default GenerateIngredientFromRecipeForm