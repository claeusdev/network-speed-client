import './app.css';
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
    app.innerHTML = `
    <section>
      <div class="flex">
        <div class="upload">
          <h1>${userSpeed.mbps}</h1>
          <h3>Upload</h3>
        </div>
        <div class="download">
          <h1>${userSpeed.mbps}</h1>
          <h3>Download</h3>
        </div>
      </div>`;
  }

  getNetworkUploadSpeed();

  async function getNetworkUploadSpeed() {
    var options = {
      hostname: 'www.google.com',
      port: 80,
      path: '/catchers/544b09b4599c1d0200000289',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    var speed = await testNetworkSpeed.checkUploadSpeed(options);
    console.log(speed);
  }
});
