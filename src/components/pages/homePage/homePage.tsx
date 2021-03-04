import React, {useState, Fragment, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Tile from '../../modules/tile/tile';
import Modal from '../../modules/modal/modal';
import { fetchInitialData } from '../../../stateManager/actions/journeyActions';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 300,
  },
  control: {
    padding: theme.spacing(2),
  },
}));


const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showHideModal, setModalVisible] = useState<{visible: boolean, customerId: null | number}>({ visible: false, customerId: null });  
  const journeyState:any = useSelector((state: any) => state.journeyState);
  const customersBalance:Object[] = journeyState?.balances;
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);

  useEffect(() => {
    if(journeyState.errorMessage){
      history.push({
        pathname: '/error',
      });
    }
  },[journeyState, history]);

  const launchModal = (event: { currentTarget: { name: any}; }): void => {
    setModalVisible({
      customerId: event.currentTarget.name,
      visible: true
    });
  }

  const hideModal= (): void => {
    setModalVisible({
      customerId: null,
      visible: false
    });  
  }

  if(!customersBalance) {
    return null;
  } 
  const customerBalanceData:any= showHideModal.customerId ? customersBalance[showHideModal.customerId] : {};
  return (
    <Fragment>
      {
        showHideModal.visible && showHideModal.customerId ? (
          <Modal 
            closePopup={hideModal} 
            customerBalanceData={{...customerBalanceData}}
            id={showHideModal.customerId} 
          />
        ) : null
      }
      <Container className={classes.root}>
        <Grid container className={classes.root} spacing={4}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={3}>
              {customersBalance.map((customer: any, index: number) => (
                <Grid key={index} item>
                  <Tile {...customer} id={index} clickHandler={launchModal}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default HomePage;