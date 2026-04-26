export async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch");

     const data = await res.json();

    return data // IMPORTANT
  
  } catch (error) {
    console.error(error);
    return [];
  }
}


export async function getProductById(id: string) {
  try{
  const res = await fetch(`https://fakestoreapi.com/products/${id}`,{
   cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch");

     const data = await res.json();

    return data
  } catch (error) {
    console.error(error);
    return [];
  }
}
