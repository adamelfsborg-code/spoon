'use client'

import React, { useState } from 'react'
import ButtonUI from '../ui/button-ui'
import ModalUI from '../ui/modal-ui'
import { type Ingredient } from '@prisma/client'
import DeleteIngredientForm from '../form/delete-ingredient-form'
import { TrashIcon } from '@heroicons/react/24/outline'
import IconUI from '../ui/icon-ui'

type DeleteIngredientModalProps = {
  ingredient: Ingredient
  label: string
  show?: boolean
}

const DeleteIngredientModal = (props: DeleteIngredientModalProps) => {
  const [showModal, setShowModal] = useState(!!props.show);
  
  return (
    <>
      <IconUI className='bg-red-100 cursor-pointer ' onClick={() => setShowModal(!showModal)} >
        <TrashIcon className='w-6 h-6' />
      </IconUI>
      <ModalUI setShow={setShowModal} show={showModal} label={props.label} >
        <DeleteIngredientForm ingredient={props.ingredient} setShowModal={setShowModal} />
      </ModalUI>
    </>
  )
}

export default DeleteIngredientModal;