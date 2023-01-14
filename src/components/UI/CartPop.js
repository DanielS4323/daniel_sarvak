import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import cartSvg from "../../assets/icons/cart.svg";
import styles from "./CartPop.module.css";

const style = {
  position: "absolute",
  top: "30%",
  left: "70%",
  transform: "translate(-30%, -75%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const btnStyle = {};

export default function CartPop() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className={styles.Button} sx={btnStyle} onClick={handleOpen}>
        <img src={cartSvg} alt="cart" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            My Cart
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}></Typography>
        </Box>
      </Modal>
    </div>
  );
}
