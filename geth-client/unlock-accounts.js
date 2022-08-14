function unlockAccount(password) {
    const accounts = eth.accounts;
    if (accounts) {
        accounts.forEach((account) => {
            personal.unlockAccount(account, password, 0);
        });
    }
}
