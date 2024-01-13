"use client"

import ButtonUI from '<spoon>/components/ui/button-ui'
import InputUI from '<spoon>/components/ui/input-ui'
import addRecipe from '<spoon>/actions/add/add-recipe-action';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const AddRecipeForm = () => {
  const router = useRouter();

  const handleFormAction = async (formData: FormData) => {
    const recipe = await addRecipe(formData);
    if (recipe.error) {
      return toast.error(recipe.error);
    } 

    router.push(`/recipes/builder/${recipe.data?.id}`)
  }

  return (
    <form action={handleFormAction}>
      <div className='flex gap-2' >
        <InputUI label='name' name='name' />   
        <ButtonUI>
          Submit
        </ButtonUI>
      </div>
    </form>
  )
}

export default AddRecipeForm