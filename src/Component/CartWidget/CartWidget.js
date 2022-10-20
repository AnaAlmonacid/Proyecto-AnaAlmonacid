import CartW from './cart.png'

const CartWidget = () => {

    return (
        <div>
            <img src={CartW} className="CartW" alt="CartWidget"/>
            <span className='ItemTotal'>0</span>
        </div>
    )
}


export default CartWidget