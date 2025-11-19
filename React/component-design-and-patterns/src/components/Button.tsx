interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <div>{text}</div>;
};

export default Button;
