const getNumber = (): Promise<number> => {
  return new Promise(resolve => {
    const res = Math.ceil(Math.random() * 10);
    setTimeout(() => resolve(res), 1000);
  });
};

export { getNumber };
