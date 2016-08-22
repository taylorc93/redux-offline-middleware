'use strict';

exports.__esModule = true;
exports.default = createOfflineStoreMiddleware;

var _localforage = require('localforage');

var _localforage2 = _interopRequireDefault(_localforage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createOfflineStoreMiddleware() {
	return function (store) {
		return function (next) {
			return function (action) {
				var result = next(action);

				var state = store.getState();
				Object.keys(state).forEach(function (k) {
					_localforage2.default.setItem(k, state[k]);
				});

				return result;
			};
		};
	};
}

var offlineStore = createOfflineStoreMiddleware();

exports.default = offlineStore;