"use client";

import { Chart } from "chart.js";
import 'chartjs-plugin-doughnutlabel';

import { useEffect } from 'react'


type DoughnutChartProps = {
  labels: string[]
  data: number[]
  middleLabelSecondary: string | number
  middleLabelPrimary: string | number
}

const DoughnutChart = (props: DoughnutChartProps) => {
  useEffect(() => {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement | null;

    if (canvas) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        const myChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: props.labels,
            datasets: [
              {
                data: props.data,
                borderColor: ["#3e95cd", "#3cba9f", "#ffa500"],
                backgroundColor: ["#7bb6dd", "#71d1bd", "#ffc04d"],
                fill: false,
              },
            ]
          },
          options: {
            plugins: {
              doughnutlabel: {
                labels: [
                  {
                    text: props.middleLabelSecondary,
                    font: {
                      size: '20',
                    },
                    color: '#000000',
                  },
                  {
                    text: props.middleLabelPrimary, // Sum of the data values
                    font: {
                      size: '30',
                      weight: 'bold',
                    },
                    color: '#000000',
                  },
                ],
              },
            },
          },
        })
        return () => {
          myChart.destroy();
        };
      }
    }

    return undefined;
  }, [props]);


  return (
    <div className="my-2" >
      <canvas id='myChart'className="h-[20vh]" height={50} ></canvas>
    </div>
  )
}

export default DoughnutChart