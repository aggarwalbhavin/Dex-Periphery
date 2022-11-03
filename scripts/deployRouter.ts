import { SignerWithAddress } from "../node_modules/@nomiclabs/hardhat-ethers/signers";
import { ethers, network } from "hardhat";
import {
  expandTo18Decimals,
  expandTo6Decimals,
} from "../test/utilities/utilities";
import {
  AbcSwapRouter,
} from "../typechain";

function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function main() {
  // We get the contract to deploy
  

  const router1 = await ethers.getContractFactory("AbcSwapRouter");
  const router = await router1.deploy("","");
  await sleep(4000);
  console.log("Router Deployed", router.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


  