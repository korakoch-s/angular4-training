import { LogService } from './log.service';
import { ILog } from './ilog';

export function logConsoleFactory(): LogService {
    const logConsoleImplementation: ILog = {
        log: (msg: string): string => {
            const logMsg = `[${new Date()}] ${msg}`;
            console.log(logMsg);
            return logMsg;
        }
    }

    return new LogService(logConsoleImplementation);
}

export function logDBFactory(): LogService {
    const logDBImplementation: ILog = {
        log: (msg: string): string => {
            // Should implement to call backend to record log msg in database.
            const logMsg = `[${new Date()}]<<DB Fake>> ${msg}`;
            console.log(logMsg);
            return logMsg;
        }
    }
    return new LogService(logDBImplementation);
}
