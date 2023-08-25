import config from "config";
import pino from "pino";

const consoleTarget = {
  target: "pino/file"
}

const fileTarget = {
  target: "pino/file",
  options: { destination: `${config.get("logger.output")}` }
}

function getTargetChannel(){
    if(config.has("logger.output") && config.get("logger.output") !== "console"){
      return fileTarget
    }else{
      return consoleTarget
    }
}

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
  transport: getTargetChannel(),
});

export const logger = pinoLogger;
