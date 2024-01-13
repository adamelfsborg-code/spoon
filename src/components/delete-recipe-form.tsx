"use client"

import ButtonUI from './ui/button-ui'
import Input from './ui/input-ui'
import { type Recipe } from '@prisma/client'
import { toast } from 'react-hot-toast'
import deleteRecipe from '<spoon>/actions/delete-recipe-action'

type DeleteRecipeFormProps = {
  recipe: Recipe
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteRecipeForm = (props: DeleteRecipeFormProps) => {

  const handleFormAction = async () => {
    const response = await deleteRecipe(props.recipe.id);
    if (response.error) {
      return toast.error(response.error);
    } 

    props.setShowModal(false);
    toast.success(`Recipe ${props.recipe.name} deleted`);
  }

  return (
    <form action={handleFormAction}>
      <div className='flex flex-col gap-y-2' >
        <div>
          <p>Are you sure you want to delete <span className='font-semibold' >{props.recipe.name}</span> ?</p>
        </div>
          <ButtonUI className='flex-start' >
            Delete
          </ButtonUI>
        </div>
    </form>
  )
}

export default DeleteRecipeForm