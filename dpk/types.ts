// Event object also can be any object.
// If this object contains "partitionKey"
// property it must be string
export type EventObject = {
  partitionKey?: string;
  [key: string]: any;
};

export type EventArg = string | EventObject;
