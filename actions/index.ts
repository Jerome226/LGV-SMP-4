import { existsSync } from "fs";

const TIMEOUT_IN_MINUTES = 5;

if(!existsSync("./temp/user_jvm_args.txt")) throw new Error("Did you run ./downloadServer.ts ?");
await Bun.write("./temp/eula.txt", "eula=true");

const server_process = Bun.spawn({
  cmd: ["bash", "run.sh"],
  stdout: "inherit",
  stderr: "inherit",
  onExit(proc, exitCode) {
    if(!proc.killed && exitCode !== undefined) {
      process.exit(exitCode!);
    }
  },
  cwd: "./temp/"
});
await Bun.sleep(TIMEOUT_IN_MINUTES * 60 * 1000);
server_process.kill();
console.log("Test passed");