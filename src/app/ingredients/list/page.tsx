import IngredientFeed from "<spoon>/components/ingredient-feed";
import { PageProps } from '<spoon>/app/page';

const Page = (props: PageProps) => {
  return (
    <IngredientFeed {...props} />
  )
}
export default Page;