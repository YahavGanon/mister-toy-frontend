import React, { useEffect, useState } from 'react';
import { RadialLinearScale, Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { toyService } from '../services/toy.service';
import { useSelector } from 'react-redux';
import { loadToys } from '../store/actions/toy.actions';


ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);




export function Chart() {
    const toys = useSelector(storeState => storeState.toyModule.toys)
    // const [labelCount, setLabelsCount] = useState(toyService.countLabels(toys))
    console.log(toys)
  

    useEffect(() => {
        loadToys()
            .catch(err => {
                showErrorMsg('Cannot load Toys!')
            })
    }, []) 

    const data = {
        datasets: [
            {
                //array of labels
                // label: array[]
                label: '# of Toys',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    

    return (
        <div style={{ width: "400px", height: "400px" }}>
            <Pie className='chart' data={data} />
        </div>
    )
}