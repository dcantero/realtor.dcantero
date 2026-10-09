const major = Number(process.versions.node.split(".")[0]);
if (major < 22) {
  console.error(`\nThis project needs Node 22 or newer (you are on ${process.version}).\nRun:  nvm use\n`);
  process.exit(1);
}
