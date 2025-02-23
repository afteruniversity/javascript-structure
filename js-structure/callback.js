//                  C A L L B A C K
function fetchData(callback) {
    setTimeout(() => {
      console.log("Data fetched!");
      callback(); // Callback é chamado assim que a operação é terminada
    }, 2000);
  }
  
  // Callback function
  function processData() {
    console.log("Processing the fetched data...");
  }
  
  // 
  fetchData(processData);
  