const DISCOUNT_MULTIPLIER = {
  DIJFNC: 0.8,
  XPFJVM: 0.75,
  FJDPCX: 0.5,
};

const discount = (amount, code) => {
  return amount * DISCOUNT_MULTIPLIER[code];
};
