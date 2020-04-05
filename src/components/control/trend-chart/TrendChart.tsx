import * as React from 'react';
import * as Chart from 'chart.js';
import * as Styled from './TrendChart.styled';
import { DataContext } from '../../data-provider/DataContext';

export function TrendChart(): React.ReactElement {
    const ref = React.useRef(null);
    const { incidentCountByMonth, isLoading } = React.useContext(DataContext);

    React.useEffect(() => {
        if (!ref.current) return;

        requestAnimationFrame(() => {
            const data: number[] = [];
            for (const month in incidentCountByMonth) data.push(incidentCountByMonth[month]);

            const context = ref.current.getContext('2d');
            new Chart(context, {
                type: 'line',
                data: {
                    //labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
                    datasets: [
                        {
                            label: '',
                            data,
                            backgroundColor: 'transparent',
                            borderColor: 'rgb(255, 23, 72)',
                            borderWidth: 1,
                            pointBackgroundColor: 'rgb(255, 23, 72)',
                        },
                    ],
                },
                options: {
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                    legend: {
                        display: false,
                    },
                },
            });
        });
    }, [incidentCountByMonth]);

    return (
        <Styled.Root>
            <canvas ref={ref} />
        </Styled.Root>
    );
}
