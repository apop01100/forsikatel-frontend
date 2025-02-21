import { Snackbar, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import successIcon from "../assets/svg/success-icon.svg"
import { ReactNode } from "react";

interface SuccessSnackbarProps {
    isOpen: boolean;
    handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
    children: ReactNode
  }
  

const SuccessSnackbar: React.FC<SuccessSnackbarProps> = ({ isOpen, handleClose, children }) => {    

  return (
    <>
      <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          icon={
            <img src={successIcon} />
          }
          action={
            <IconButton size="small" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
          sx={{
            backgroundColor: "#FFFFFF", // Custom background color (green)
            borderRadius: "24px", // Rounded corners
            color: "black", // Text color
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow
            width: "full"
          }}
        >
            { children }
        </Alert>
      </Snackbar>
    </>
  );
};

export default SuccessSnackbar;
