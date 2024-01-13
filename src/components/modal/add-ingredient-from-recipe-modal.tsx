'use client'

import { useState } from 'react'
import ButtonUI from '<spoon>/components/ui/button-ui'
import ModalUI from '<spoon>/components/ui/modal-ui'
import AddIngredientFromRecipeForm from '<spoon>/components/form/add-ingredient-from-recipe-form'
import { type Category, type Recipe } from '@prisma/client'
import { PlusIcon } from '@heroicons/react/24/outline'
import IconUI from '../ui/icon-ui'
import LinkUI from '../ui/link-ui'

type AddIngredientFromRecipeModalProps = {
  recipe: Recipe
  categories: Category[]
  label: string
  show?: boolean
}

const AddIngredientFromRecipeModal = (props: AddIngredientFromRecipeModalProps) => {
  const [showModal, setShowModal] = useState(!!props.show);
  
  return (
    <>
      <IconUI className='bg-green-100 cursor-pointer ' onClick={() => setShowModal(!showModal)} >
        <PlusIcon className='w-6 h-6' />
      </IconUI>
      <ModalUI setShow={setShowModal} show={showModal} label={props.label} >
        <AddIngredientFromRecipeForm categories={props.categories} recipe={props.recipe} />
      </ModalUI>
    </>
  )
}

export default AddIngredientFromRecipeModal;