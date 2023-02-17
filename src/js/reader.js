export default function read(data) {
  // eslint-disable-next-line  no-unused-vars
  return new Promise((resolve, reject) => {
    setTimeout(() => ((input) => {
      const buffer = new ArrayBuffer(input.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i += 1) {
        bufferView[i] = input.charCodeAt(i);
      }
      resolve(buffer);
    })(data), 1000);
  });
}
