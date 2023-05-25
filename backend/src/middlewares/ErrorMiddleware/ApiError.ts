export default class ApiError extends Error {
    status: number;
    data: object[];

    constructor(message: string, status: number = 500, data: object[] = []) {
        super(message);
        this.status = status;
        this.data = data;
    }

    static unauthorizedError(message: string = 'user is not authenticated'): ApiError {
        return new ApiError(message, 401);
    }

    static badRequest(message: string = 'Bad request', data: object[] = []): ApiError {
        return new ApiError(message, 400, data);
    }

    static notFound(message: string = 'Not Found', data: object[] = []): ApiError {
        return new ApiError(message, 404, data);
    }

    static tooManyRequests(message: string = 'Too Many Requests'): ApiError {
        return new ApiError(message, 429);
    }

    static forbidden(message: string = 'You don\'t have permissions'): ApiError {
        return new ApiError(message, 403);
    }

    static serverError(message: string = 'Internal server error', data: object[] = []): ApiError {
        return new ApiError(message, 500, data);
    }
}
