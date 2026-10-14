self.onmessage = function (e) {
  console.log('Timer worker received message:', e.data);

  self.postMessage('Olá para você também!');
};
