import fetchCategories from "<spoon>/actions/fetch-categoris-action"
import AddIngredientForm from "<spoon>/components/add-ingredient-form"

const Page = async () => {
  const categories = await fetchCategories({ take: 100, skip: 0 })
  return (
    <AddIngredientForm categories={categories.data!} />
  )
}

export default Page