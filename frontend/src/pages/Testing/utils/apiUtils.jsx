export const formatBytes = (bytes) => {
  if (bytes === 0 || bytes === "N/A") return "N/A";
  if (bytes < 1024) return `${bytes} B`;
  const sizes = ["B", "kB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};

export const getItemCount = (data) => {
  if (!data) return "N/A";
  if (Array.isArray(data)) return data.length;
  if (data.results) return data.results.length;
  if (data.data && Array.isArray(data.data)) return data.data.length;
  return Object.keys(data).length;
};

export const measureTransferSize = async (response) => {
  try {
    const contentLength = response.headers.get("content-length");
    if (contentLength) return parseInt(contentLength, 10);

    const buffer = await response.clone().arrayBuffer();
    return buffer.byteLength;
  } catch {
    return "N/A";
  }
};

export const calculateCompression = (originalSize, compressedSize) => {
  if (!originalSize || !compressedSize || originalSize === compressedSize)
    return null;
  return (((originalSize - compressedSize) / originalSize) * 100).toFixed(1);
};

export const getCacheStatus = (headers) => {
  const cacheControl = headers.get("cache-control") || "není nastaveno";
  let cacheStatus = "Není nastaveno";

  if (cacheControl.includes("no-cache") || cacheControl.includes("no-store")) {
    cacheStatus = "Zakázáno";
  } else if (cacheControl.includes("max-age")) {
    const maxAgeMatch = cacheControl.match(/max-age=(\d+)/);
    cacheStatus = `Povoleno (${maxAgeMatch ? maxAgeMatch[1] : "?"}s)`;
  }

  return cacheStatus;
};
