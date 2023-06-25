describe("Servers test (with setup and tear-down)", function() {
  let serverNameInput, serverTbody, allServers, serverId;

  beforeEach(function () {
    let serverTable = document.createElement('table');
    serverTable.id = 'serverTable';
    let tbody = document.createElement('tbody');
    serverTable.appendChild(tbody);
    document.body.appendChild(serverTable);

    serverNameInput = document.createElement('input');
    serverNameInput.id = 'serverName';
    document.body.appendChild(serverNameInput);

        serverTbody = document.querySelector('#serverTable tbody');
    allServers = {};
    serverId = 0;

    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    document.body.removeChild(document.getElementById('serverTable'));
    document.body.removeChild(serverNameInput);
  });
});
