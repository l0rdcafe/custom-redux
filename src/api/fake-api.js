const createFakeApi = () => {
  let id = 0;
  const createNote = () =>
    new Promise(resolve =>
      setTimeout(() => {
        id += 1;
        resolve({
          id
        });
      }, 1000)
    );

  return { createNote };
};

export default createFakeApi();
