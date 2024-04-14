const hre = require("hardhat");

async function main() {
  const PayUp = await hre.ethers.getContractFactory("PayUp")
  const payUp = await PayUp.deploy()

  await payUp.deployed()

  console.log("PayUp deployed to:", payUp.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})