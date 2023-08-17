const getProduct = async () => {
    const data:any = await fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(json=>console.log(json))
    return data;
}
export default getProduct