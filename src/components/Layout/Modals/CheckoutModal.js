import React from "react";
import naira from "../../../images/naira.png";


const CheckoutModal = ({ cartItems, closeModal}) => {

  const GetTotalCart = ({cart}) =>{
    let sum = 0;
    cart.forEach(item =>{
        sum = sum + (Number(item.price) * Number(item.quantity))
    })
    return (
        <span>Total: <img src={naira} alt="currency"/>{sum}</span>
    )
}

  const whatsappCheckout = (itemsInCart) =>{
        let content = "";
        cartItems.forEach((each, index)=>{
            content = content +"("+Number(index + 1) + ")%20" +each.name + "%09" +each.quantity+"%0A";
        })

        return content;
  }

  return (  
    <div className="my-modal">
      <div className="delete-modal">
        <div class="modal-header">
          <span class="close" onClick={()=>{closeModal()}} >&times;</span>
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
            cartItems.map((each, id)=>
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
        <GetTotalCart cart={cartItems}/>
        <div className="modal-confirmation center-align">
          <p>
            <a className="btn" href={"https://wa.me/+2349024833001/?text=Hi I would like to order:%0AName%09Total%0A"+whatsappCheckout()}>WHATSAPP<i className="fa fa-whatsapp"></i></a>
          </p>
          <p>
            <button className="btn">PAYMENT<i className="material-icons">payment</i></button>
          </p>
          <form>

          </form>
        </div>
      </div>
    </div>

  )
}

export default CheckoutModal;