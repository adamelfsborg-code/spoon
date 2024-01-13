import fetchIngredient from "<spoon>/actions/fetch/fetch-ingredient"
import { PageProps } from "<spoon>/app/page"
import MacroDoughnutChart from "<spoon>/components/chart/macro-doughnut-chart"
import ContainerUI from "<spoon>/components/ui/container-ui"
import DividerUI from "<spoon>/components/ui/divider-ui"
import SectionUI from "<spoon>/components/ui/section-ui"
import { nutritionMapper } from "<spoon>/lib/nutrition"
import calculateTotalMacro from "<spoon>/lib/total-macro"

const Page = async (props: PageProps) => {
  const ingredient = await fetchIngredient({id: String(props.params?.id || '' )})

  const ingredientInformations = nutritionMapper(ingredient.data!);
  
  return (
    <ContainerUI className='flex flex-col gap-4'>
      <SectionUI>
        <div>
          <h2 className='text-3xl font-bold text-center'>{ingredient.data?.name}</h2>
          <MacroDoughnutChart  {...calculateTotalMacro([ingredient.data!])} />
        </div>
      </SectionUI>

      <SectionUI className="flex justify-center" >
        <div className="border border-black w-[15vw] rounded" >
          <div>
            <h2 className='text-3xl font-bold text-center'>Nutrition Facts</h2>
          </div>
          <DividerUI/>
          <div className="flex justify-between px-1" >
            <p>Serving Size</p>
            <p><span className="text-1xl font-semibold">100</span>g</p>
          </div>
          <DividerUI className="h-[1vh] bg-black" />
          <div className="flex justify-between items-center px-1" >
            <p className="text-3xl font-bold" >{ingredientInformations.energy_kcal?.name}</p>
            <p className="text-5xl font-bold" >{ingredientInformations.energy_kcal?.value}</p>
          </div>
          <DividerUI/>
          <div>
            <h4 className="text-2xl font-semibold text-center">Main</h4>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.fat?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.fat?.value}</span>{ingredientInformations.fat?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.prot?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.prot?.value}</span>{ingredientInformations.prot?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.carbs?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.carbs?.value}</span>{ingredientInformations.carbs?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.fiber?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.fiber?.value}</span>{ingredientInformations.fiber?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.water?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.water?.value}</span>{ingredientInformations.water?.unit}</p>
          </div>
          <DividerUI/>
          <div>
            <h4 className="text-2xl font-semibold text-center">Suger</h4>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.mono_disack?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.mono_disack?.value}</span>{ingredientInformations.mono_disack?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.mono?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.mono?.value}</span>{ingredientInformations.mono?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.di?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.di?.value}</span>{ingredientInformations.di?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.socker_f?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.socker_f?.value}</span>{ingredientInformations.socker_f?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.socker_t?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.socker_t?.value}</span>{ingredientInformations.socker_t?.unit}</p>
          </div>
          <DividerUI/>
          <div>
            <h4 className="text-2xl font-semibold text-center">Fatty Acids</h4>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p className="text-1xl font-bold" >{ingredientInformations.sfa?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.sfa?.value}</span>{ingredientInformations.sfa?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.c4_0_c10_0?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.c4_0_c10_0?.value}</span>{ingredientInformations.c4_0_c10_0?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.c12_0?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.c12_0?.value}</span>{ingredientInformations.c12_0?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.c14_0?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.c14_0?.value}</span>{ingredientInformations.c14_0?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.c16_0?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.c16_0?.value}</span>{ingredientInformations.c16_0?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.c18_0?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.c18_0?.value}</span>{ingredientInformations.c18_0?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.c20_0?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.c20_0?.value}</span>{ingredientInformations.c20_0?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p className="text-1xl font-bold" >{ingredientInformations.mufa?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.mufa?.value}</span>{ingredientInformations.mufa?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.c16_1?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.c16_1?.value}</span>{ingredientInformations.c16_1?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.c18_1?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.c18_1?.value}</span>{ingredientInformations.c18_1?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p className="text-1xl font-bold" >{ingredientInformations.pufa?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.pufa?.value}</span>{ingredientInformations.pufa?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.c18_2?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.c18_2?.value}</span>{ingredientInformations.c18_2?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.c18_3?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.c18_3?.value}</span>{ingredientInformations.c18_3?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.c20_4?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.c20_4?.value}</span>{ingredientInformations.c20_4?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.c20_5?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.c20_5?.value}</span>{ingredientInformations.c20_5?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.c22_5?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.c22_5?.value}</span>{ingredientInformations.c22_5?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.c22_6?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.c22_6?.value}</span>{ingredientInformations.c22_6?.unit}</p>
          </div>
          <DividerUI/>
          <div>
            <h4 className="text-2xl font-semibold text-center">Vitamins</h4>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.thiam?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.thiam?.value}</span>{ingredientInformations.thiam?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.ribofl?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.ribofl?.value}</span>{ingredientInformations.ribofl?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.niac?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.niac?.value}</span>{ingredientInformations.niac?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.niek?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.niek?.value}</span>{ingredientInformations.niek?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.vitb6?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.vitb6?.value}</span>{ingredientInformations.vitb6?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.folate?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.folate?.value}</span>{ingredientInformations.folate?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.vitb12?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.vitb12?.value}</span>{ingredientInformations.vitb12?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.vitc?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.vitc?.value}</span>{ingredientInformations.vitc?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.vita?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.vita?.value}</span>{ingredientInformations.vita?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.retinol?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.retinol?.value}</span>{ingredientInformations.retinol?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.b_car?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.b_car?.value}</span>{ingredientInformations.b_car?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.vitd?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.vitd?.value}</span>{ingredientInformations.vitd?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.vite?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.vite?.value}</span>{ingredientInformations.vite?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.vitk?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.vitk?.value}</span>{ingredientInformations.vitk?.unit}</p>
          </div>
          <DividerUI/>
          <div>
            <h4 className="text-2xl font-semibold text-center">Minerals</h4>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.p?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.p?.value}</span>{ingredientInformations.p?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.i?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.i?.value}</span>{ingredientInformations.i?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.fe?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.fe?.value}</span>{ingredientInformations.fe?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.ca?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.ca?.value}</span>{ingredientInformations.ca?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.k?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.k?.value}</span>{ingredientInformations.k?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.mg?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.mg?.value}</span>{ingredientInformations.mg?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.na?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.na?.value}</span>{ingredientInformations.na?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.nacl?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.nacl?.value}</span>{ingredientInformations.nacl?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.se?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.se?.value}</span>{ingredientInformations.se?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.zn?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.zn?.value}</span>{ingredientInformations.zn?.unit}</p>
          </div>
          <DividerUI/>
          <div>
            <h4 className="text-2xl font-semibold text-center">Other</h4>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.chol?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.chol?.value}</span>{ingredientInformations.chol?.unit}</p>
          </div>
          <div className="flex justify-between items-center px-1" >
            <p>{ingredientInformations.fullk_tot?.name}</p>
            <p><span className="text-1xl font-semibold" >{ingredientInformations.fullk_tot?.value}</span>{ingredientInformations.fullk_tot?.unit}</p>
          </div>
        </div>
      </SectionUI>

      
    </ContainerUI>
  )
}

export default Page