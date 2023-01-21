import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import cartSvg from "../../assets/icons/cart.svg";
import styles from "./CartPop.module.css";
import CartItems from "../cart/CartItems";

export default function CartPop() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className={styles.buttonCart} onClick={handleOpen}>
        <img src={cartSvg} alt="cart" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.boxModal}>
          <h4>My Cart</h4>
          <CartItems />
        </Box>
      </Modal>
    </div>
  );
}
