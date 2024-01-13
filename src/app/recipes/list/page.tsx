import { PageProps } from '<spoon>/app/page'
import RecipeFeed from '<spoon>/components/feed/recipe-feed'
import ContainerUI from '<spoon>/components/ui/container-ui'
import SectionUI from '<spoon>/components/ui/section-ui'

const Page = (props: PageProps) => {
  return (
    <>
      <ContainerUI className='space-y-6' >
        <SectionUI>
          <h2 className='text-3xl font-bold text-center py-4 '>Recipes</h2>
        </SectionUI>
        <RecipeFeed  {...props} />
      </ContainerUI>
    </>
  )
}

export default Page