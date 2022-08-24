const ProductService = require('../services/product.service');
const product = new ProductService();

const login = (req, res) => {
    res.render('login', { title: 'Iniciar sesión' });
}
const signup = (req, res) => {
    res.render('signup', { title: 'Registro' });
}
const getUser = (user) => {
    const data = {
        name: user.name,
        username: user.username,
        address: user.address,
        age: user.age,
        phone: user.phone,
        avatar: user.avatar,
        admin: user.admin,
        cart: user.cart
    }
    return data;
}
const dashboard = async (req, res) => {
    const user = {
        name: req.user.name,
        username: req.user.username,
        address: req.user.address,
        age: req.user.age,
        phone: req.user.phone,
        avatar: req.user.avatar,
        admin: req.user.admin,
        cart: req.user.cart
    }
    const products = await product.getAll();
    res.render('dashboard', { title: 'Dashboard', user, products });
}
const index = (req, res) => {
    res.redirect('/login');
}
const logout = (req, res) => {
    req.session.destroy(() => {
        req.session = null
    });
    res.redirect('/login');
}
const products = async (req, res) => {
    const user = getUser(req.user);
    const products = await product.getAll();
    res.render('products', { title: 'Productos', user, products });
}
const productDetail = async (req, res) => {
    const id = req.params.id;
    const productFound = await product.getById(id);
    const user = getUser(req.user);
    res.render('productDetail', { title: 'Detalle del producto', user, product: productFound });
}
const cart = async (req, res) => {
    const user = getUser(req.user);
    res.render('cart', { title: 'Carrito de compras', user});
}

module.exports = {
    login, signup, index, dashboard, logout, products, productDetail, cart
}