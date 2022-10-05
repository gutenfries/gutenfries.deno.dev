// @generated file from wasmbuild -- do not edit
// deno-lint-ignore-file
// deno-fmt-ignore-file
// source-hash: b22899f605373fe7a8f32de08777d8d311b309f4
let wasm;

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) {
	return heap[idx];
}

let heap_next = heap.length;

function dropObject(idx) {
	if (idx < 36) return;
	heap[idx] = heap_next;
	heap_next = idx;
}

function takeObject(idx) {
	const ret = getObject(idx);
	dropObject(idx);
	return ret;
}

const cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = new Uint8Array();

function getUint8Memory0() {
	if (cachedUint8Memory0.byteLength === 0) {
		cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
	}
	return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
	return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
	if (heap_next === heap.length) heap.push(heap.length + 1);
	const idx = heap_next;
	heap_next = heap[idx];

	heap[idx] = obj;
	return idx;
}

function debugString(val) {
	// primitive types
	const type = typeof val;
	if (type == 'number' || type == 'boolean' || val == null) {
		return `${val}`;
	}
	if (type == 'string') {
		return `"${val}"`;
	}
	if (type == 'symbol') {
		const description = val.description;
		if (description == null) {
			return 'Symbol';
		} else {
			return `Symbol(${description})`;
		}
	}
	if (type == 'function') {
		const name = val.name;
		if (typeof name == 'string' && name.length > 0) {
			return `Function(${name})`;
		} else {
			return 'Function';
		}
	}
	// objects
	if (Array.isArray(val)) {
		const length = val.length;
		let debug = '[';
		if (length > 0) {
			debug += debugString(val[0]);
		}
		for (let i = 1; i < length; i++) {
			debug += ', ' + debugString(val[i]);
		}
		debug += ']';
		return debug;
	}
	// Test for built-in
	const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
	let className;
	if (builtInMatches.length > 1) {
		className = builtInMatches[1];
	} else {
		// Failed to match the standard '[object ClassName]'
		return toString.call(val);
	}
	if (className == 'Object') {
		// we're a user defined class or Object
		// JSON.stringify avoids problems with cycles, and is generally much
		// easier than looping through ownProperties of `val`.
		try {
			return 'Object(' + JSON.stringify(val) + ')';
		} catch (_) {
			return 'Object';
		}
	}
	// errors
	if (val instanceof Error) {
		return `${val.name}: ${val.message}\n${val.stack}`;
	}
	// TODO we could test for more things here, like `Set`s and `Map`s.
	return className;
}

let WASM_VECTOR_LEN = 0;

const cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = function (arg, view) {
	return cachedTextEncoder.encodeInto(arg, view);
};

function passStringToWasm0(arg, malloc, realloc) {
	if (realloc === undefined) {
		const buf = cachedTextEncoder.encode(arg);
		const ptr = malloc(buf.length);
		getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
		WASM_VECTOR_LEN = buf.length;
		return ptr;
	}

	let len = arg.length;
	let ptr = malloc(len);

	const mem = getUint8Memory0();

	let offset = 0;

	for (; offset < len; offset++) {
		const code = arg.charCodeAt(offset);
		if (code > 0x7F) break;
		mem[ptr + offset] = code;
	}

	if (offset !== len) {
		if (offset !== 0) {
			arg = arg.slice(offset);
		}
		ptr = realloc(ptr, len, len = offset + arg.length * 3);
		const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
		const ret = encodeString(arg, view);

		offset += ret.written;
	}

	WASM_VECTOR_LEN = offset;
	return ptr;
}

let cachedInt32Memory0 = new Int32Array();

function getInt32Memory0() {
	if (cachedInt32Memory0.byteLength === 0) {
		cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
	}
	return cachedInt32Memory0;
}

const CLOSURE_DTORS = new FinalizationRegistry((state) => {
	wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b);
});

function makeMutClosure(arg0, arg1, dtor, f) {
	const state = { a: arg0, b: arg1, cnt: 1, dtor };
	const real = (...args) => {
		// First up with a closure we increment the internal reference
		// count. This ensures that the Rust closure environment won't
		// be deallocated while we're invoking it.
		state.cnt++;
		const a = state.a;
		state.a = 0;
		try {
			return f(a, state.b, ...args);
		} finally {
			if (--state.cnt === 0) {
				wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);
				CLOSURE_DTORS.unregister(state);
			} else {
				state.a = a;
			}
		}
	};
	real.original = state;
	CLOSURE_DTORS.register(real, state, state);
	return real;
}
function __wbg_adapter_16(arg0, arg1, arg2) {
	wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h30525a83f2d9074b(
		arg0,
		arg1,
		addHeapObject(arg2),
	);
}

function handleError(f, args) {
	try {
		return f.apply(this, args);
	} catch (e) {
		wasm.__wbindgen_exn_store(addHeapObject(e));
	}
}
/**
 * @param {string} owner
 * @param {string} repo
 * @returns {Promise<any>}
 */
export function run(owner, repo) {
	const ptr0 = passStringToWasm0(owner, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	const len0 = WASM_VECTOR_LEN;
	const ptr1 = passStringToWasm0(repo, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	const len1 = WASM_VECTOR_LEN;
	const ret = wasm.run(ptr0, len0, ptr1, len1);
	return takeObject(ret);
}

/**
 * @param {string} _input
 * @returns {Array<any>}
 */
export function search(_input) {
	const ptr0 = passStringToWasm0(_input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	const len0 = WASM_VECTOR_LEN;
	const ret = wasm.search(ptr0, len0);
	return takeObject(ret);
}

function __wbg_adapter_45(arg0, arg1, arg2, arg3) {
	wasm.wasm_bindgen__convert__closures__invoke2_mut__h83ed63566c8f6952(
		arg0,
		arg1,
		addHeapObject(arg2),
		addHeapObject(arg3),
	);
}

const imports = {
	__wbindgen_placeholder__: {
		__wbg_instanceof_Response_eaa426220848a39e: function (arg0) {
			let result;
			try {
				result = getObject(arg0) instanceof Response;
			} catch {
				result = false;
			}
			const ret = result;
			return ret;
		},
		__wbg_new_9962f939219f1820: function (arg0, arg1) {
			try {
				var state0 = { a: arg0, b: arg1 };
				var cb0 = (arg0, arg1) => {
					const a = state0.a;
					state0.a = 0;
					try {
						return __wbg_adapter_45(a, state0.b, arg0, arg1);
					} finally {
						state0.a = a;
					}
				};
				const ret = new Promise(cb0);
				return addHeapObject(ret);
			} finally {
				state0.a = state0.b = 0;
			}
		},
		__wbindgen_object_drop_ref: function (arg0) {
			takeObject(arg0);
		},
		__wbg_new_0b9bfdd97583284e: function () {
			const ret = new Object();
			return addHeapObject(ret);
		},
		__wbindgen_string_new: function (arg0, arg1) {
			const ret = getStringFromWasm0(arg0, arg1);
			return addHeapObject(ret);
		},
		__wbg_newwithstrandinit_05d7180788420c40: function () {
			return handleError(function (arg0, arg1, arg2) {
				const ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
				return addHeapObject(ret);
			}, arguments);
		},
		__wbg_headers_85824e993aa739bf: function (arg0) {
			const ret = getObject(arg0).headers;
			return addHeapObject(ret);
		},
		__wbg_set_992c1d31586b2957: function () {
			return handleError(function (arg0, arg1, arg2, arg3, arg4) {
				getObject(arg0).set(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
			}, arguments);
		},
		__wbindgen_object_clone_ref: function (arg0) {
			const ret = getObject(arg0);
			return addHeapObject(ret);
		},
		__wbg_instanceof_Window_acc97ff9f5d2c7b4: function (arg0) {
			let result;
			try {
				result = getObject(arg0) instanceof Window;
			} catch {
				result = false;
			}
			const ret = result;
			return ret;
		},
		__wbg_fetch_0fe04905cccfc2aa: function (arg0, arg1) {
			const ret = getObject(arg0).fetch(getObject(arg1));
			return addHeapObject(ret);
		},
		__wbg_json_eb16b12f372e850c: function () {
			return handleError(function (arg0) {
				const ret = getObject(arg0).json();
				return addHeapObject(ret);
			}, arguments);
		},
		__wbg_new_1d9a920c6bfc44a8: function () {
			const ret = new Array();
			return addHeapObject(ret);
		},
		__wbg_self_6d479506f72c6a71: function () {
			return handleError(function () {
				const ret = self.self;
				return addHeapObject(ret);
			}, arguments);
		},
		__wbg_window_f2557cc78490aceb: function () {
			return handleError(function () {
				const ret = window.window;
				return addHeapObject(ret);
			}, arguments);
		},
		__wbg_globalThis_7f206bda628d5286: function () {
			return handleError(function () {
				const ret = globalThis.globalThis;
				return addHeapObject(ret);
			}, arguments);
		},
		__wbg_global_ba75c50d1cf384f4: function () {
			return handleError(function () {
				const ret = global.global;
				return addHeapObject(ret);
			}, arguments);
		},
		__wbindgen_is_undefined: function (arg0) {
			const ret = getObject(arg0) === undefined;
			return ret;
		},
		__wbg_newnoargs_b5b063fc6c2f0376: function (arg0, arg1) {
			const ret = new Function(getStringFromWasm0(arg0, arg1));
			return addHeapObject(ret);
		},
		__wbg_call_97ae9d8645dc388b: function () {
			return handleError(function (arg0, arg1) {
				const ret = getObject(arg0).call(getObject(arg1));
				return addHeapObject(ret);
			}, arguments);
		},
		__wbg_call_168da88779e35f61: function () {
			return handleError(function (arg0, arg1, arg2) {
				const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
				return addHeapObject(ret);
			}, arguments);
		},
		__wbg_set_bf3f89b92d5a34bf: function () {
			return handleError(function (arg0, arg1, arg2) {
				const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
				return ret;
			}, arguments);
		},
		__wbindgen_debug_string: function (arg0, arg1) {
			const ret = debugString(getObject(arg1));
			const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
			const len0 = WASM_VECTOR_LEN;
			getInt32Memory0()[arg0 / 4 + 1] = len0;
			getInt32Memory0()[arg0 / 4 + 0] = ptr0;
		},
		__wbindgen_throw: function (arg0, arg1) {
			throw new Error(getStringFromWasm0(arg0, arg1));
		},
		__wbindgen_cb_drop: function (arg0) {
			const obj = takeObject(arg0).original;
			if (obj.cnt-- == 1) {
				obj.a = 0;
				return true;
			}
			const ret = false;
			return ret;
		},
		__wbg_then_11f7a54d67b4bfad: function (arg0, arg1) {
			const ret = getObject(arg0).then(getObject(arg1));
			return addHeapObject(ret);
		},
		__wbg_then_cedad20fbbd9418a: function (arg0, arg1, arg2) {
			const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
			return addHeapObject(ret);
		},
		__wbg_resolve_99fe17964f31ffc0: function (arg0) {
			const ret = Promise.resolve(getObject(arg0));
			return addHeapObject(ret);
		},
		__wbindgen_closure_wrapper996: function (arg0, arg1, arg2) {
			const ret = makeMutClosure(arg0, arg1, 20, __wbg_adapter_16);
			return addHeapObject(ret);
		},
	},
};

const wasm_url = new URL('search_bg.wasm', import.meta.url);

/**
 * Decompression callback
 *
 * @callback decompressCallback
 * @param {Uint8Array} compressed
 * @return {Uint8Array} decompressed
 */

/** Instantiates an instance of the Wasm module returning its functions.
 * @remarks It is safe to call this multiple times and once successfully
 * loaded it will always return a reference to the same object.
 * @param {decompressCallback=} transform
 */
export async function instantiate(transform) {
	return (await instantiateWithInstance(transform)).exports;
}

let instanceWithExports;
let lastLoadPromise;

/** Instantiates an instance of the Wasm module along with its exports.
 * @remarks It is safe to call this multiple times and once successfully
 * loaded it will always return a reference to the same object.
 * @param {decompressCallback=} transform
 * @returns {Promise<{
 *   instance: WebAssembly.Instance;
 *   exports: { run: typeof run; search: typeof search }
 * }>}
 */
export function instantiateWithInstance(transform) {
	if (instanceWithExports != null) {
		return Promise.resolve(instanceWithExports);
	}
	if (lastLoadPromise == null) {
		lastLoadPromise = (async () => {
			try {
				const instance = (await instantiateModule(transform)).instance;
				wasm = instance.exports;
				cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
				cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
				instanceWithExports = {
					instance,
					exports: getWasmInstanceExports(),
				};
				return instanceWithExports;
			} finally {
				lastLoadPromise = null;
			}
		})();
	}
	return lastLoadPromise;
}

function getWasmInstanceExports() {
	return { run, search };
}

/** Gets if the Wasm module has been instantiated. */
export function isInstantiated() {
	return instanceWithExports != null;
}

async function instantiateModule(transform) {
	switch (wasm_url.protocol) {
		case 'file:': {
			if (typeof Deno !== 'object') {
				throw new Error('file urls are not supported in this environment');
			}

			if ('permissions' in Deno) {
				await Deno.permissions.request({ name: 'read', path: wasm_url });
			}
			const wasmCode = await Deno.readFile(wasm_url);
			return WebAssembly.instantiate(!transform ? wasmCode : transform(wasmCode), imports);
		}
		case 'https:':
		case 'http:': {
			if (typeof Deno === 'object' && 'permissions' in Deno) {
				await Deno.permissions.request({ name: 'net', host: wasm_url.host });
			}
			const wasmResponse = await fetch(wasm_url);
			if (transform) {
				const wasmCode = new Uint8Array(await wasmResponse.arrayBuffer());
				return WebAssembly.instantiate(transform(wasmCode), imports);
			}
			if (
				wasmResponse.headers.get('content-type')?.toLowerCase().startsWith(
					'application/wasm',
				)
			) {
				return WebAssembly.instantiateStreaming(wasmResponse, imports);
			} else {
				return WebAssembly.instantiate(await wasmResponse.arrayBuffer(), imports);
			}
		}
		default:
			throw new Error(`Unsupported protocol: ${wasm_url.protocol}`);
	}
}