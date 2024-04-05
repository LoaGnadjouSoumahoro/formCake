import InputItem from '../inputItem/InputItem';
import SubTitle from '../subTitle/SubTitle';
import classes from './ContainerLeft.module.css';

const ContainerLeft = () => {
  return (
    <div className={classes.containerLeft}>
      <SubTitle subTitle='Order Method' />
      <InputItem placeholder='Local Pickup' />
      <InputItem placeholder='Local Delivery' />
      <InputItem placeholder='Customize Order' />
      <SubTitle subTitle='Select Location' />
      <InputItem placeholder='Enter Zipcode to find nearest store ' />
      <SubTitle subTitle='Select Delivery Slot' />
      <InputItem placeholder='Enter date and time' />
    </div>
  );
};

export default ContainerLeft;
