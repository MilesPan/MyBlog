import Tracker from "pdy-sdk-tracker";
export function setupTracker() {
  new Tracker({
    domTracker: true,
    requestUrl: "/api/tracker",
  });
}
