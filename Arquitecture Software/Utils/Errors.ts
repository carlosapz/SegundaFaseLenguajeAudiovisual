export class NotFound extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'NotFound';
    }
}

export class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}