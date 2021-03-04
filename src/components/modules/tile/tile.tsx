import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tile from '@material-ui/core/Card';
import { CardHeader, Button, Typography, CardContent } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 275,
    height: 275,
    alignSelf: 'middle',
    justifySelf: 'start'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2vh'
  },
  button: {
    marginTop: '10px',
    height: '7vh',
    width: '90%'
  },
  input: {
    width: '90%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface Props {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
  id: string,
  fundsHeld: number,
  currency: string,
  overDraft: number,
  pendingBalance: number,
  accountDetails: {
    sortCode: string,
    accountNumber: number,
    id: string
  }
}
export const Tiles = ({clickHandler, id, pendingBalance, currency, accountDetails}: Props) => {
  //this object represents the classes that we defined 
  const classes = useStyles();
  const {
    accountNumber,
   } = accountDetails;

   return (
    <div>
    <Tile className={classes.root}>
      <CardHeader title={<Typography variant="h5" component="h2">{`A/C Number: ${accountNumber} `}</Typography>}></CardHeader>
      <CardHeader title={<Typography variant="h5" component="h2">{`Balance:  ${currency} - ${pendingBalance}`}</Typography>}></CardHeader>
      <CardContent className={classes.content}>
        <Button onClick={clickHandler} name={id}>check details</Button>
      </CardContent>
    </Tile>
    </div>
  );
}
export default Tiles;