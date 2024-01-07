const loader1 = document.getElementById("loader1");
const loader2 = document.getElementById("loader2");
// ------------------------------------------ Using fetch() to get the data from the JSON file ------------------------------------------ //

// We need to put all charts into this ".then(jsonData => {" thing for them to work.
// Probably a scope (read as: skill) issue.
//
// Note: JSON file needs to be named EXACTLY like below, no matter what yo mama tells you
setTimeout(() => {

  getData()
      .then((data) => {
          loader1.style.display = "flex";
          loader2.style.display = "flex";
          // This creates all STOCK variables
          let TV_stock = 0;
          let headphones_stock = 0;
          let laptop_stock = 0;
          let tablet_stock = 0;
          let smartphone_stock = 0;
          let camera_stock = 0;
  
          // This creates all LOOKUPS variables
          let TV_lookups = 0;
          let headphones_lookups = 0;
          let laptop_lookups = 0;
          let tablet_lookups = 0;
          let smartphone_lookups = 0;
          let camera_lookups = 0;
  
          // AND THIS... made me cry xD
          // Fo real tho,
          // This iterates through each object in the JSON data
          data.forEach((item) => {
              // This checks if the category is "TV"
              if (item.category === "TV") {
                  // If so, then it adds the "q_in_stock" value to "TV_stock" variable
                  TV_stock += item.q_in_stock;
                  // If there are no matches, it checks whether the "category" matches any of the listed below
              } else if (item.category === "Headphones") {
                  headphones_stock += item.q_in_stock;
              } else if (item.category === "Laptop") {
                  laptop_stock += item.q_in_stock;
              } else if (item.category === "Tablet") {
                  tablet_stock += item.q_in_stock;
              } else if (item.category === "Smartphone") {
                  smartphone_stock += item.q_in_stock;
              } else if (item.category === "Camera") {
                  camera_stock += item.q_in_stock;
              }
              // Same s***, except for lookup variables
              if (item.category === "TV") {
                  TV_lookups += item.lookups;
              } else if (item.category === "Headphones") {
                  headphones_lookups += item.lookups;
              } else if (item.category === "Laptop") {
                  laptop_lookups += item.lookups;
              } else if (item.category === "Tablet") {
                  tablet_lookups += item.lookups;
              } else if (item.category === "Smartphone") {
                  smartphone_lookups += item.lookups;
              } else if (item.category === "Camera") {
                  camera_lookups += item.lookups;
              }
          });
  
          //-------------------------------------------------------- FIRST CHART BELOW HERE --------------------------------------------------------//
          // Staging Area for the chart
          // We need Data, and Options
          // So we create both variables as listed
  
          // Data
          var barChartData = {
              labels: [
                  "TV",
                  "Headphones",
                  "Laptop",
                  "Tablet",
                  "Smartphone",
                  "Camera",
              ],
              datasets: [
                  {
                      label: "Lookups",
                      // These need to be numbers, and since we have variables WITH said numbers, we put them here
                      data: [
                          TV_lookups,
                          headphones_lookups,
                          laptop_lookups,
                          tablet_lookups,
                          smartphone_lookups,
                          camera_lookups,
                      ],
                      backgroundColor: [
                          "#ffa1b5",
                          "#c2a3ff",
                          "#86c7f3",
                          "#93d9d9",
                          "#ffe29a",
                          "#ffc58c",
                      ],
                  },
              ],
          };
  
          // Options
          var barChartOptions = {
              // Scales are something like a background graph
              scales: {
                  y: {
                      beginAtZero: true,
                  },
              },
          };
  
          // This creates the damned thing
          // Here, we need context variable, which we get here
          var barChartCtx = document
              .getElementById("First_Chart_id")
              .getContext("2d");
          // And this creates the actual chart (hopefully)
          var barChart = new Chart(barChartCtx, {
              type: "bar", // This can be 'bar', 'bubble', 'doughnut', 'pie', 'line' etc.
              data: barChartData, // Data is here
              options: barChartOptions, // Options are here
          });
          //-------------------------------------------------------- FIRST CHART ABOVE HERE --------------------------------------------------------//
          //-------------------------------------------------------- SECOND CHART BELOW HERE -------------------------------------------------------//
          // Staging Area again
          // Data
          var barChartData = {
              labels: [
                  "TV",
                  "Headphones",
                  "Laptop",
                  "Tablet",
                  "Smartphone",
                  "Camera",
              ],
              datasets: [
                  {
                      label: "Doughnut Chart text",
                      data: [
                          TV_stock,
                          headphones_stock,
                          laptop_stock,
                          tablet_stock,
                          smartphone_stock,
                          camera_stock,
                      ],
                      backgroundColor: [
                          "#ffa1b5",
                          "#c2a3ff",
                          "#86c7f3",
                          "#93d9d9",
                          "#ffe29a",
                          "#ffc58c",
                      ],
                  },
              ],
          };
  
          // Options
          var barChartOptions = {
              // DON'T EVEN TOUCH THIS
              // pls
          };
  
          // Create the abomination
          var barCtx = document
              .getElementById("Second_Chart_id")
              .getContext("2d");
          var barChart = new Chart(barCtx, {
              type: "doughnut",
              data: barChartData,
              options: barChartOptions,
          });
      })
      // Here is the Backup request.
      // If the first one returns an error, a "backup API" will be used. That's our "some_schematic.json" file.
      .catch((error) => {
          console.error("Error fetching data:", error);
      })
      .finally(() => {
        // This hides the loader when the chart is loaded
          loader1.style.display = "none";
          loader2.style.display = "none";
      });
  //-------------------------------------------------------- SECOND CHART ABOVE HERE -------------------------------------------------------//
  //-------------------------------------------------------- TABLE CHART BELOW HERE -------------------------------------------------------//
}, 600);
