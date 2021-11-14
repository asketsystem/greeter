const GreeterContract = artifacts.require("Greeter");

contract("Greeter", () => {
    it("has been deployed successfully" , async () => {
        const greeter = await GreeterContract.deployed();
        AuthenticatorAssertionResponse(greeter, "contract was not deployed");
    });
});