const versionCommand = require("../../cmds/version");
const { version } = require("../../package.json");

describe("version", () => {
  it("would show the most recent version of the app. ", async () => {
    const versionFunction = await versionCommand("version", version);
    expect(versionFunction).toBe(version);
  });
});
