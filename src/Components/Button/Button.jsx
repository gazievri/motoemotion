import './Button.sass';

export const Button = ({
  lable = 'Отправить',
  width = '203px',
  type = 'button',
  transparent = false,
  disabled = false,
  fn = Function.prototype,
}) => {
  const style = {
    width: width,
  };

  return (
    <button
      className={!transparent ? 'button' : 'button_type_transparent'}
      type={type}
      style={style}
      onClick={fn}
      disabled={disabled}
    >
      {lable}
    </button>
  );
};
