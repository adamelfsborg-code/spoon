import { PageProps } from '<spoon>/app/page'
import RecipeFeed from '<spoon>/components/recipe-feed'

const Page = (props: PageProps) => {
  return (
    <>
      <RecipeFeed  {...props} />
    </>
  )
}

export default Page