let N = parseInt(prompt("Por favor, insira um número:"));

if (N > 0) {
  N = N * (N - 1) * (N - 2) * (N - 3);
}
console.log(N);