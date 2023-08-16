import config from "config";
import pino from "pino";

const transportConfig =
  config.has("logger.output") && config.get("logger.output") !== "console"
    ? {
        target: "pino/file",
        options: { destination: `${config.get("logger.output")}` },
      }
    : {
        target: "pino/file",
      };

const pinoLogger = pino({
  name: config.get("logger.name"),
  level: config.get("logger.level"),
  messageKey: "message",
  useLevelLabels: false,
  timestamp: pino.stdTimeFunctions.isoTime,
  errorKey: "error",
  formatters: {
    level: (label) => {
      return { level: label.toUpperCase() };
    },
  },
  transport: transportConfig,
});

export const logger = pinoLogger;
