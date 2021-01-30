interface PositionNumber {
  x: number | undefined;
  y: number | undefined;
}

interface PosStr extends PositionNumber {
  z: string;
}

function position(): PositionNumber;
function position(a: number): PosStr;
function position(a: number, b: number): PositionNumber;

function position(a?: number, b?: number): PositionNumber | PosStr {
  if (!a && !b) {
    return {
      x: undefined,
      y: undefined
    }; // {x: 'string', y: true}
  }

  if (a && !b) {
    return {
      x: a,
      y: undefined,
      z: "error"
    };
  }

  return {
    x: a,
    y: b
  };
}

console.log(position());
console.log(position(1));
console.log(position(1, 2));
