export const calculateLetters = (colHeader:string[]) => {
    const columns = document.querySelectorAll(".htCore colgroup col");
    let alphabet = "abcdefghijklmopqrstuvwxyz".split("");
    let letters = [];

    if (colHeader.length > alphabet.length) {
      const addslots = colHeader.length - alphabet.length;
      for (let i = 0; i <= addslots; i++) {
        alphabet[alphabet.length++] = `${alphabet[i]}` + `${i + 1}`;
      }
      letters = alphabet;
    }

    if (colHeader.length < alphabet.length) {
      const slots = alphabet.length - colHeader.length;
      let res = [];
      for (let i = 0; i < slots; i++) {
        letters[i] = `${alphabet[i]}`;
      }
    }

    return  letters;
}