pragma solidity >= 0.4.0 < 0.7.0;

contract Greeter {
    function greet() external pure returns(string memory) {
        return "Hello, World!";
    }

    function setGreeting(string calldata greeting) external {}
}