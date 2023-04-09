
export async function getUserData(token:string){
    const res = await fetch("http://backend:443/getUserDataToken/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "access_token":token
      }),
    });

    const registry=await res.json();
    if (res.ok && registry) {
        return registry;
      } else {
        throw new Error("Invalid token");
      };
    return registry
}