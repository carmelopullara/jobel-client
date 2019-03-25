function letterChanges(str) {
  const arr = str.split(' ');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const sequence = arr.map((w) => {
    const singles = w.split('').map((s) => {
      if (s.match(/[a-zA-Z]+/g)) {
        const letter = alphabet[alphabet.indexOf(s.toLowerCase()) + 1] || alphabet[0];
        if (['a', 'e', 'i', 'o', 'u'].includes(letter)) {
          return letter.toUpperCase();
        }
        return letter;
      }

      return s;
    });

    return singles.join('');
  });

  return sequence.join(' ');
}

const res = letterChanges('Afun timez!');
console.log(res);
