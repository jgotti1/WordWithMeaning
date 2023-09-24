const url = "https://wordsapiv1.p.rapidapi.com/words/mountain/rhymes";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "51a73ce2ccmshf14d3d4233f4ae8p123462jsn5d553cf71789",
    "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
  },
};
const getTeamInfo = async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
   
    console.log(typeof result.rhymes.all)
    
    //  "distributionCertificate": {
    //     "path": "/cert.cer",
    //     "password": "Ryleigh0911!"
    // }
    
    console.log('----------------')
    // Check if 'definitions' is present in the result
    // if (result.similarTo) {
    //   // Iterate through the definitions and log each one
    //   result.similarTo.forEach((usage, index) => {
    //     console.log(`Definition ${index + 1}: ${usage.similarTo}`);
    //   });
    // } else {
    //   console.log("No definitions found.");
    // }
  } catch (error) {
    console.error(error);
  }
};

getTeamInfo();
