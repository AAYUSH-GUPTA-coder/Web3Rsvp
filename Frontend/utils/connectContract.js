import abiJSON from "../utils/Web3RSVP.json";
import { ethers } from "ethers";

function connectContract() {
    const contractAddress = "0xc35203df524017eabb72b886c6b9e119a0e5fba3";
    const contractABI = abiJSON.abi;
    let rsvpContract;
    try {
        const { ethereum } = window;
  
        if (ethereum.chainId === "0x13881") {
          //checking for eth object in the window, see if they have wallet connected to Mumbai network
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          console.log("contractABI", contractABI);
          rsvpContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          ); // instantiating new connection to the contract
        } else {
          throw new Error('Please connect to the Polygon Mumbai network.')
        }
      } catch (error) {
        console.log("ERROR:", error);
      }
      return rsvpContract;
  }
  
  export default connectContract;
  