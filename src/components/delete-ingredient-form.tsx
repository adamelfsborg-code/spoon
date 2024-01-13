"use client"

import deleteIngredient from '<spoon>/actions/delete-ingredient-action'
import ButtonUI from './ui/button-ui'
import { type Ingredient } from '@prisma/client'
import { toast } from 'react-hot-toast'

type DeleteIngredientFormProps = {
  ingredient: Ingredient
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteIngredientForm = (props: DeleteIngredientFormProps) => {

  const handleFormAction = async () => {
    const response = await deleteIngredient(props.ingredient.id);
    if (response.error) {
      return toast.error(response.error);
    } 

    props.setShowModal(false);
    toast.success(`Recipe ${props.ingredient.name} deleted`);
  }

  return (
    <form action={handleFormAction}>
      <div className='flex flex-col gap-y-2' >
        <div>
          <p>Are you sure you want to delete <span className='font-semibold' >{props.ingredient.name}</span> ?</p>
        </div>
          <ButtonUI className='flex-start' >
            Delete
          </ButtonUI>
        </div>
    </form>
  )
}

export default DeleteIngredientForm