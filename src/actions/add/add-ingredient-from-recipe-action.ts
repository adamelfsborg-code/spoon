"use server"

import getErrorMessage from "<spoon>/lib/error";
import prisma from "<spoon>/lib/prisma";

type AddIngredientFromRecipeActionProps = FormData

const AddIngredientFromRecipeAction = async (props: AddIngredientFromRecipeActionProps) => {
  try {
    const recipe = props.get('recipe')
    const category = props.get('category')

    const ingredient = await prisma.$executeRaw`
      INSERT INTO ingredient 
      (
        category_id, 
        "name", 
        sfa,
        mufa,
        pufa,
        c4_0_c10_0,
        c12_0,
        c14_0,
        c16_0,
        c18_0,
        c20_0,
        c16_1,
        c18_1,
        c18_2,
        c18_3,
        c20_4,
        c20_5,
        c22_5,
        c22_6,
        chol,
        mono,
        di,
        suc,
        energy_kcal,
        ash,
        water,
        waste,
        carbs,
        prot,
        alc,
        fiber,
        fat,
        p,
        i,
        fe,
        ca,
        k,
        mg,
        na,
        se,
        zn,
        vita,
        retinol,
        vitd,
        vite,
        b_car,
        thiam,
        ribofl,
        vitc,
        niac,
        niek,
        vitb12,
        vitb6,
        folate,
        mono_disack,
        fullk_tot,
        nacl,
        socker_t,
        socker_f
      )
      SELECT 
        ${category}::uuid, 
        r."name",
        sum(sfa),
        sum(mufa),
        sum(pufa),
        sum(c4_0_c10_0),
        sum(c12_0),
        sum(c14_0),
        sum(c16_0),
        sum(c18_0),
        sum(c20_0),
        sum(c16_1),
        sum(c18_1),
        sum(c18_2),
        sum(c18_3),
        sum(c20_4),
        sum(c20_5),
        sum(c22_5),
        sum(c22_6),
        sum(chol),
        sum(mono),
        sum(di),
        sum(suc),
        sum(energy_kcal),
        sum(ash),
        sum(water),
        sum(waste),
        sum(carbs),
        sum(prot),
        sum(alc),
        sum(fiber),
        sum(fat),
        sum(p),
        sum(i),
        sum(fe),
        sum(ca),
        sum(k),
        sum(mg),
        sum(na),
        sum(se),
        sum(zn),
        sum(vita),
        sum(retinol),
        sum(vitd),
        sum(vite),
        sum(b_car),
        sum(thiam),
        sum(ribofl),
        sum(vitc),
        sum(niac),
        sum(niek),
        sum(vitb12),
        sum(vitb6),
        sum(folate),
        sum(mono_disack),
        sum(fullk_tot),
        sum(nacl),
        sum(socker_t),
        sum(socker_f)
      FROM recipe r 
      JOIN ingredient_in_recipe iir ON r.id = iir.recipe_id 
      JOIN ingredient i ON i.id = iir.ingredient_id
      WHERE r.id = ${recipe}::uuid
      GROUP BY r."name";
    `
  return {
    data: ingredient
  }

  } catch (e) {
    return {
      error: getErrorMessage(e)
    }
  }

}

export default AddIngredientFromRecipeAction;