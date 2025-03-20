const { expect } = require("chai");
const hre = require("hardhat");


describe("Shipping", function () {
    let shippingContract;
    before(async () => {
        // ⽣成合约实例并且复⽤
        shippingContract = await hre.ethers.deployContract("Shipping", []); });
    it("should return the status Pending", async function () {
        // assert that the value is correct
        expect(await shippingContract.Status()).to.equal("Pending"); });
    it("should return the status Shipped", async () => {
        // Calling the Shipped() function
        await shippingContract.Shipped();
        // Checking if the status is Shipped
        expect(await shippingContract.Status()).to.equal("Shipped");
    });
});


let addMethod = (a,b) => a+b;

let diffMethod = (c,d) =>c*d;

window.onload.call()

function getData(number,addNumber) {
    return number+addNumber;
}