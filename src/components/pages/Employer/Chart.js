import React from 'react';
import { Chart } from "react-google-charts";

const Charts = () =>{

    const data = [
        ["Task", "Hours per Day"],
        ["Job Posted", 23],
        ["Total Applications", 198],
        ["Shortlisted Resume", 50],
        ["Hired", 6]
      ];

      const options = {
       //  title: "My Daily Activities",
        is3D: true,
      };
         
     return(<>
     <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
     </>)

    // return(<>
    //         <PieChart
    //             data={[
    //             { title: 'One', value: 10, color: '#E38627' },
    //             { title: 'Two', value: 15, color: '#C13C37' },
    //             { title: 'Three', value: 20, color: '#6A2135' },
    //             ]}
    //         />;
    // </>)


}
export default Charts