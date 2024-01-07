import { PageProps } from '<spoon>/app/page'
import RecipeFeed from '<spoon>/components/recipe-feed'
import React from 'react'

const Page = (props: PageProps) => {
  return (
    <RecipeFeed  {...props} />
  )
}

export default Page