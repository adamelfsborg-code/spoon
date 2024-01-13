import { type Ingredient } from "@prisma/client"
import { sumArray } from "./math"

type CalculateTotalMacroProps = Ingredient[]

type CalculateTotalMacroResponse = {
  protien: number
  fat: number
  carbs: number
  cals: number
}

const calculateTotalMacro = (props: CalculateTotalMacroProps | undefined): CalculateTotalMacroResponse => {
  if (!props || props.length === 0) return {
    protien: 0,
    fat: 0,
    carbs: 0,
    cals: 0,
  };
  const keysToSum: (keyof CalculateTotalMacroResponse)[] = ['protien', 'carbs', 'fat', 'cals'];
  const newArr: CalculateTotalMacroResponse[] = props.map((row) => {
    return { protien: row.prot, fat: row.fat, carbs: row.carbs, cals: row.energy_kcal }
  } )
  const summedResult = sumArray({ array: newArr, keys: keysToSum });

  const roundedResult: CalculateTotalMacroResponse = summedResult;
  keysToSum.forEach((key) => {
    if (summedResult[key]) {
      roundedResult[key] = parseFloat(summedResult[key].toFixed(1));
    } 
  });

  return roundedResult
}

export default calculateTotalMacro;