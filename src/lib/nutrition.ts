import { Ingredient } from "@prisma/client";

export const NutritionMapp = {
  'sfa': {
    name: 'Sum of saturated fatty acids',
    unit: 'g'
  },
  'mufa': {
    name: 'Sum of monounsaturated fatty acids',
    unit: 'g'
  },
  'pufa': {
    name: 'Sum of polyunsaturated fatty acids',
    unit: 'g'
  },
  'c4_0_c10_0': {
    name: 'Fatty acid 4:0-10:0',
    unit: 'g'
  },
  'c12_0': {
    name: 'Lauric acid C12:0',
    unit: 'g'
  },
  'c14_0': {
    name: 'Myristic acid C14:0',
    unit: 'g'
  },
  'c16_0': {
    name: 'Palmitic acid C16:0',
    unit: 'g'
  },
  'c18_0': {
    name: 'Stearic acid C18:0',
    unit: 'g'
  },
  'c20_0': {
    name: 'Arachidic acid C20:0',
    unit: 'g'
  },
  'c16_1': {
    name: 'Palmitoleic acid C16:1',
    unit: 'g'
  },
  'c18_1': {
    name: 'Oleic acid C18:1',
    unit: 'g'
  },
  'c18_2': {
    name: 'Linoleic acid C18:2',
    unit: 'g'
  },
  'c18_3': {
    name: 'Linolenic acid C18:3',
    unit: 'g'
  },
  'c20_4': {
    name: 'Arachidonic acid C20:4',
    unit: 'g'
  },
  'c20_5': {
    name: 'EPA (Eicosapentaenoic acid, C20:5)',
    unit: 'g'
  },
  'c22_5': {
    name: 'DPA (Docosapentaenoic acid, C22:5)',
    unit: 'g'
  },
  'c22_6': {
    name: 'DHA (Docosahexaenoic acid, C22:6)',
    unit: 'g'
  },
  'chol': {
    name: 'Cholesterol',
    unit: 'mg'
  },
  'mono': {
    name: 'Monosaccharides',
    unit: 'g'
  },
  'di': {
    name: 'Disaccharides',
    unit: 'g'
  },
  'suc': {
    name: 'Sucrose',
    unit: 'g'
  },
  'energy_kcal': {
    name:  'Energy (kcal)',
    unit: 'kcal'
  },
  'ash': {
    name: 'Ash',
    unit: 'g'
  },
  'water': {
    name: 'Water',
    unit: 'g'
  },
  'carbs': {
    name: 'Carbohydrates',
    unit: 'g'
  },
  'prot': {
    name: 'Protein',
    unit: 'g'
  },
  'alc': {
    name: 'Alcohol',
    unit: 'g'
  },
  'fiber': {
    name: 'Dietary fiber',
    unit: 'g'
  },
  'fat': {
    name: 'Fat',
    unit: 'g'
  },
  'p': {
    name: 'Phosphorus',
    unit: 'mg'
  },
  'i': {
    name: 'Iodine',
    unit: 'µg'
  },
  'fe': {
    name: 'Iron',
    unit: 'mg'
  },
  'ca': {
    name: 'Calcium',
    unit: 'mg'
  },
  'k': {
    name: 'Potassium',
    unit: 'mg'
  },
  'mg': {
    name: 'Magnesium',
    unit: 'mg'
  },
  'na': {
    name: 'Sodium',
    unit: 'mg'
  },
  'se': {
    name: 'Selenium',
    unit: 'µg'
  },
  'zn': {
    name: 'Zinc',
    unit: 'mg'
  },
  'vita': {
    name: 'Vitamin A',
    unit: 'RE/µg'
  },
  'retinol': {
    name: 'Retinol',
    unit: 'µg'
  },
  'vitd': {
    name: 'Vitamin D',
    unit: 'µg'
  },
  'vite': {
    name: 'Vitamin E',
    unit: 'mg'
  },
  'b_car': {
    name: 'β-Carotene',
    unit: 'µg'
  },
  'thiam': {
    name: 'Thiamine',
    unit: 'mg'
  },
  'ribofl': {
    name: 'Riboflavin',
    unit: 'mg'
  },
  'vitc': {
    name: 'Vitamin C',
    unit: 'mg'
  },
  'niac': {
    name: 'Niacin',
    unit: 'mg'
  },
  'niek': {
    name: 'Niacin equivalents',
    unit: 'NE/mg'
  },
  'vitb12': {
    name: 'Vitamin B12',
    unit: 'µg'
  },
  'vitb6': {
    name: 'Vitamin B6',
    unit: 'mg'
  },
  'vitk': {
    name: 'Vitamin K',
    unit: 'µg'
  },
  'folate': {
    name: 'Folate',
    unit: 'µg'
  },
  'mono_disack': {
    name: 'Total sugars',
    unit: 'g'
  },
  'fullk_tot': {
    name: 'Total whole grains',
    unit: 'g'
  },
  'nacl': {
    name: 'Salt',
    unit: 'g'
  },
  'socker_t': {
    name: 'Added sugar',
    unit: 'g'
  },
  'socker_f': {
    name: 'Free sugar',
    unit: 'g'
  },
} as const;

type short = keyof typeof NutritionMapp

type NutritionVal = {
  name: string
  unit: string
  value: number
}

type NutritionMapper = {
  [key in short]?: NutritionVal
}

export const nutritionMapper = (ingredient: Ingredient): NutritionMapper => {
  const obj: NutritionMapper = {}
  for (const [key, val] of Object.entries(ingredient)) {
    const k = (key as unknown) as short
    const v = (val as number)
    if (key in NutritionMapp) {
      const map = {
        ...NutritionMapp[k],
        value: v
      }
      obj[k] = map
    }
  }
  return obj
}

type calculateCalsProps = {
  fat: number
  protein: number
  carbs: number
}

export const calculateCals = (props: calculateCalsProps): number => {
  return Number(((props.fat * 9) + (props.protein * 4) + (props.carbs * 4)).toFixed(2))
}