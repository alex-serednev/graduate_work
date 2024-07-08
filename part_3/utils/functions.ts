function generateRandomPass(): string {
    let pass: string = '';
    let str: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (let i: number = 1; i <= 10; i++) {
        let char: number = Math.floor(Math.random()
            * str.length + 1);

        pass += str.charAt(char)
    }
    return pass;
};

function findRandomNumber(lowerBound: number, upperBound: number): number {
    let result: number = Math.random() * (upperBound - lowerBound) + lowerBound;
    return (Math.round(result));
}

function createTestEmail (): string {
    let uniqueNumber: number = findRandomNumber(10, 10000)
    let accessibleEmailWithUniqueNum: string = `alexey.serednev+${uniqueNumber}@gmail.com`
    return accessibleEmailWithUniqueNum;
};

export { generateRandomPass, createTestEmail };