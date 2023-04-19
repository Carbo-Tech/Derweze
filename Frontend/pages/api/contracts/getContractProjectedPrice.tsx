export default function handler(req:any, res:any) {

    const requestMethod = req.method;
    console.log(req.body)
    const body = JSON.parse(req.body);
    switch (requestMethod) {
      case 'POST':

        fetch("http://backend:443/getContractProjectedPrice/", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({token:body["access_token"],idContract:body["idContract"]}) 
              
        }).then(response => response.json())
            .then(reso => {res.status(200).json({...reso});console.log(reso)})
            .catch(err => console.log(err))         
    }
  }