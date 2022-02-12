import React from "react";
import { postOrder } from "../../api/postOrder";
import BuildControls from "../../components/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { loadingStart, loadingStop } from "../../slices/burgerIngredientSlice";

const BurgerBuilder = () => {
  const [showModal, setShowModal] = React.useState(false);
  const { ingredients, totalPrice, loading } = useAppSelector(
    (state) => state.burger
  );
  const dispatch = useAppDispatch();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const purchasedContinueHandler = () => {
    dispatch(loadingStart());
    const order = {
      ingredients,
      totalPrice,
    };
    postOrder(order)
      .then((res) => res.json())
      .then(() => dispatch(loadingStop()))
      .catch((err) => {
        dispatch(loadingStop());
        console.error("Error:", err);
      });
    setShowModal(false);
  };

  return (
    <>
      <Modal show={showModal} closeModal={closeModal}>
        {loading ? (
          <Spinner />
        ) : (
          <OrderSummary
            closeModal={closeModal}
            clicked={purchasedContinueHandler}
          />
        )}
      </Modal>
      <Burger />
      <BuildControls openModal={openModal} />
    </>
  );
};

export default BurgerBuilder;
