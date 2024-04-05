import classes from './InputItem.module.css';

const InputItem = ({ placeholder }) => {
  return (
    <div className={classes.inputItem}>
      <input type='text' placeholder={placeholder} />
    </div>
  );
};

export default InputItem;
