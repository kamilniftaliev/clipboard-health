import { createHash } from "crypto";

/**
 * Generates partition key from given data string.
 * @param data - Required string from which the hash will be generated.
 * @returns Hashed string to be used to be used as partition key.
 */
export function generateHash(data: string) {
  return createHash("sha3-512").update(data).digest("hex");
}
