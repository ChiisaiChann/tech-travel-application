import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import CartContext from '../../context/cart';
import {
  Container,
  TravelItem,
  Info,
  Quantity,
  Subtotal,
  ContainerList,
  Total,
} from './styles';

function Cart() {
  const { state, setState } = useContext(CartContext);

  const totalSuma = state.cart.reduce(
    (acc, travel) => acc + travel.price * travel.quantity,
    0,
  );

  return (
    <Container>
      <ContainerList>
        {state.cart.map((el) => (
          <TravelItem>
            <img src={el.photo} alt={el.title} />
            <Info>
              <p>{el.title}</p>
              <strong>{`$ ${el.price}`}</strong>
            </Info>
            <Quantity readOnly type="number" value={el.quantity} />
            <Subtotal>
              <p>{`$ ${el.price * el.quantity}.00`}</p>
              <button type="button">
                <MdDelete size={24} color="#0676d9" />
              </button>
            </Subtotal>
          </TravelItem>
        ))}
        <Total>
          <p>Total:</p>
          <span>{`$ ${totalSuma.toFixed(2)}`}</span>
        </Total>
      </ContainerList>
    </Container>
  );
}

export default Cart;
