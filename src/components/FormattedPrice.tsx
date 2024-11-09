interface Props {
  amount: number;
}

const FormattedPrice = ({ amount }: Props) => {
  const formattedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "MAD",
    minimumFractionDigits: 2,
  });
  return <span>{formattedAmount}</span>;
};

export default FormattedPrice;
