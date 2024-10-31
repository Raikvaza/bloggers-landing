import React, { createContext, ReactNode, useContext, useState } from "react";

interface DialogSuccessContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DialogSuccessContext = createContext<
  DialogSuccessContextType | undefined
>(undefined);

export const DialogSuccessProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <DialogSuccessContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogSuccessContext.Provider>
  );
};

export const useDialogSuccess = (): DialogSuccessContextType => {
  const context = useContext(DialogSuccessContext);
  if (context === undefined) {
    throw new Error(
      "useDialogSuccess must be used within a DialogSuccessProvider",
    );
  }
  return context;
};
