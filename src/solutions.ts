const multiplyValue = (value: number, multiplier?: number) : number => {
  if (multiplier || multiplier == 0) {
    return value * multiplier;
  }

  return value * 2;
};


