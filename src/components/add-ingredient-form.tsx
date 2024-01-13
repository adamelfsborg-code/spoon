"use client"

import addIngredient from '<spoon>/actions/add-ingredient-action';
import ButtonUI from './ui/button-ui'
import Input from './ui/input-ui'
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import SelectUI from './ui/select-ui';
import { Category } from '@prisma/client';

type AddIngredientFormProps = {
  categories: Category[]
}

const AddIngredientForm = (props: AddIngredientFormProps) => {
  const router = useRouter();

  const handleFormAction = async (formData: FormData) => {
    const ingredient = await addIngredient(formData);
    if (ingredient.error) {
      return toast.error(ingredient.error);
    } 

    router.push(`/ingredients/builder/${ingredient.data?.id}`)
  }

  return (
    <form action={handleFormAction}>
      <div className='flex gap-2' >
        <Input label='name' name='name' />
        <SelectUI name="category" defaultValue={0} label='Category'>
          <option value={0} disabled>Select Category</option>
          {props.categories.map((category) => (
            <option value={category.id} key={category.id}>{category.name}</option>
          ))}
        </SelectUI>   
        <ButtonUI>
          Submit
        </ButtonUI>
      </div>
    </form>
  )
}

export default AddIngredientForm