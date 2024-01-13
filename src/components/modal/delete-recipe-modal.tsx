'use client'

import React, { useState } from 'react'
import ModalUI from '../ui/modal-ui'
import { type Recipe } from '@prisma/client'
import DeleteRecipeForm from '../form/delete-recipe-form'
import { TrashIcon } from '@heroicons/react/24/outline'
import IconUI from '../ui/icon-ui'

type DeleteRecipeModalProps = {
  recipe: Recipe
  label: string
  show?: boolean
}

const DeleteRecipeModal = (props: DeleteRecipeModalProps) => {
  const [showModal, setShowModal] = useState(!!props.show);
  
  return (
    <>
      <IconUI className='bg-red-100 cursor-pointer ' onClick={() => setShowModal(!showModal)} >
        <TrashIcon className='w-6 h-6' />
      </IconUI>
      <ModalUI setShow={setShowModal} show={showModal} label={props.label} >
        <DeleteRecipeForm recipe={props.recipe} setShowModal={setShowModal} />
      </ModalUI>
    </>
  )
}

export default DeleteRecipeModal;