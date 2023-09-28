export class Polynomial {
    coefs: number[]
    constructor(
        coefs: number[]
    ) {
        this.coefs = coefs
    }
    deriv() {
        return new Polynomial(
            this.coefs
                .map((a, n) => n * a)
                .toSpliced(0, 1)
        )
    }
}