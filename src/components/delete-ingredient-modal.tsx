'use client'

import React, { useState } from 'react'
import ButtonUI from './ui/button-ui'
import ModalUI from './ui/modal-ui'
import { type Ingredient } from '@prisma/client'
import DeleteIngredientForm from './delete-ingredient-form'

type DeleteIngredientModalProps = {
  ingredient: Ingredient
  label: string
  show?: boolean
}

const DeleteIngredientModal = (props: DeleteIngredientModalProps) => {
  const [showModal, setShowModal] = useState(!!props.show);
  
  return (
    <>
      <ButtonUI onClick={() => setShowModal(!showModal)} className='w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200' >
        {props.label}
      </ButtonUI> 
      <ModalUI setShow={setShowModal} show={showModal} label={props.label} >
        <DeleteIngredientForm ingredient={props.ingredient} setShowModal={setShowModal} />
      </ModalUI>
    </>
  )
}

export default DeleteIngredientModal;