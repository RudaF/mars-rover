const executeCommand = require("../functions/executeCommand");

describe("Execute Command", () => {
  const command = "l";
  const currentPosition = { x: 0, y: 0 };
  const currentDirection = "N";

  it("It should return new direction as West when facing North and turning left", () => {
    expect(
      executeCommand(command, currentPosition, currentDirection).newDirection
    ).toBe("W");
  });
});
describe("Execute Command", () => {
  const command = "l";
  const currentPosition = { x: 0, y: 0 };
  const currentDirection = "W";

  it("It should return new direction as South when facing West and turning left", () => {
    expect(
      executeCommand(command, currentPosition, currentDirection).newDirection
    ).toBe("S");
  });
});

describe("Execute Command", () => {
  const command = "l";
  const currentPosition = { x: 0, y: 0 };
  const currentDirection = "S";
  it("It should return new direction as East when facing South and turning left", () => {
    expect(
      executeCommand(command, currentPosition, currentDirection).newDirection
    ).toBe("E");
  });
});

describe("Execute Command", () => {
  const command = "l";
  const currentPosition = { x: 0, y: 0 };
  const currentDirection = "E";
  it("It should return new direction as North when facing East and turning left", () => {
    expect(
      executeCommand(command, currentPosition, currentDirection).newDirection
    ).toBe("N");
  });
});

describe("Execute Command", () => {
  const command = "r";
  const currentPosition = { x: 0, y: 0 };
  const currentDirection = "N";

  it("It should return new direction as East when facing North and turning right", () => {
    expect(
      executeCommand(command, currentPosition, currentDirection).newDirection
    ).toBe("E");
  });
});

describe("Execute Command", () => {
  const command = "r";
  const currentPosition = { x: 0, y: 0 };
  const currentDirection = "E";
  it("It should return new direction as South when facing East and turning right", () => {
    expect(
      executeCommand(command, currentPosition, currentDirection).newDirection
    ).toBe("S");
  });
});

describe("Execute Command", () => {
  const command = "r";
  const currentPosition = { x: 0, y: 0 };
  const currentDirection = "S";
  it("It should return new direction as West when facing South and turning right", () => {
    expect(
      executeCommand(command, currentPosition, currentDirection).newDirection
    ).toBe("W");
  });
});
describe("Execute Command", () => {
  const command = "r";
  const currentPosition = { x: 0, y: 0 };
  const currentDirection = "W";
  it("It should return new direction as North when facing West and turning right", () => {
    expect(
      executeCommand(command, currentPosition, currentDirection).newDirection
    ).toBe("N");
  });
});

describe("Execute Command", () => {
  const command = "m";
  const currentPosition = { x: 0, y: 0 };
  const currentDirection = "E";
  it("It should increase x position when facing east", () => {
    expect(
      executeCommand(command, currentPosition, currentDirection).newPosition.x
    ).toBe(1);
  });
});

describe("Execute Command", () => {
  const command = "m";
  const currentPosition = { x: 0, y: 0 };
  const currentDirection = "N";
  it("It should increase y position when facing north", () => {
    expect(
      executeCommand(command, currentPosition, currentDirection).newPosition.y
    ).toBe(1);
  });
});

describe("Execute Command", () => {
  const command = "m";
  const currentPosition = { x: 1, y: 0 };
  const currentDirection = "W";
  it("It decrease x position when facing west", () => {
    expect(
      executeCommand(command, currentPosition, currentDirection).newPosition.x
    ).toBe(0);
  });
});

describe("Execute Command", () => {
  const command = "m";
  const currentPosition = { x: 2, y: 3 };
  const currentDirection = "S";
  it("It decrease y position when facing south", () => {
    expect(
      executeCommand(command, currentPosition, currentDirection).newPosition.y
    ).toBe(2);
  });
});
