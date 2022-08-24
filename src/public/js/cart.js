const userCart = document.getElementById('userCart');
const labelCant = document.getElementById('cantCart');
const btnCheckout = document.querySelector('.btnCheckout button');

// Handlebars.registerHelper("multiply", function (multiplicand, multiplier) {
//     return multiplicand * multiplier;
// });

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

// Eventos
btnCheckout.addEventListener('click', async (e) => {
    e.preventDefault();
    Swal.fire({
        title: '¿Desea procesar el pedido?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0d6efd',
        cancelButtonColor: '#dc3545',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
    }).then(async (result) => {
        if (result.value) {

        }
    });
});

getCantProductsCart(userCart.value);