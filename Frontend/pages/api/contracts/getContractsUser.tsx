export default function handler(req:any, res:any) {

    const requestMethod = req.method;
    const body = JSON.parse(req.body);
    switch (requestMethod) {
      case 'POST':

        fetch("http://backend:443/getContractsUser/", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({access_token:body["access_token"]}) 
              
        }).then(response => response.json())
            .then(reso => {res.status(200).json({...reso});})
            .catch(err => console.log(err))         
    }
  }