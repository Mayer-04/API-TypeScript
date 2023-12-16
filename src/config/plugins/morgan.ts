import pluginMorgan from "morgan";

export const morgan = (format: string) => {
  if (!format) throw new Error("format is required");
  return pluginMorgan(format);
};
