"use server"

import getErrorMessage from "<spoon>/lib/error";
import prisma from "<spoon>/lib/prisma";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

type AddNutritionFactsActionProps = FormData

const addNutritionFactsAction = async (props: AddNutritionFactsActionProps) => {
  const id = props.get('ingredient') as string

  const kcal = Number(props.get('energy_kcal'))
  const fat = Number(props.get('fat'))
  const prot = Number(props.get('prot'))
  const carbs = Number(props.get('carbs'))
  const fiber = Number(props.get('fiber'))
  const water = Number(props.get('water'))
  const mono_disack = Number(props.get('mono_disack'))
  const mono = Number(props.get('mono'))
  const di = Number(props.get('di'))
  const socker_f = Number(props.get('socker_f'))
  const socker_t = Number(props.get('socker_t'))
  const sfa = Number(props.get('sfa'))
  const c4_0_c10_0 = Number(props.get('c4_0_c10_0'))
  const c12_0 = Number(props.get('c12_0'))
  const c14_0 = Number(props.get('c14_0'))
  const c16_0 = Number(props.get('c16_0'))
  const c18_0 = Number(props.get('c18_0'))
  const c20_0 = Number(props.get('c20_0'))
  const mufa = Number(props.get('mufa'))
  const c16_1 = Number(props.get('c16_1'))
  const c18_1 = Number(props.get('c18_1'))
  const pufa = Number(props.get('pufa'))
  const c18_2 = Number(props.get('c18_2'))
  const c18_3 = Number(props.get('c18_3'))
  const c20_4 = Number(props.get('c20_4'))
  const c20_5 = Number(props.get('c20_5'))
  const c22_6 = Number(props.get('c22_6'))
  const thiam = Number(props.get('thiam'))
  const ribofl = Number(props.get('ribofl'))
  const niac = Number(props.get('niac'))
  const niek = Number(props.get('niek'))
  const vitb6 = Number(props.get('vitb6'))
  const folate = Number(props.get('folate'))
  const vitb12 = Number(props.get('vitb12'))
  const vitc = Number(props.get('vitc'))
  const vita = Number(props.get('vita'))
  const retinol = Number(props.get('retinol'))
  const b_car = Number(props.get('b_car'))
  const vitd = Number(props.get('vitd'))
  const vite = Number(props.get('vite'))
  const vitk = Number(props.get('vitk'))
  const p = Number(props.get('p'))
  const i = Number(props.get('i'))
  const fe = Number(props.get('fe'))
  const ca = Number(props.get('ca'))
  const k = Number(props.get('k'))
  const mg = Number(props.get('mg'))
  const na = Number(props.get('na'))
  const nacl = Number(props.get('nacl'))
  const se = Number(props.get('se'))
  const zn = Number(props.get('zn'))
  const chol = Number(props.get('chol'))
  const fullk_tot = Number(props.get('fullk_tot'))

  try {
    const ingredient = await prisma.ingredient.update({
      where: {
        id: id
      },
      data: {
        energy_kcal: kcal,
        fat: fat,
        prot: prot,
        carbs: carbs,
        fiber: fiber,
        water: water,
        mono_disack: mono_disack,
        mono: mono,
        di: di,
        socker_f: socker_f,
        socker_t: socker_t,
        sfa: sfa,
        c4_0_c10_0: c4_0_c10_0,
        c12_0: c12_0,
        c14_0: c14_0,
        c16_0: c16_0,
        c18_0: c18_0,
        c20_0: c20_0,
        mufa: mufa,
        c16_1: c16_1,
        c18_1: c18_1,
        pufa: pufa,
        c18_2: c18_2,
        c18_3: c18_3,
        c20_4: c20_4,
        c20_5: c20_5,
        c22_6: c22_6,
        thiam: thiam,
        ribofl: ribofl,
        niac: niac,
        niek: niek,
        vitb6: vitb6,
        folate: folate,
        vitb12: vitb12,
        vitc: vitc,
        vita: vita,
        retinol: retinol,
        b_car: b_car,
        vitd: vitd,
        vite: vite,
        vitk: vitk,
        p: p,
        i: i,
        fe: fe,
        ca: ca,
        k: k,
        mg: mg,
        na: na, 
        nacl: nacl,
        se: se,
        zn: zn,
        chol: chol,
        fullk_tot: fullk_tot,
      }
    });

    revalidatePath(`/ingredients/builder/${id}`)

    return {
      data: ingredient
    }

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        return {
          error: 'Cannot update ingredient'
        }
      }
    }
    console.log(e)
    return {
      error: getErrorMessage(e)
    }
  }
}

export default addNutritionFactsAction;