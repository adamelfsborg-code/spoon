import React from 'react'
import DoughnutChart from './chart/doughnut-chart'

type MacroDoughnutChartProps = {
  cals: number
  protien: number
  fat: number
  carbs: number
}

const MacroDoughnutChart = (props: MacroDoughnutChartProps) => {
  return (
    <DoughnutChart 
      labels={['Protien', 'Fat', 'Carbs']} 
      data={[props.protien, props.fat, props.carbs]}
      middleLabelSecondary='Kcal'
      middleLabelPrimary={props.cals}
    />
  )
}

export default MacroDoughnutChart