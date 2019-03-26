window.addEventListener('load', () => {
  const NetworkSpeed = require('network-speed');
  var testNetworkSpeed = new NetworkSpeed();

  getNetworkDownloadSpeed();

  const userSpeed = {
    bps: 0,
    kbps: 0,
    mbps: 0
  };

  const app = document.querySelector('#app');

  async function getNetworkDownloadSpeed() {
    var baseUrl = 'http://eu.httpbin.org/stream-bytes/50000000';
    var fileSize = 500000;
    var speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSize);
    userSpeed.bps = speed.bps;
    userSpeed.kbps = speed.kbps;
    userSpeed.mbps = speed.mbps;
    app.innerHTML = `Your user download speed is ${userSpeed.mbps} Mbps`;
  }
});
