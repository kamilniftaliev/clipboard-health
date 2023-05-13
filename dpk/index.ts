import { MAX_PARTITION_KEY_LENGTH, TRIVIAL_PARTITION_KEY } from "./constants";
import { EventArg, EventObject } from "./types";
import { generateHash } from "./utils";

/**
 * Generates a partition key for candidates from given object or string.
 * @param event Optional string or object which will be used for generating hash.
 * @returns hashed candidate key.
 */
export function deterministicPartitionKey(event?: EventArg) {
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    const eventObj = event as EventObject;

    // If user wants to use a custom key
    if (eventObj.partitionKey) {
      candidate = eventObj.partitionKey;

      // If the custom key is too long, generate a hash from it.
      if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
        candidate = generateHash(candidate);
      }
    } else {
      // Turn any value into string to be able to generate a hash from it
      const data = JSON.stringify(event);
      candidate = generateHash(data);
    }
  }

  return candidate;
}
