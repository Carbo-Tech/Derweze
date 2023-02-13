export default function handler(req: any, res: any) {

    const requestMethod = req.method;
    const body = JSON.parse(req.body);
    switch (requestMethod) {
        case 'POST':
            console.log(req.body)
            console.log(req.body)
            const reqBody = JSON.stringify({
                "user": {
                    "email": body["email"],
                    "password": body["password"]
                },
                "registry": {
                    "name":body["name"],
                    "surname":body["surname"],
                    "business_name": "c",
                    "vat_number": "c",
                    "telephone_number": body["phone"],
                    "social_security_number": body["fCode"],
                    "is_admin": 0,
                    "address": body["street"],
                    "civic_number": Number(body["streetNumber"]),
                    "cap": body["zipCode"],
                    "city": body["city"],
                    "province": body["province"],
                    "nation": body["nation"]
                }
            })
            console.log(reqBody)
           

            fetch("http://backend:443/signup", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: reqBody

            }).then(response => {console.log(response);response.json()})
                .then(reso => { res.status(200).json({ message: "Ok" }); console.log(reso) })
                .catch(err => console.log(err))





    }
}