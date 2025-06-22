"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function seedTransfers() {
    const seedData = [
        {
            "assetId": 119,
            "fromBaseId": 2,
            "toBaseId": 4,
            "quantity": 8,
            "date": "2024-06-22T21:04:10.148606"
        },
        {
            "assetId": 96,
            "fromBaseId": 4,
            "toBaseId": 1,
            "quantity": 1,
            "date": "2024-06-26T21:04:10.148606"
        },
        {
            "assetId": 102,
            "fromBaseId": 3,
            "toBaseId": 4,
            "quantity": 9,
            "date": "2024-06-28T21:04:10.148606"
        },
        {
            "assetId": 73,
            "fromBaseId": 3,
            "toBaseId": 4,
            "quantity": 1,
            "date": "2024-07-01T21:04:10.148606"
        },
        {
            "assetId": 39,
            "fromBaseId": 1,
            "toBaseId": 2,
            "quantity": 6,
            "date": "2024-07-04T21:04:10.148606"
        },
        {
            "assetId": 50,
            "fromBaseId": 2,
            "toBaseId": 3,
            "quantity": 3,
            "date": "2024-07-07T21:04:10.148606"
        },
        {
            "assetId": 84,
            "fromBaseId": 2,
            "toBaseId": 1,
            "quantity": 7,
            "date": "2024-07-09T21:04:10.148606"
        },
        {
            "assetId": 136,
            "fromBaseId": 1,
            "toBaseId": 3,
            "quantity": 4,
            "date": "2024-07-13T21:04:10.148606"
        },
        {
            "assetId": 115,
            "fromBaseId": 1,
            "toBaseId": 2,
            "quantity": 9,
            "date": "2024-07-18T21:04:10.148606"
        },
        {
            "assetId": 86,
            "fromBaseId": 3,
            "toBaseId": 4,
            "quantity": 7,
            "date": "2024-07-23T21:04:10.148606"
        },
        {
            "assetId": 61,
            "fromBaseId": 3,
            "toBaseId": 1,
            "quantity": 8,
            "date": "2024-07-27T21:04:10.148606"
        },
        {
            "assetId": 44,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 10,
            "date": "2024-07-31T21:04:10.148606"
        },
        {
            "assetId": 66,
            "fromBaseId": 2,
            "toBaseId": 4,
            "quantity": 7,
            "date": "2024-08-03T21:04:10.148606"
        },
        {
            "assetId": 88,
            "fromBaseId": 2,
            "toBaseId": 3,
            "quantity": 10,
            "date": "2024-08-08T21:04:10.148606"
        },
        {
            "assetId": 110,
            "fromBaseId": 3,
            "toBaseId": 1,
            "quantity": 7,
            "date": "2024-08-10T21:04:10.148606"
        },
        {
            "assetId": 60,
            "fromBaseId": 2,
            "toBaseId": 1,
            "quantity": 8,
            "date": "2024-08-14T21:04:10.148606"
        },
        {
            "assetId": 17,
            "fromBaseId": 4,
            "toBaseId": 1,
            "quantity": 6,
            "date": "2024-08-17T21:04:10.148606"
        },
        {
            "assetId": 71,
            "fromBaseId": 1,
            "toBaseId": 4,
            "quantity": 3,
            "date": "2024-08-18T21:04:10.148606"
        },
        {
            "assetId": 66,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 5,
            "date": "2024-08-22T21:04:10.148606"
        },
        {
            "assetId": 142,
            "fromBaseId": 2,
            "toBaseId": 3,
            "quantity": 2,
            "date": "2024-08-25T21:04:10.148606"
        },
        {
            "assetId": 71,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 1,
            "date": "2024-08-28T21:04:10.148606"
        },
        {
            "assetId": 131,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 9,
            "date": "2024-09-01T21:04:10.148606"
        },
        {
            "assetId": 128,
            "fromBaseId": 1,
            "toBaseId": 2,
            "quantity": 10,
            "date": "2024-09-02T21:04:10.148606"
        },
        {
            "assetId": 140,
            "fromBaseId": 1,
            "toBaseId": 3,
            "quantity": 1,
            "date": "2024-09-03T21:04:10.148606"
        },
        {
            "assetId": 18,
            "fromBaseId": 1,
            "toBaseId": 3,
            "quantity": 10,
            "date": "2024-09-06T21:04:10.148606"
        },
        {
            "assetId": 22,
            "fromBaseId": 3,
            "toBaseId": 1,
            "quantity": 10,
            "date": "2024-09-07T21:04:10.148606"
        },
        {
            "assetId": 63,
            "fromBaseId": 2,
            "toBaseId": 3,
            "quantity": 4,
            "date": "2024-09-10T21:04:10.148606"
        },
        {
            "assetId": 119,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 5,
            "date": "2024-09-13T21:04:10.148606"
        },
        {
            "assetId": 105,
            "fromBaseId": 3,
            "toBaseId": 1,
            "quantity": 6,
            "date": "2024-09-17T21:04:10.148606"
        },
        {
            "assetId": 1,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 6,
            "date": "2024-09-22T21:04:10.148606"
        },
        {
            "assetId": 47,
            "fromBaseId": 3,
            "toBaseId": 4,
            "quantity": 6,
            "date": "2024-09-26T21:04:10.148606"
        },
        {
            "assetId": 79,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 4,
            "date": "2024-09-29T21:04:10.148606"
        },
        {
            "assetId": 81,
            "fromBaseId": 1,
            "toBaseId": 2,
            "quantity": 5,
            "date": "2024-10-02T21:04:10.148606"
        },
        {
            "assetId": 122,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 9,
            "date": "2024-10-06T21:04:10.148606"
        },
        {
            "assetId": 35,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 7,
            "date": "2024-10-11T21:04:10.148606"
        },
        {
            "assetId": 67,
            "fromBaseId": 1,
            "toBaseId": 2,
            "quantity": 8,
            "date": "2024-10-14T21:04:10.148606"
        },
        {
            "assetId": 105,
            "fromBaseId": 1,
            "toBaseId": 3,
            "quantity": 2,
            "date": "2024-10-16T21:04:10.148606"
        },
        {
            "assetId": 81,
            "fromBaseId": 2,
            "toBaseId": 3,
            "quantity": 3,
            "date": "2024-10-18T21:04:10.148606"
        },
        {
            "assetId": 97,
            "fromBaseId": 1,
            "toBaseId": 2,
            "quantity": 8,
            "date": "2024-10-22T21:04:10.148606"
        },
        {
            "assetId": 85,
            "fromBaseId": 2,
            "toBaseId": 4,
            "quantity": 9,
            "date": "2024-10-24T21:04:10.148606"
        },
        {
            "assetId": 57,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 10,
            "date": "2024-10-27T21:04:10.148606"
        },
        {
            "assetId": 38,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 7,
            "date": "2024-10-29T21:04:10.148606"
        },
        {
            "assetId": 104,
            "fromBaseId": 2,
            "toBaseId": 4,
            "quantity": 8,
            "date": "2024-11-01T21:04:10.148606"
        },
        {
            "assetId": 77,
            "fromBaseId": 3,
            "toBaseId": 2,
            "quantity": 4,
            "date": "2024-11-05T21:04:10.148606"
        },
        {
            "assetId": 95,
            "fromBaseId": 4,
            "toBaseId": 3,
            "quantity": 9,
            "date": "2024-11-07T21:04:10.148606"
        },
        {
            "assetId": 137,
            "fromBaseId": 2,
            "toBaseId": 4,
            "quantity": 8,
            "date": "2024-11-11T21:04:10.148606"
        },
        {
            "assetId": 91,
            "fromBaseId": 1,
            "toBaseId": 4,
            "quantity": 4,
            "date": "2024-11-12T21:04:10.148606"
        },
        {
            "assetId": 138,
            "fromBaseId": 2,
            "toBaseId": 3,
            "quantity": 9,
            "date": "2024-11-15T21:04:10.148606"
        },
        {
            "assetId": 90,
            "fromBaseId": 3,
            "toBaseId": 4,
            "quantity": 6,
            "date": "2024-11-20T21:04:10.148606"
        },
        {
            "assetId": 28,
            "fromBaseId": 2,
            "toBaseId": 4,
            "quantity": 7,
            "date": "2024-11-24T21:04:10.148606"
        },
        {
            "assetId": 136,
            "fromBaseId": 3,
            "toBaseId": 4,
            "quantity": 3,
            "date": "2024-11-27T21:04:10.148606"
        },
        {
            "assetId": 102,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 5,
            "date": "2024-11-29T21:04:10.148606"
        },
        {
            "assetId": 124,
            "fromBaseId": 3,
            "toBaseId": 1,
            "quantity": 3,
            "date": "2024-11-30T21:04:10.148606"
        },
        {
            "assetId": 37,
            "fromBaseId": 2,
            "toBaseId": 1,
            "quantity": 4,
            "date": "2024-12-03T21:04:10.148606"
        },
        {
            "assetId": 94,
            "fromBaseId": 2,
            "toBaseId": 3,
            "quantity": 8,
            "date": "2024-12-05T21:04:10.148606"
        },
        {
            "assetId": 137,
            "fromBaseId": 4,
            "toBaseId": 3,
            "quantity": 3,
            "date": "2024-12-06T21:04:10.148606"
        },
        {
            "assetId": 72,
            "fromBaseId": 2,
            "toBaseId": 4,
            "quantity": 5,
            "date": "2024-12-11T21:04:10.148606"
        },
        {
            "assetId": 53,
            "fromBaseId": 3,
            "toBaseId": 1,
            "quantity": 3,
            "date": "2024-12-16T21:04:10.148606"
        },
        {
            "assetId": 133,
            "fromBaseId": 4,
            "toBaseId": 1,
            "quantity": 1,
            "date": "2024-12-19T21:04:10.148606"
        },
        {
            "assetId": 14,
            "fromBaseId": 1,
            "toBaseId": 4,
            "quantity": 10,
            "date": "2024-12-23T21:04:10.148606"
        },
        {
            "assetId": 73,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 1,
            "date": "2024-12-24T21:04:10.148606"
        },
        {
            "assetId": 80,
            "fromBaseId": 3,
            "toBaseId": 2,
            "quantity": 2,
            "date": "2024-12-29T21:04:10.148606"
        },
        {
            "assetId": 60,
            "fromBaseId": 1,
            "toBaseId": 3,
            "quantity": 4,
            "date": "2025-01-02T21:04:10.148606"
        },
        {
            "assetId": 104,
            "fromBaseId": 4,
            "toBaseId": 3,
            "quantity": 8,
            "date": "2025-01-07T21:04:10.148606"
        },
        {
            "assetId": 67,
            "fromBaseId": 2,
            "toBaseId": 1,
            "quantity": 1,
            "date": "2025-01-12T21:04:10.148606"
        },
        {
            "assetId": 149,
            "fromBaseId": 1,
            "toBaseId": 3,
            "quantity": 1,
            "date": "2025-01-16T21:04:10.148606"
        },
        {
            "assetId": 135,
            "fromBaseId": 3,
            "toBaseId": 2,
            "quantity": 1,
            "date": "2025-01-19T21:04:10.148606"
        },
        {
            "assetId": 42,
            "fromBaseId": 2,
            "toBaseId": 4,
            "quantity": 5,
            "date": "2025-01-21T21:04:10.148606"
        },
        {
            "assetId": 82,
            "fromBaseId": 3,
            "toBaseId": 2,
            "quantity": 4,
            "date": "2025-01-26T21:04:10.148606"
        },
        {
            "assetId": 98,
            "fromBaseId": 2,
            "toBaseId": 4,
            "quantity": 6,
            "date": "2025-01-30T21:04:10.148606"
        },
        {
            "assetId": 37,
            "fromBaseId": 1,
            "toBaseId": 4,
            "quantity": 2,
            "date": "2025-02-02T21:04:10.148606"
        },
        {
            "assetId": 81,
            "fromBaseId": 3,
            "toBaseId": 4,
            "quantity": 3,
            "date": "2025-02-04T21:04:10.148606"
        },
        {
            "assetId": 1,
            "fromBaseId": 2,
            "toBaseId": 3,
            "quantity": 5,
            "date": "2025-02-09T21:04:10.148606"
        },
        {
            "assetId": 102,
            "fromBaseId": 2,
            "toBaseId": 1,
            "quantity": 4,
            "date": "2025-02-12T21:04:10.148606"
        },
        {
            "assetId": 33,
            "fromBaseId": 3,
            "toBaseId": 1,
            "quantity": 5,
            "date": "2025-02-17T21:04:10.148606"
        },
        {
            "assetId": 113,
            "fromBaseId": 3,
            "toBaseId": 2,
            "quantity": 6,
            "date": "2025-02-22T21:04:10.148606"
        },
        {
            "assetId": 125,
            "fromBaseId": 2,
            "toBaseId": 3,
            "quantity": 2,
            "date": "2025-02-23T21:04:10.148606"
        },
        {
            "assetId": 92,
            "fromBaseId": 4,
            "toBaseId": 3,
            "quantity": 7,
            "date": "2025-02-27T21:04:10.148606"
        },
        {
            "assetId": 52,
            "fromBaseId": 1,
            "toBaseId": 2,
            "quantity": 1,
            "date": "2025-02-28T21:04:10.148606"
        },
        {
            "assetId": 89,
            "fromBaseId": 4,
            "toBaseId": 3,
            "quantity": 7,
            "date": "2025-03-01T21:04:10.148606"
        },
        {
            "assetId": 129,
            "fromBaseId": 2,
            "toBaseId": 1,
            "quantity": 7,
            "date": "2025-03-02T21:04:10.148606"
        },
        {
            "assetId": 137,
            "fromBaseId": 3,
            "toBaseId": 1,
            "quantity": 2,
            "date": "2025-03-06T21:04:10.148606"
        },
        {
            "assetId": 33,
            "fromBaseId": 1,
            "toBaseId": 2,
            "quantity": 4,
            "date": "2025-03-08T21:04:10.148606"
        },
        {
            "assetId": 34,
            "fromBaseId": 4,
            "toBaseId": 3,
            "quantity": 9,
            "date": "2025-03-11T21:04:10.148606"
        },
        {
            "assetId": 23,
            "fromBaseId": 2,
            "toBaseId": 4,
            "quantity": 2,
            "date": "2025-03-16T21:04:10.148606"
        },
        {
            "assetId": 80,
            "fromBaseId": 2,
            "toBaseId": 1,
            "quantity": 2,
            "date": "2025-03-21T21:04:10.148606"
        },
        {
            "assetId": 17,
            "fromBaseId": 1,
            "toBaseId": 4,
            "quantity": 5,
            "date": "2025-03-24T21:04:10.148606"
        },
        {
            "assetId": 52,
            "fromBaseId": 2,
            "toBaseId": 4,
            "quantity": 1,
            "date": "2025-03-29T21:04:10.148606"
        },
        {
            "assetId": 63,
            "fromBaseId": 3,
            "toBaseId": 1,
            "quantity": 1,
            "date": "2025-03-30T21:04:10.148606"
        },
        {
            "assetId": 83,
            "fromBaseId": 4,
            "toBaseId": 1,
            "quantity": 9,
            "date": "2025-04-03T21:04:10.148606"
        },
        {
            "assetId": 56,
            "fromBaseId": 2,
            "toBaseId": 1,
            "quantity": 2,
            "date": "2025-04-05T21:04:10.148606"
        },
        {
            "assetId": 23,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 2,
            "date": "2025-04-08T21:04:10.148606"
        },
        {
            "assetId": 31,
            "fromBaseId": 2,
            "toBaseId": 4,
            "quantity": 1,
            "date": "2025-04-13T21:04:10.148606"
        },
        {
            "assetId": 130,
            "fromBaseId": 4,
            "toBaseId": 3,
            "quantity": 2,
            "date": "2025-04-14T21:04:10.148606"
        },
        {
            "assetId": 110,
            "fromBaseId": 1,
            "toBaseId": 4,
            "quantity": 7,
            "date": "2025-04-19T21:04:10.148606"
        },
        {
            "assetId": 64,
            "fromBaseId": 2,
            "toBaseId": 1,
            "quantity": 4,
            "date": "2025-04-24T21:04:10.148606"
        },
        {
            "assetId": 82,
            "fromBaseId": 2,
            "toBaseId": 3,
            "quantity": 1,
            "date": "2025-04-26T21:04:10.148606"
        },
        {
            "assetId": 57,
            "fromBaseId": 2,
            "toBaseId": 4,
            "quantity": 7,
            "date": "2025-04-27T21:04:10.148606"
        },
        {
            "assetId": 129,
            "fromBaseId": 1,
            "toBaseId": 3,
            "quantity": 3,
            "date": "2025-04-28T21:04:10.148606"
        },
        {
            "assetId": 59,
            "fromBaseId": 1,
            "toBaseId": 3,
            "quantity": 10,
            "date": "2025-04-30T21:04:10.148606"
        },
        {
            "assetId": 27,
            "fromBaseId": 3,
            "toBaseId": 4,
            "quantity": 5,
            "date": "2025-05-03T21:04:10.148606"
        },
        {
            "assetId": 120,
            "fromBaseId": 4,
            "toBaseId": 1,
            "quantity": 10,
            "date": "2025-05-06T21:04:10.148606"
        },
        {
            "assetId": 92,
            "fromBaseId": 3,
            "toBaseId": 1,
            "quantity": 6,
            "date": "2025-05-09T21:04:10.148606"
        },
        {
            "assetId": 45,
            "fromBaseId": 2,
            "toBaseId": 4,
            "quantity": 10,
            "date": "2025-05-13T21:04:10.148606"
        },
        {
            "assetId": 55,
            "fromBaseId": 2,
            "toBaseId": 3,
            "quantity": 10,
            "date": "2025-05-15T21:04:10.148606"
        },
        {
            "assetId": 133,
            "fromBaseId": 1,
            "toBaseId": 4,
            "quantity": 1,
            "date": "2025-05-17T21:04:10.148606"
        },
        {
            "assetId": 56,
            "fromBaseId": 1,
            "toBaseId": 3,
            "quantity": 1,
            "date": "2025-05-19T21:04:10.148606"
        },
        {
            "assetId": 47,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 1,
            "date": "2025-05-21T21:04:10.148606"
        },
        {
            "assetId": 61,
            "fromBaseId": 1,
            "toBaseId": 2,
            "quantity": 5,
            "date": "2025-05-25T21:04:10.148606"
        },
        {
            "assetId": 118,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 7,
            "date": "2025-05-30T21:04:10.148606"
        },
        {
            "assetId": 35,
            "fromBaseId": 2,
            "toBaseId": 4,
            "quantity": 6,
            "date": "2025-06-04T21:04:10.148606"
        },
        {
            "assetId": 70,
            "fromBaseId": 3,
            "toBaseId": 1,
            "quantity": 6,
            "date": "2025-06-07T21:04:10.148606"
        },
        {
            "assetId": 78,
            "fromBaseId": 3,
            "toBaseId": 2,
            "quantity": 6,
            "date": "2025-06-11T21:04:10.148606"
        },
        {
            "assetId": 85,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 6,
            "date": "2025-06-15T21:04:10.148606"
        },
        {
            "assetId": 60,
            "fromBaseId": 3,
            "toBaseId": 1,
            "quantity": 3,
            "date": "2025-06-20T21:04:10.148606"
        },
        {
            "assetId": 105,
            "fromBaseId": 3,
            "toBaseId": 1,
            "quantity": 2,
            "date": "2025-06-23T21:04:10.148606"
        },
        {
            "assetId": 77,
            "fromBaseId": 2,
            "toBaseId": 3,
            "quantity": 4,
            "date": "2025-06-27T21:04:10.148606"
        },
        {
            "assetId": 128,
            "fromBaseId": 2,
            "toBaseId": 1,
            "quantity": 5,
            "date": "2025-07-01T21:04:10.148606"
        },
        {
            "assetId": 144,
            "fromBaseId": 3,
            "toBaseId": 4,
            "quantity": 2,
            "date": "2025-07-05T21:04:10.148606"
        },
        {
            "assetId": 53,
            "fromBaseId": 1,
            "toBaseId": 4,
            "quantity": 1,
            "date": "2025-07-10T21:04:10.148606"
        },
        {
            "assetId": 54,
            "fromBaseId": 3,
            "toBaseId": 2,
            "quantity": 4,
            "date": "2025-07-14T21:04:10.148606"
        },
        {
            "assetId": 144,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 1,
            "date": "2025-07-16T21:04:10.148606"
        },
        {
            "assetId": 138,
            "fromBaseId": 3,
            "toBaseId": 4,
            "quantity": 4,
            "date": "2025-07-20T21:04:10.148606"
        },
        {
            "assetId": 132,
            "fromBaseId": 4,
            "toBaseId": 1,
            "quantity": 6,
            "date": "2025-07-23T21:04:10.148606"
        },
        {
            "assetId": 114,
            "fromBaseId": 1,
            "toBaseId": 4,
            "quantity": 3,
            "date": "2025-07-25T21:04:10.148606"
        },
        {
            "assetId": 84,
            "fromBaseId": 1,
            "toBaseId": 3,
            "quantity": 1,
            "date": "2025-07-27T21:04:10.148606"
        },
        {
            "assetId": 47,
            "fromBaseId": 2,
            "toBaseId": 1,
            "quantity": 1,
            "date": "2025-07-29T21:04:10.148606"
        },
        {
            "assetId": 29,
            "fromBaseId": 3,
            "toBaseId": 4,
            "quantity": 2,
            "date": "2025-08-03T21:04:10.148606"
        },
        {
            "assetId": 24,
            "fromBaseId": 2,
            "toBaseId": 4,
            "quantity": 8,
            "date": "2025-08-06T21:04:10.148606"
        },
        {
            "assetId": 16,
            "fromBaseId": 4,
            "toBaseId": 1,
            "quantity": 6,
            "date": "2025-08-10T21:04:10.148606"
        },
        {
            "assetId": 39,
            "fromBaseId": 2,
            "toBaseId": 3,
            "quantity": 1,
            "date": "2025-08-13T21:04:10.148606"
        },
        {
            "assetId": 150,
            "fromBaseId": 2,
            "toBaseId": 3,
            "quantity": 8,
            "date": "2025-08-18T21:04:10.148606"
        },
        {
            "assetId": 83,
            "fromBaseId": 1,
            "toBaseId": 2,
            "quantity": 6,
            "date": "2025-08-19T21:04:10.148606"
        },
        {
            "assetId": 11,
            "fromBaseId": 4,
            "toBaseId": 1,
            "quantity": 10,
            "date": "2025-08-20T21:04:10.148606"
        },
        {
            "assetId": 87,
            "fromBaseId": 3,
            "toBaseId": 1,
            "quantity": 8,
            "date": "2025-08-22T21:04:10.148606"
        },
        {
            "assetId": 2,
            "fromBaseId": 3,
            "toBaseId": 1,
            "quantity": 10,
            "date": "2025-08-26T21:04:10.148606"
        },
        {
            "assetId": 34,
            "fromBaseId": 3,
            "toBaseId": 4,
            "quantity": 3,
            "date": "2025-08-28T21:04:10.148606"
        },
        {
            "assetId": 89,
            "fromBaseId": 3,
            "toBaseId": 4,
            "quantity": 3,
            "date": "2025-09-02T21:04:10.148606"
        },
        {
            "assetId": 111,
            "fromBaseId": 2,
            "toBaseId": 4,
            "quantity": 3,
            "date": "2025-09-03T21:04:10.148606"
        },
        {
            "assetId": 22,
            "fromBaseId": 1,
            "toBaseId": 2,
            "quantity": 8,
            "date": "2025-09-08T21:04:10.148606"
        },
        {
            "assetId": 41,
            "fromBaseId": 3,
            "toBaseId": 1,
            "quantity": 4,
            "date": "2025-09-10T21:04:10.148606"
        },
        {
            "assetId": 149,
            "fromBaseId": 3,
            "toBaseId": 1,
            "quantity": 1,
            "date": "2025-09-13T21:04:10.148606"
        },
        {
            "assetId": 71,
            "fromBaseId": 2,
            "toBaseId": 4,
            "quantity": 1,
            "date": "2025-09-15T21:04:10.148606"
        },
        {
            "assetId": 108,
            "fromBaseId": 2,
            "toBaseId": 3,
            "quantity": 6,
            "date": "2025-09-16T21:04:10.148606"
        },
        {
            "assetId": 79,
            "fromBaseId": 2,
            "toBaseId": 1,
            "quantity": 2,
            "date": "2025-09-21T21:04:10.148606"
        },
        {
            "assetId": 25,
            "fromBaseId": 4,
            "toBaseId": 1,
            "quantity": 1,
            "date": "2025-09-23T21:04:10.148606"
        },
        {
            "assetId": 29,
            "fromBaseId": 4,
            "toBaseId": 2,
            "quantity": 1,
            "date": "2025-09-24T21:04:10.148606"
        },
        {
            "assetId": 19,
            "fromBaseId": 2,
            "toBaseId": 1,
            "quantity": 1,
            "date": "2025-09-27T21:04:10.148606"
        },
        {
            "assetId": 97,
            "fromBaseId": 2,
            "toBaseId": 1,
            "quantity": 3,
            "date": "2025-10-01T21:04:10.148606"
        },
        {
            "assetId": 147,
            "fromBaseId": 3,
            "toBaseId": 2,
            "quantity": 9,
            "date": "2025-10-03T21:04:10.148606"
        }
    ];
    const cleanedData = seedData.map(value => ({
        ...value,
        date: new Date(value.date).toISOString(),
    }));
    await prisma.transfer.createMany({
        data: cleanedData
    });
    console.log("Transfers seeded");
}
seedTransfers().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});
