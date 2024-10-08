let myMap = new Map([
    ['name', 'Alex'],
    ['age', 22],
    ['city', 'NN'],
    ['country', 'RUS'],
  ]);

  for (let [key, value] of myMap) {
    console.log(`Ключ — ${key}, значение — ${value}`);
  }