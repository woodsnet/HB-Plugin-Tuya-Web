export class DeviceOfflineError extends Error {
  constructor(specificMessage?: string) {
    let message = "Device Offline";
    if (specificMessage) {
      message = `${message} - ${specificMessage}`;
    }
    super(message);
  }
}
