import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Product from "../components/Product.js"

const Shop = (props) => {
    const { products, cart, updateCart } = props

    let ShopContents
    ShopContents = (
        <div id='shop-contents' class='page-contents'>
            <div id='products-container'>
                {products.map((product) => {
                    return (
                        <Product 
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            updateCart={updateCart}
                        />
                    )
                })}
            </div>
        </div>
    )

    return (
        <div id='shop' class='page'>
            <Header cart={cart} updateCart={updateCart} />
            {ShopContents}
            <Footer />
        </div>
    )
}

export default Shop