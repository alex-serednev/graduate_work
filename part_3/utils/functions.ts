function generateRandomPass(): string {
    let pass: string = '';
    const str: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (let i: number = 1; i <= 10; i++) {
        let char: number = Math.floor(Math.random()
            * str.length + 1);

        pass += str.charAt(char)
    }
    return pass;
};

function findRandomNumber(lowerBound: number, upperBound: number): number {
    const result: number = Math.random() * (upperBound - lowerBound) + lowerBound;
    return (Math.round(result));
};

function generateRandomUserMail() {
    const names = ["alice", "bob", "charlie", "david", "eve", "john", "eliza", "aaron"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomDigits = Math.floor(1000000000000 + Math.random() * 9000000000000).toString().slice(0, Math.floor(Math.random() * 6) + 10);
    const email = `${randomName}${randomDigits}@gmail.com`;
    return email };

function createTestEmail (): string {
    const uniqueNumber: number = findRandomNumber(10, 10000)
    const accessibleEmailWithUniqueNum: string = `svante.jf+${uniqueNumber}@gmail.com`
    return accessibleEmailWithUniqueNum;
};

export { generateRandomPass, createTestEmail, generateRandomUserMail };