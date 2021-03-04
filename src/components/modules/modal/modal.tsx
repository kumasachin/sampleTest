import React from 'react';
import { Dialog, Button, DialogTitle, DialogContent } from '@material-ui/core';

interface Props {
  closePopup: (event: React.MouseEvent<HTMLButtonElement>) => void,
  id: null | number,
  customerBalanceData: {
    fundsHeld: number,
    currency: string,
    overDraft: number,
    pendingBalance: number,
    accountDetails?: {
            sortCode: string,
            accountNumber: string,
            id: string
    }
  }
}

export const Modal = ({closePopup, customerBalanceData}: Props) => {
    const {
        fundsHeld = null,
        currency = "",
        overDraft = null,
        pendingBalance = null,
        accountDetails = {
          sortCode: "",
          accountNumber: ""
        }
    } = customerBalanceData;

   return (
    <Dialog open={true}>
        <DialogTitle>{`Account Number: ${accountDetails.accountNumber}`}</DialogTitle>
        <DialogContent>
          <ul>
            <li>
              {`Funds Held: ${currency} ${fundsHeld}`}
            </li>
            <li>
              {`Overdraft: ${currency} ${overDraft}`}
            </li>
            <li>
              {`Pending Balance: ${currency} ${pendingBalance}`}
            </li>
          </ul>
        </DialogContent>
        <Button onClick={closePopup}>Close Popup</Button>
    </Dialog>
  );
}

export default Modal;