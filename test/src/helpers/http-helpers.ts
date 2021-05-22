import { HttpResponse } from "../protocols/http";

export const badRequest = (e: Error): HttpResponse => {
    return {
        status: 400,
        body: e
    }
}