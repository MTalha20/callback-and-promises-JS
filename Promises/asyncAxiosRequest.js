const axios = require('axios').default;


const connectToURL = (url)=>{
    const req = axios.get(url);
    console.log(req);
    req.then(resp => {
        console.log("Fulfilled")
        console.log("content loaded");
    })
    .catch(err => {
        console.log("Rejected for url "+url)
        console.log(err.toString())
    });
}
//Valid URL
connectToURL('https://github.com/MTalha20/CoreModules_NodeJS/blob/master/pathModule/index.js');
//Invali URL
connectToURL('https://github.com/MTalha20/CoreModules_NodeJS/blob/master/pathModule/indexa.js');
