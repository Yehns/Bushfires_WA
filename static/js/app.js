let url1 = "http://127.0.0.1:5000/api/v1.0/coords"
let url2 = "http://127.0.0.1:5000/api/v1.0/per_year"
let url3 = "http://127.0.0.1:5000/api/v1.0/season"

let xValues = []
let yValues1 = []
let yValues2 = []
let xValues3 = []
let yValues3 = []

d3.json(url3).then((data) => {
  console.log(data)
  for (let i = 0; i < data.length; i++) {
  
    xValues.push(data[i][0]);
    yValues1.push(data[i][1]);
  }
      // set data for chart creation
    let chartData = [{
        x: xValues,
        y: yValues1,
        type: "bar",
        // text: hovertext
    }];

    
    // set up the layout
    let layout = {
        // hovermode: "closest",
        xaxis: {title: 'Season'},
        title: "Total number of Fires per Season"
    };
    console.log(xValues)
    // create the chart
    Plotly.newPlot("bar", chartData, layout);
  });

  d3.json(url3).then((data) => {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
    
      xValues.push(data[i][0]);
      yValues2.push(data[i][2]);
    }
        // set data for chart creation
      let chartData1 = [{
          x: xValues,
          y: yValues2,
          type: "bar",
          // text: hovertext
      }];
  
      
      // set up the layout
      let layout = {
          // hovermode: "closest",
          xaxis: {title: 'Season'},
          title: "Average Fire Size (ha) per season"
      };
      console.log(xValues)
      // create the chart
      Plotly.newPlot("size", chartData1, layout);
    });

    d3.json(url2).then((data) => {
      console.log(data)
      for (let i = 0; i < data.length; i++) {
      
        xValues3.push(data[i][0]);
        yValues3.push(data[i][1]);
        
      }
          // set data for chart creation
        let chartData2 = [{
            x: xValues3,
            y: yValues3,
            type: "scatter",
            // text: hovertext
        }];
    
        
        // set up the layout
        let layout = {
            // hovermode: "closest",
            xaxis: {title: 'Year'},
            title: "Total Fires per Year"
        };
        console.log(xValues)
        // create the chart
        Plotly.newPlot("year", chartData2, layout);
      });




      
            
            
      
        
// });
// // function to create a bar chart based on sample chosen
//   function barChart(sample){
//     // retrieve data and separte it for use
//     d3.json(url3).then((data) => {
//     //   let dataSample = data.samples;
//     //   let dataSampleID = dataSample.filter(object => object.id == sample);
//     //   let firstItem = dataSampleID[0];
//     //   let value = data.names;
//     // // set up data for use in chart
//     let xValues = data[0];
//     let yValues1 = data[1];
//     // let yValues2 = data[2];
//     // let hovertext = firstItem['otu_labels'].slice(0,10).reverse();
//     // set data for chart creation
//     let chartData = [{
//         x: xValues,
//         y: yValues1,
//         type: "bar",
//         // text: hovertext
//     }];
//     // set up the layout
//     let layout = {
//         // hovermode: "closest",
//         xaxis: {title: 'Season'},
//         title: "Sample Values vs OTU ID"
//     };
//     // create the chart
//     Plotly.newPlot("bar", chartData, layout);
//   })};

// // function to create a bubble chart based on sample chosen
//   function bubbleChart(sample){
//     // retrieve data and separte it for use
//     d3.json(url).then((data) => {
//       let dataSample = data.samples;
//       let dataSampleID = dataSample.filter(object => object.id == sample);
//       let firstItem = dataSampleID[0];
//       let value = data.names;
//     // set data for chart creation
//     let bubbleChart1 = {
//         x: firstItem['otu_ids'],
//         y: firstItem['sample_values'],
//         mode: 'markers',
//         marker: {
//             color: firstItem['otu_ids'],
//             size: firstItem['sample_values'],
//             colorscale: "Jet"
//         }};
//     // set data for chart
//     let bubbleData = [bubbleChart1]
//     // set up the layout
//     let layout = {
//         xaxis: {title: 'OTU ID'},
//         yaxis: {title: 'Sample Value'},
//         title: "Sample Values vs OTU ID"
//     }
//     // create the chart
//     Plotly.newPlot("bubble", bubbleData, layout);
//   });

// };

// function to add the metadata to the table based on sample chosen
// function metaData(sample){
//   let panel = d3.select("#sample-metadata")
//   d3.json(url).then((data) => {
//     let metaData = data.metadata;
//     let metaDataID = metaData.filter(object => object.id == sample);
//     let firstItem = metaDataID[0];
//   panel.html('');
//   for (key in firstItem){
//     panel.append('h6').text(`${key}: ${firstItem[key]}`)
//   };

// })};

// set function to initiate the page
function init(){
  // let value = [];
  // d3.json(url).then((data) => {
  //   let data_sample = data.samples
  //   for (let i = 0; i < data_sample.length; i++) {
  //     row = data_sample[i];
  //     value.push(row.id);
  //   };

  // append the list of sample ID's to the drop down box
  // d3.select("#selDataset")
  // .selectAll('ID Select')
  //    .data(value)
  // .enter()
  //   .append('option')
  // .text(function (d) { return d; }) // text showed in the menu
  // .attr("value", function (d) { return d; }) // corresponding value returned by the button
  
  // initiate the charts based on the first ID in the list
  barChart;
  // bubbleChart('940');
  // metaData('940')
// })};
}
init();

// set the function to change the graphs when ID is changed in the drop down box
function optionChanged(IDchange){
  barChart(IDchange);
  // bubbleChart(IDchange);
  // metaData(IDchange)
};