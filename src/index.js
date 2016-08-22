import localForage from 'localforage';

export default function createOfflineStoreMiddleware() {
	return (store) => (next) => (action) => {
	  const result = next(action);

	  const state = store.getState();
	  Object.keys(state).forEach((k) => {
	    localForage.setItem(k, state[k]);
	  });

	  return result;
	};
}

const offlineStore = createOfflineStoreMiddleware();

export default offlineStore;
