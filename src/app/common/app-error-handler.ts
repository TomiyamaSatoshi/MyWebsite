import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        console.log('ERROR: ' + JSON.stringify(error));
    }
}