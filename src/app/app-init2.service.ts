import { Injectable } from "@angular/core";

@Injectable()
export class AppInit2Service {
  constructor() {}

  Init() {
    return new Promise<void>((resolve, reject) => {
      console.log("AppInit2Service.init() called");
      ////do your initialisation stuff here
      setTimeout(() => {
        console.log("AppInit2Service Finished");
        resolve();
      }, 3000);
    });
  }

  getThing() {
    return new Promise<string>((resolve, reject) => {
      console.log("AppInit2Service.init() called");
      ////do your initialisation stuff here
      setTimeout(() => {
        console.log("AppInit2Service Finished");
        resolve("hello");
      }, 3000);
    });
  }
}
