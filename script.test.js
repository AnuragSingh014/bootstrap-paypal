// c:\github\bootstrap-paypal\script.test.equalizeHeights.js

const $ = require('jquery');
const sinon = require('sinon');

describe('equalizeHeights function', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub($, 'height').returns(100);
    sandbox.stub($, 'find').returns([{ height: 150 }, { height: 75 }]);
    sandbox.stub($, 'each').resolves();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should correctly equalize heights for a row with two elements of different heights', () => {
    const row = document.createElement('div');
    row.classList.add('row');
    row.classList.add('col-md-6');
    row.classList.add('col-md-6');

    equalizeHeights(row);

    sinon.assert.calledWith(
      $.each,
      sinon.match.func,
      sinon.match.array.withExactOrder([{ height: 150 }, { height: 75 }])
    );

    sinon.assert.calledWith(
      $,
      'height',
      sinon.match.number,
      150
    );

    sinon.assert.calledWith(
      $,
      'height',
      sinon.match.number,
      75
    );

    sinon.assert.calledWith(
      $,
      'height',
      sinon.match.number,
      150
    );

    sinon.assert.calledWith(
      $,
      'height',
      sinon.match.number,
      75
    );

    sinon.assert.calledWith(
      $.each,
      sinon.match.func,
      sinon.match.array.withExactOrder([{ height: 150 }, { height: 75 }])
    );
  });
});