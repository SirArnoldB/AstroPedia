import React, { useState } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  zIndex: 100,
};

const VenusChatbotModal = ({ open, handleClose, name }) => {
  const planetsUrl = {
    VENUS: "https://www.chatbase.co/chatbot-iframe/d-1m-0X2TXJDO7gowHxUm",
    EARTH: "https://www.chatbase.co/chatbot-iframe/3n8ZyLfg63wLPUZjcEt8z",
    MARS: "https://www.chatbase.co/chatbot-iframe/W1NsfwsoMI4w_eu5KFWIT",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Your {name} Chatbot
        </Typography>
        <iframe
          src={planetsUrl[name]}
          style={{
            height: "100%",
            minHeight: "400px",
            border: "none",
            width: "100%",
            minWidth: "100px",
            background: "blue",
          }}
        ></iframe>
      </Box>
    </Modal>
  );
};

const AmbassadorView = ({ name }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open {name} Chatbot
      </Button>
      <VenusChatbotModal open={open} handleClose={handleClose} name={name} />
    </div>
  );
};

export default AmbassadorView;
