import { deterministicPartitionKey } from "./dpk";

console.log(deterministicPartitionKey());
console.log(deterministicPartitionKey("test"));
console.log(deterministicPartitionKey({
  test: 1
}));
console.log(deterministicPartitionKey({
  partitionKey: 'custom-key'
}));
