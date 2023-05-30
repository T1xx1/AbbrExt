export let timeout: NodeJS.Timeout;

export default (cb: () => void, delay = 1000) => {
   clearTimeout(timeout);

   timeout = setTimeout(cb, delay);
};