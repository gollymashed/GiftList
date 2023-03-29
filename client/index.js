const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  const index = Math.floor(Math.random() * niceList.length);
  const randomName = niceList[index];
  const proof = new MerkleTree(niceList).getProof(index);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: randomName,
    proof: proof,
  });

  console.log({ gift });
}

main();
