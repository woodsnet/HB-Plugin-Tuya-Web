export * from "./AuthenticationError";
export * from "./RateLimitError";
export * from "./UnsupportedOperationError";

export type ErrorCallback = (error: Error) => void;
