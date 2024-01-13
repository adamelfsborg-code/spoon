'use client'

import React, { useState } from 'react'
import ButtonUI from './ui/button-ui'
import ModalUI from './ui/modal-ui'
import { type Recipe } from '@prisma/client'
import DeleteRecipeForm from './delete-recipe-form'

type DeleteRecipeModalProps = {
  recipe: Recipe
  label: string
  show?: boolean
}

const DeleteRecipeModal = (props: DeleteRecipeModalProps) => {
  const [showModal, setShowModal] = useState(!!props.show);
  
  return (
    <>
      <ButtonUI onClick={() => setShowModal(!showModal)} className='w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200' >
        {props.label}
      </ButtonUI> 
      <ModalUI setShow={setShowModal} show={showModal} label={props.label} >
        <DeleteRecipeForm recipe={props.recipe} setShowModal={setShowModal} />
      </ModalUI>
    </>
  )
}

export default DeleteRecipeModal;