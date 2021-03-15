const { ApiPromise, Keyring } = require('@polkadot/api');

async function main () {
  const api = await ApiPromise.create();

  // keys
  const keyring = new Keyring({ type: 'sr25519' });
  const alice = keyring.addFromUri('//Alice');
  const bob = keyring.addFromUri('//Bob');

  // sign & send
  const tx = api.tx.balances.transfer(bob.address, 123456789876n);

  await tx.signAsync(alice);

  const hash = await tx.send();

  console.log(hash.toHex());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(-1);
  });
