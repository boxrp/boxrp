// Allow listeners to subscribe to named events, there can be only one listener for a name
const listeners = new Map<string, (params: Record<string, string>) => void>();

function subscribe(name: string, callback: (params: Record<string, string>) => void) {
    listeners.set(name, callback);
}

function dispatch(name: string, params: Record<string, string>) {
    listeners.get(name)?.(params);
}

export { subscribe, dispatch };
