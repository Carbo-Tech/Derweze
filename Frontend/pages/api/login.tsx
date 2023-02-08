export default function handler(req:any, res:any) {

    const requestMethod = req.method;
    const body = JSON.parse(req.body);
    switch (requestMethod) {
      case 'POST':
        console.log(req.body)
        console.log(req.body)
        fetch("http://backend:443/login/", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: req.body  
              
        }).then(response => response.json())
            .then(reso => {res.status(200).json({ message:  {reso} });console.log(reso)})
            .catch(err => console.log(err))

        
        


    }
  }