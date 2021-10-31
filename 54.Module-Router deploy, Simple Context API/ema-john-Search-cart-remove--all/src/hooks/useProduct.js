const { useEffect } = require("react");
const { useState } = require("react")

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    //return product;
    return [products, setProducts];
}

export default useProducts;