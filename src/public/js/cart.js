const userCart = document.getElementById('userCart');
const labelCant = document.getElementById('cantCart');

const getCantProductsCart = async (id) => {
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }
    // console.log(id);
    const res = await fetch(`/api/cart/${id}/products/count`, options);
    const data = await res.json();
    // console.log(data);
    let cant = 0;
    if(data.success) {
        cant = data.cant;
    }
    else {
        console.warn(data.message);
    }
    labelCant.innerHTML = cant;
    // return cant;
}

getCantProductsCart(userCart.value);