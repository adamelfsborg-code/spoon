import fetchIngredient from "<spoon>/actions/fetch-ingredient"
import { PageProps } from "<spoon>/app/page"
import AddNutritionFactsForm from "<spoon>/components/add-nutrition-facts-form"
import MacroDoughnutChart from "<spoon>/components/macro-doughnut-chart"
import ContainerUI from "<spoon>/components/ui/container-ui"
import SectionUI from "<spoon>/components/ui/section-ui"
import calculateTotalMacro from "<spoon>/lib/total-macro"

const Page = async (props: PageProps) => {
  const ingredient = await fetchIngredient({id: String(props.params?.id || '' )})
  
  return (
    <ContainerUI className='flex flex-col gap-4'>
      <SectionUI>
        <div>
          <h2 className='text-3xl font-bold text-center'>{ingredient.data?.name}</h2>
          <MacroDoughnutChart  {...calculateTotalMacro([ingredient.data!])} />
        </div>
      </SectionUI>

      <AddNutritionFactsForm ingredient={ingredient.data!} />      
    </ContainerUI>
  )
}

export default Page