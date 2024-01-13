"use client";

import { useEffect, useState } from "react";
import { calculateCals, nutritionMapper } from "<spoon>/lib/nutrition";
import { type Ingredient } from "@prisma/client";
import ContainerUI from "./ui/container-ui";
import DividerUI from "./ui/divider-ui";
import InputUI from "./ui/input-ui";
import SectionUI from "./ui/section-ui";
import ButtonUI from "./ui/button-ui";
import addNutritionFactsAction from "<spoon>/actions/add-nutrition-facts-action";
import { toast } from "react-hot-toast";

type AddNutritionFactsFormProps = {
  ingredient: Ingredient;
};

const AddNutritionFactsForm = (props: AddNutritionFactsFormProps) => {
  const ingredientInformations = nutritionMapper(props.ingredient);
  const [totalFat, setTotalFat] = useState(props.ingredient.fat)
  const [totalProt, setTotalProt] = useState(props.ingredient.prot)
  const [totalCarbs, setTotalCarbs] = useState(props.ingredient.carbs)
  const [totalCals, setTotalCals] = useState(props.ingredient.energy_kcal)

  useEffect(() => {
    setTotalCals(calculateCals({ protein: totalProt, carbs: totalCarbs, fat: totalFat }))
  }, [totalFat, totalCarbs, totalProt])

  const handleFormAction = async (formData: FormData) => {
    const ingredient = await addNutritionFactsAction(formData)

    if (ingredient.error) {
      return toast.error(ingredient.error);
    } 

    toast.success('Ingredient updated');
  }

  return (
    <ContainerUI className="flex flex-col gap-4">
      <form action={handleFormAction}>
        <InputUI type="hidden" name="ingredient" value={props.ingredient.id} />
        <InputUI type="hidden" name="energy_kcal" value={totalCals} />

        <SectionUI className="flex flex-col" >
          <ButtonUI className='w-full'>Update</ButtonUI>
        </SectionUI>
        
        <SectionUI className="flex justify-center">
          <div className="border border-black w-[15vw] rounded">
            <div>
              <h2 className="text-3xl font-bold text-center">Nutrition Facts</h2>
            </div>
            <DividerUI />
            <div className="flex justify-between px-1">
              <p>Serving Size</p>
              <p>
                <span className="text-1xl font-semibold">100</span>g
              </p>
            </div>
            <DividerUI className="h-[1vh] bg-black" />
            <div className="flex justify-between items-center px-1">
              <p className="text-3xl font-bold" >{ingredientInformations.energy_kcal?.name}</p>
              <p className="text-5xl font-bold" >{totalCals}</p>
            </div>
            <DividerUI />
            <div>
              <h4 className="text-2xl font-semibold text-center">Main</h4>
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='fat'
                type="number"
                onChange={(e) => setTotalFat(Number(e.target.value))}
                value={totalFat}
                label={`${ingredientInformations.fat?.name} (${ingredientInformations.fat?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='prot'
                type="number"
                value={totalProt}
                onChange={(e) => setTotalProt(Number(e.target.value))}
                label={`${ingredientInformations.prot?.name} (${ingredientInformations.prot?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='carbs'
                type="number"
                value={totalCarbs}
                onChange={(e) => setTotalCarbs(Number(e.target.value))}
                label={`${ingredientInformations.carbs?.name} (${ingredientInformations.carbs?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='fiber'
                defaultValue={ingredientInformations.fiber?.value}
                label={`${ingredientInformations.fiber?.name} (${ingredientInformations.fiber?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='water'
                defaultValue={ingredientInformations.water?.value}
                label={`${ingredientInformations.water?.name} (${ingredientInformations.water?.unit})`}
              />
            </div>
            <DividerUI />
            <div>
              <h4 className="text-2xl font-semibold text-center">Suger</h4>
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='mono_disack'
                defaultValue={ingredientInformations.mono_disack?.value}
                label={`${ingredientInformations.mono_disack?.name} (${ingredientInformations.mono_disack?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='mono'
                defaultValue={ingredientInformations.mono?.value}
                label={`${ingredientInformations.mono?.name} (${ingredientInformations.mono?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='di'
                defaultValue={ingredientInformations.di?.value}
                label={`${ingredientInformations.di?.name} (${ingredientInformations.di?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='socker_f'
                defaultValue={ingredientInformations.socker_f?.value}
                label={`${ingredientInformations.socker_f?.name} (${ingredientInformations.socker_f?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='socker_t'
                defaultValue={ingredientInformations.socker_t?.value}
                label={`${ingredientInformations.socker_t?.name} (${ingredientInformations.socker_t?.unit})`}
              />
            </div>
            <DividerUI />
            <div>
              <h4 className="text-2xl font-semibold text-center">Fatty Acids</h4>
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='sfa'
                defaultValue={ingredientInformations.sfa?.value}
                label={`${ingredientInformations.sfa?.name} (${ingredientInformations.sfa?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='c4_0_c10_0'
                defaultValue={ingredientInformations.c4_0_c10_0?.value}
                label={`${ingredientInformations.c4_0_c10_0?.name} (${ingredientInformations.c4_0_c10_0?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='c12_0'
                defaultValue={ingredientInformations.c12_0?.value}
                label={`${ingredientInformations.c12_0?.name} (${ingredientInformations.c12_0?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='c14_0'
                defaultValue={ingredientInformations.c14_0?.value}
                label={`${ingredientInformations.c14_0?.name} (${ingredientInformations.c14_0?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='c16_0'
                defaultValue={ingredientInformations.c16_0?.value}
                label={`${ingredientInformations.c16_0?.name} (${ingredientInformations.c16_0?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='c18_0'
                defaultValue={ingredientInformations.c18_0?.value}
                label={`${ingredientInformations.c18_0?.name} (${ingredientInformations.c18_0?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='c20_0'
                defaultValue={ingredientInformations.c20_0?.value}
                label={`${ingredientInformations.c20_0?.name} (${ingredientInformations.c20_0?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='mufa'
                defaultValue={ingredientInformations.mufa?.value}
                label={`${ingredientInformations.mufa?.name} (${ingredientInformations.mufa?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='c16_1'
                defaultValue={ingredientInformations.c16_1?.value}
                label={`${ingredientInformations.c16_1?.name} (${ingredientInformations.c16_1?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='c18_1'
                defaultValue={ingredientInformations.c18_1?.value}
                label={`${ingredientInformations.c18_1?.name} (${ingredientInformations.c18_1?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='pufa'
                defaultValue={ingredientInformations.pufa?.value}
                label={`${ingredientInformations.pufa?.name} (${ingredientInformations.pufa?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='c18_2'
                defaultValue={ingredientInformations.c18_2?.value}
                label={`${ingredientInformations.c18_2?.name} (${ingredientInformations.c18_2?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='c18_3'
                defaultValue={ingredientInformations.c18_3?.value}
                label={`${ingredientInformations.c18_3?.name} (${ingredientInformations.c18_3?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='c20_4'
                defaultValue={ingredientInformations.c20_4?.value}
                label={`${ingredientInformations.c20_4?.name} (${ingredientInformations.c20_4?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='c20_5'
                defaultValue={ingredientInformations.c20_5?.value}
                label={`${ingredientInformations.c20_5?.name} (${ingredientInformations.c20_5?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='c22_5'
                defaultValue={ingredientInformations.c22_5?.value}
                label={`${ingredientInformations.c22_5?.name} (${ingredientInformations.c22_5?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='c22_6'
                defaultValue={ingredientInformations.c22_6?.value}
                label={`${ingredientInformations.c22_6?.name} (${ingredientInformations.c22_6?.unit})`}
              />
            </div>
            <DividerUI />
            <div>
              <h4 className="text-2xl font-semibold text-center">Vitamins</h4>
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='thiam'
                defaultValue={ingredientInformations.thiam?.value}
                label={`${ingredientInformations.thiam?.name} (${ingredientInformations.thiam?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='ribofl'
                defaultValue={ingredientInformations.ribofl?.value}
                label={`${ingredientInformations.ribofl?.name} (${ingredientInformations.ribofl?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='niac'
                defaultValue={ingredientInformations.niac?.value}
                label={`${ingredientInformations.niac?.name} (${ingredientInformations.niac?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='niek'
                defaultValue={ingredientInformations.niek?.value}
                label={`${ingredientInformations.niek?.name} (${ingredientInformations.niek?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='vitb6'
                defaultValue={ingredientInformations.vitb6?.value}
                label={`${ingredientInformations.vitb6?.name} (${ingredientInformations.vitb6?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='folate'
                defaultValue={ingredientInformations.folate?.value}
                label={`${ingredientInformations.folate?.name} (${ingredientInformations.folate?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='vitb12'
                defaultValue={ingredientInformations.vitb12?.value}
                label={`${ingredientInformations.vitb12?.name} (${ingredientInformations.vitb12?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='vitc'
                defaultValue={ingredientInformations.vitc?.value}
                label={`${ingredientInformations.vitc?.name} (${ingredientInformations.vitc?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='vita'
                defaultValue={ingredientInformations.vita?.value}
                label={`${ingredientInformations.vita?.name} (${ingredientInformations.vita?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='retinol'
                defaultValue={ingredientInformations.retinol?.value}
                label={`${ingredientInformations.retinol?.name} (${ingredientInformations.retinol?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='b_car'
                defaultValue={ingredientInformations.b_car?.value}
                label={`${ingredientInformations.b_car?.name} (${ingredientInformations.b_car?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='vitd'
                defaultValue={ingredientInformations.vitd?.value}
                label={`${ingredientInformations.vitd?.name} (${ingredientInformations.vitd?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='vite'
                defaultValue={ingredientInformations.vite?.value}
                label={`${ingredientInformations.vite?.name} (${ingredientInformations.vite?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='vitk'
                defaultValue={ingredientInformations.vitk?.value}
                label={`${ingredientInformations.vitk?.name} (${ingredientInformations.vitk?.unit})`}
              />
            </div>
            <DividerUI />
            <div>
              <h4 className="text-2xl font-semibold text-center">Minerals</h4>
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='p'
                defaultValue={ingredientInformations.p?.value}
                label={`${ingredientInformations.p?.name} (${ingredientInformations.p?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='i'
                defaultValue={ingredientInformations.i?.value}
                label={`${ingredientInformations.i?.name} (${ingredientInformations.i?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='fe'
                defaultValue={ingredientInformations.fe?.value}
                label={`${ingredientInformations.fe?.name} (${ingredientInformations.fe?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='ca'
                defaultValue={ingredientInformations.ca?.value}
                label={`${ingredientInformations.ca?.name} (${ingredientInformations.ca?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='k'
                defaultValue={ingredientInformations.k?.value}
                label={`${ingredientInformations.k?.name} (${ingredientInformations.k?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='mg'
                defaultValue={ingredientInformations.mg?.value}
                label={`${ingredientInformations.mg?.name} (${ingredientInformations.mg?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='na'
                defaultValue={ingredientInformations.na?.value}
                label={`${ingredientInformations.na?.name} (${ingredientInformations.na?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='nacl'
                defaultValue={ingredientInformations.nacl?.value}
                label={`${ingredientInformations.nacl?.name} (${ingredientInformations.nacl?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='se'
                defaultValue={ingredientInformations.se?.value}
                label={`${ingredientInformations.se?.name} (${ingredientInformations.se?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='zn'
                defaultValue={ingredientInformations.zn?.value}
                label={`${ingredientInformations.zn?.name} (${ingredientInformations.zn?.unit})`}
              />
            </div>
            <DividerUI />
            <div>
              <h4 className="text-2xl font-semibold text-center">Other</h4>
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='chol'
                defaultValue={ingredientInformations.chol?.value}
                label={`${ingredientInformations.chol?.name} (${ingredientInformations.chol?.unit})`}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <InputUI
                name='fullk_tot'
                defaultValue={ingredientInformations.fullk_tot?.value}
                label={`${ingredientInformations.fullk_tot?.name} (${ingredientInformations.fullk_tot?.unit})`}
              />
            </div>
          </div>
        </SectionUI>
      </form>
    </ContainerUI>
  );
};

export default AddNutritionFactsForm;
