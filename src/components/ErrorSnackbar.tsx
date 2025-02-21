import { Snackbar, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import errorIcon from "../assets/svg/error-icon.svg"
import { ReactNode, useState } from "react";
import { useEffect } from "react";

interface ErrorInputSnackbarProps {
    error: boolean;
    children: ReactNode;
  }
  
const ErrorInputSnackbar: React.FC<ErrorInputSnackbarProps> = ({ error, children }) => { 
    console.log(error)
    const [ isError, setIsError ] = useState(error)   

    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") return;
        setIsError(false);
    };

    useEffect(() => {
      setIsError(error);
    }, [error]);

  return (
    <>
      <Snackbar open={isError} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          icon={
            <img src={errorIcon} />
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

export default ErrorInputSnackbar;
