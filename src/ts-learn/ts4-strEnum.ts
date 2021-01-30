// TypeScript enums are number based. You can use string literals with union types to mock a string based enum as we did in the CardinalDirection example above. You can even generate a Key:Value structure using the following function:

/** Utility function to create a K:V from a list of strings */
function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

/**
 * Sample create a string enum
 */

export function main() {
  /** Create a K:V */
  const Direction = strEnum(["North", "South", "East", "West"]);
  console.log(Direction);
  /** Create a Type */
  type DirectionT = keyof typeof Direction;

  /**
   * Sample using a string enum
   */
  let sample: DirectionT;

  sample = Direction.North; // Okay
  sample = Direction.West;
  sample = "North"; // Okay
  // sample = 'AnythingElse'; // ERROR!
}
