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
    const { bps, kbps, mbps } = speed;
    app.innerHTML = `
    <section>
      <div class="flex">
        <div class="upload">
          <h3 class="heading">Your internet speed is: </h3>

          <div class="value">
            <h1>${mbps} Mbps</h1>
          </div>
        </div>
      </div>
    </section>`;
  }
});
