import { existsSync, mkdirSync } from "fs";

if(!existsSync("./temp")) mkdirSync("./temp");

// Download Packwiz Installer

await fetch("https://github.com/packwiz/packwiz-installer-bootstrap/releases/download/v0.0.3/packwiz-installer-bootstrap.jar")
  .then(it => it.blob()).then(it => Bun.write("./temp/packwiz-installer-bootstrap.jar", it));

console.log("Downloaded packwiz");

// Download server

const [forgeVersion, mcVersion] = await Bun.file("./pack.toml").text()
  .then(it => it.split("\n").filter(l => l.startsWith("minecraft") || l.startsWith("forge")).map(l => l.split(" = ")[1].replaceAll('"', ""))) as [string, string];

if(!process.argv.slice(2).includes("--no-server")) {
  await Bun.write("./temp/installer.jar", await fetch(`https://maven.minecraftforge.net/net/minecraftforge/forge/${mcVersion}-${forgeVersion}/forge-${mcVersion}-${forgeVersion}-installer.jar`).then(it => it.blob()));
  Bun.spawnSync({
    cmd: ["java", "-jar", "installer.jar", "--installServer"],
    cwd: "./temp/",
    stdout: "inherit",
    stderr: "inherit"
  });
}

Bun.spawnSync({
  cmd: ["java", "-jar", "packwiz-installer-bootstrap.jar", "-g", "--side", "server", "../pack.toml"],
  stdout: "inherit",
  stderr: "inherit",
  cwd: "./temp/"
});
