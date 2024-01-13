import IngredientFeed from "<spoon>/components/feed/ingredient-feed";
import { PageProps } from '<spoon>/app/page';
import ContainerUI from "<spoon>/components/ui/container-ui";
import SectionUI from "<spoon>/components/ui/section-ui";

const Page = (props: PageProps) => {
  return (
    <>
      <ContainerUI className="space-y-6" >
        <SectionUI>
          <h2 className='text-3xl font-bold text-center py-4 '>Ingredients</h2>
        </SectionUI>
        <IngredientFeed {...props} />
      </ContainerUI>
    </>
  )
}
export default Page;