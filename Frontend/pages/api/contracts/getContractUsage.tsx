export default function handler(req:any, res:any) {

    const requestMethod = req.method;
    const body = JSON.parse(req.body);
    switch (requestMethod) {
      case 'POST':
        console.log("body",JSON.stringify({"token":body["access_token"],"idContract":body["idContract"]}) )
        fetch("http://backend:443/getContractUsage/", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"token":body["access_token"],"idContract":body["idContract"],"utility":body["utility"]}) 

              
        }).then(response => {return response.json()})
            .then(reso => {res.status(200).json({...reso});})
            .catch(err => console.log(err))         
    }
  }