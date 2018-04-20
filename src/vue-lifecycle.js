export const VueLifecycle = {
	install(Vue, options) {
		Vue.directive('on-created', {
			bind(el, data, vNode) {
				if (typeof data.value === 'function') {
					data.value();
				}
			}
		});

		Vue.directive('on-mounted', {
			inserted(el, data, vNode) {
				if (typeof data.value === 'function') {
					data.value();
				}
			}
		});

		Vue.directive('on-destroyed', {
			unbind(el, data, vNode) {
				if (typeof data.value === 'function') {
					data.value();
				}
			}
		});
	}
};
