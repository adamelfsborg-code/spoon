'use client'

import React, { useState } from 'react'
import ButtonUI from './ui/button-ui'
import ModalUI from './ui/modal-ui'
import GenerateIngredientFromRecipeForm from './generate-ingredient-from-recipe-form'
import { type Category, type Recipe } from '@prisma/client'

type GenerateIngredientFromRecipeModalProps = {
  recipe: Recipe
  categories: Category[]
  show?: boolean
  label: string
}

const GenerateIngredientFromRecipeModal = (props: GenerateIngredientFromRecipeModalProps) => {
  const [showModal, setShowModal] = useState(!!props.show);
  
  return (
    <>
      <ButtonUI onClick={() => setShowModal(!showModal)} className='w-full' >
        {props.label}
      </ButtonUI> 
      <ModalUI setShow={setShowModal} show={showModal} label={props.label} >
        <GenerateIngredientFromRecipeForm categories={props.categories} recipe={props.recipe} />
      </ModalUI>
    </>
  )
}

export default GenerateIngredientFromRecipeModal;