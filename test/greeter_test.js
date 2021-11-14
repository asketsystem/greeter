const GreeterContract = artifacts.require("Greeter");

contract("Greeter", () => {
    it("has been deployed successfully", async () => {
        const greeter = await GreeterContract.deployed();
        assert(greeter, "contract failed to deploy");
    });

    describe("greet()", () => {
    it("returns 'Hello, World!'", async () => {
        const greeter = await GreeterContract.deployed();
        const expected = "Hello, World!";
        const actual = await greeter.greet();
        assert.equal(actual, expected, "greeted with 'Hello, World!'");
        })
    });
    describe("owner()", () => {
        it("returns the address of the owner", async () => {
            const greeter = await GreeterContract.deployed();
            const owner = await greeter.owner();
            assert(owner, "the current owner");
        });
    });
})
   