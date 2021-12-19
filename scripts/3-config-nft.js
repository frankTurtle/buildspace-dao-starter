import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0x199e2c952227B65bA456A5cBf4c2679Fd2e68109",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "🐢🐢",
                description: "This NFT will give you access to 🐢DAO!",
                image: readFileSync("scripts/assets/turtleNFT.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()