import React from "react";
import naira from "../../../images/naira.png";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';


const CheckoutModal = ({ cartItems, closeModal }) => {
  const config = {
    public_key: 'FLWPUBK_TEST-1da3e5cbecdc0376b40b2dbeed9e51be-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'theodore.oneyejiaku.g20@gmail.com',
      phonenumber: '07064586146',
      name: 'Theodore Kelechukwu Onyejiaku',
    },
    customizations: {
      title: 'Checkout Payment',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);


  const GetTotalCart = ({ cart }) => {
    let sum = 0;
    cart.forEach(item => {
      sum = sum + (Number(item.price) * Number(item.quantity))
    })
    return (
      <span>Total: <img src={naira} alt="currency" />{sum}</span>
    )
  }

  const whatsappCheckout = (itemsInCart) => {
    let content = "";
    cartItems.forEach((each, index) => {
      content = content + "(" + Number(index + 1) + ")%09" + each.name + "%09%09" + each.quantity + "%0A";
    })

    return content;
  }

  return (
    <div className="my-modal">
      <div className="delete-modal">
        <div class="modal-header">
          <span class="close" onClick={() => { closeModal() }} >&times;</span>
          <h4 className="modal-success">Proceed to Checkout</h4>
        </div>
        <table>
          <thead>
            <tr>
              <th>Dish Name</th>
              <th>Dish Price</th>
              <th>Item Quantity</th>
            </tr>
          </thead>
          {cartItems.length ?
            cartItems.map((each, id) =>
              <tbody>
                <tr>
                  <td>{each.name}</td>
                  <td>{each.price}</td>
                  <td>{each.quantity}</td>
                </tr>
              </tbody>
            )
            : <p>No item in cart</p>
          }
        </table>
        <GetTotalCart cart={cartItems} />
        <div className="modal-confirmation center-align">
          <p>
            <a className="btn" href={"https://wa.me/+2349024833001/?text=Hi I would like to order:%0AName%09%09Total%0A" + whatsappCheckout()}>WHATSAPP<i className="fa fa-whatsapp"></i></a>
          </p>
          <p>
            <button className="btn" onClick={() => {
              handleFlutterPayment({
                callback: (response) => {
                  console.log(response);
                  closePaymentModal() // this will close the modal programmatically
                },
                onClose: () => { },
              });
            }}>PAYMENT<i className="material-icons">payment</i></button>
          </p>
          <form>

          </form>
        </div>
      </div>
    </div>

  )
}

export default CheckoutModal;