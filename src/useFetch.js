export default function useFetch() {
  const controller = new AbortController();

  const query = async (url, params) => {
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        ...params,
      });

      const result = await response.json();

      return { data: result };
    } catch (e) {
      return Promise.resolve({ aborted: true });
    }
  };

  return {
    query,
    cancel: () => {
      controller.abort();
    },
  };
}
