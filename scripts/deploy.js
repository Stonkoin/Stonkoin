async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(`­deploying contracts with the account ${deployer.address}`);

    const balance = await deployer.getBalance();
    console.log(`deployer's balance :${balance.toString()}`);

    // const Token = await ethers.getContractFactory('Token');
    // const token = await Token.deploy();
    // console.log(`Contract adress : ${token.address}`);

    const Stonkoin = await ethers.getContractFactory('Stonkoin');
    const stonkoin = await Stonkoin.deploy();
    console.log(`Contract adress : ${stonkoin.address}`);
}

main()
    .then(() => {process.exit(0)})
    .catch(error => {
        console.error(error);
        process.exit(1);
    })