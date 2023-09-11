import log4js, { Configuration, Logger } from 'log4js';
import { config } from 'dotenv';

config();

const { logpath, logpathDev, logpathTest, NODE_ENV } = process.env;

let setLogPath: string | undefined;
const generateRefID = (): string => {
  return new Date().getTime().toString();
};

const logFileLayout: Configuration['appenders']['layout'] = {
  type: 'pattern',
  pattern: '[%x{refID}] [%d] [%p] %c - %m%n',
  tokens: {
    refID: () => {
      return generateRefID();
    }
  }
};

if (NODE_ENV === 'production') {
  setLogPath = logpath!;
} else if (NODE_ENV === 'development') {
  setLogPath = logpathDev!;
} else {
  setLogPath = logpathTest!;
}

log4js.configure({
  appenders: {
    layout: logFileLayout,
    out: { type: 'stdout', layout: logFileLayout },
    alertlog: {
      type: 'file',
      filename: setLogPath,
      pattern: 'yyyy-MM-dd.txt',
      layout: logFileLayout,
      alwaysIncludePattern: true,
      maxLogSize: 1024 * 1024 * 2, // 1024 * 1024 * 2 = 2M
      backups: 30
    }
  },
  categories: {
    default: { appenders: ['out', 'alertlog'], level: 'info' },
    alertlog: { appenders: ['out', 'alertlog'], level: 'info' }
  }
});

export const logger: Logger = log4js.getLogger('alertlog');
