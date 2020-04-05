import * as React from 'react';
import * as Chart from 'chart.js';
import * as Styled from './TrendChart.styled';
import { DataContext } from '../../data-provider/DataContext';
import { Color } from '../../../resources/constants';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export function TrendChart(): React.ReactElement {
    const ref = React.useRef(null);
    const { incidentCountByMonth, isLoading } = React.useContext(DataContext);
    const currentMonthIndex = new Date().getMonth();

    React.useEffect(() => {
        if (!ref.current) return;

        requestAnimationFrame(() => {
            const data: number[] = [];
            for (const month in incidentCountByMonth) data.push(incidentCountByMonth[month]);

            const context = ref.current.getContext('2d');
            new Chart(context, {
                type: 'line',
                data: {
                    labels: months.slice(0, currentMonthIndex),
                    datasets: [
                        {
                            label: '',
                            data,
                            backgroundColor: 'transparent',
                            borderColor: Color.PrimaryColor,
                            borderWidth: 1,
                            pointBackgroundColor: Color.PrimaryColor,
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
