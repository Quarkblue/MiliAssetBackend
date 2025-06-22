"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function seedAssignments() {
    const seedData = [
        {
            "assetId": 70,
            "baseId": 3,
            "personnelId": 137,
            "quantity": 1,
            "date": "2024-10-20T21:01:44.316095"
        },
        {
            "assetId": 46,
            "baseId": 2,
            "personnelId": 52,
            "quantity": 4,
            "date": "2024-07-04T21:01:44.316121"
        },
        {
            "assetId": 123,
            "baseId": 2,
            "personnelId": 113,
            "quantity": 2,
            "date": "2024-11-07T21:01:44.316129"
        },
        {
            "assetId": 29,
            "baseId": 3,
            "personnelId": 145,
            "quantity": 9,
            "date": "2025-04-23T21:01:44.316136"
        },
        {
            "assetId": 41,
            "baseId": 2,
            "personnelId": 131,
            "quantity": 9,
            "date": "2025-05-06T21:01:44.316143"
        },
        {
            "assetId": 41,
            "baseId": 2,
            "personnelId": 34,
            "quantity": 3,
            "date": "2024-11-30T21:01:44.316150"
        },
        {
            "assetId": 122,
            "baseId": 2,
            "personnelId": 34,
            "quantity": 3,
            "date": "2024-07-09T21:01:44.316157"
        },
        {
            "assetId": 62,
            "baseId": 1,
            "personnelId": 72,
            "quantity": 3,
            "date": "2024-12-07T21:01:44.316165"
        },
        {
            "assetId": 99,
            "baseId": 3,
            "personnelId": 82,
            "quantity": 4,
            "date": "2025-05-08T21:01:44.316174"
        },
        {
            "assetId": 101,
            "baseId": 1,
            "personnelId": 29,
            "quantity": 3,
            "date": "2024-08-06T21:01:44.316193"
        },
        {
            "assetId": 68,
            "baseId": 3,
            "personnelId": 37,
            "quantity": 4,
            "date": "2025-03-23T21:01:44.316200"
        },
        {
            "assetId": 64,
            "baseId": 3,
            "personnelId": 87,
            "quantity": 6,
            "date": "2024-08-13T21:01:44.316207"
        },
        {
            "assetId": 22,
            "baseId": 1,
            "personnelId": 52,
            "quantity": 3,
            "date": "2024-10-06T21:01:44.316214"
        },
        {
            "assetId": 139,
            "baseId": 1,
            "personnelId": 73,
            "quantity": 3,
            "date": "2025-02-05T21:01:44.316220"
        },
        {
            "assetId": 130,
            "baseId": 4,
            "personnelId": 129,
            "quantity": 5,
            "date": "2025-01-28T21:01:44.316226"
        },
        {
            "assetId": 3,
            "baseId": 3,
            "personnelId": 138,
            "quantity": 3,
            "date": "2025-05-11T21:01:44.316233"
        },
        {
            "assetId": 25,
            "baseId": 4,
            "personnelId": 124,
            "quantity": 7,
            "date": "2025-06-21T21:01:44.316239"
        },
        {
            "assetId": 23,
            "baseId": 1,
            "personnelId": 18,
            "quantity": 10,
            "date": "2025-01-06T21:01:44.316245"
        },
        {
            "assetId": 74,
            "baseId": 1,
            "personnelId": 147,
            "quantity": 8,
            "date": "2024-07-12T21:01:44.316253"
        },
        {
            "assetId": 4,
            "baseId": 3,
            "personnelId": 143,
            "quantity": 2,
            "date": "2025-04-21T21:01:44.316259"
        },
        {
            "assetId": 133,
            "baseId": 4,
            "personnelId": 139,
            "quantity": 9,
            "date": "2025-03-04T21:01:44.316266"
        },
        {
            "assetId": 2,
            "baseId": 2,
            "personnelId": 137,
            "quantity": 1,
            "date": "2025-06-07T21:01:44.316272"
        },
        {
            "assetId": 123,
            "baseId": 3,
            "personnelId": 103,
            "quantity": 8,
            "date": "2024-10-21T21:01:44.316278"
        },
        {
            "assetId": 148,
            "baseId": 4,
            "personnelId": 6,
            "quantity": 1,
            "date": "2024-07-06T21:01:44.316285"
        },
        {
            "assetId": 71,
            "baseId": 3,
            "personnelId": 8,
            "quantity": 3,
            "date": "2024-12-09T21:01:44.316292"
        },
        {
            "assetId": 18,
            "baseId": 4,
            "personnelId": 112,
            "quantity": 6,
            "date": "2025-05-26T21:01:44.316298"
        },
        {
            "assetId": 76,
            "baseId": 1,
            "personnelId": 8,
            "quantity": 4,
            "date": "2024-12-11T21:01:44.316304"
        },
        {
            "assetId": 92,
            "baseId": 1,
            "personnelId": 118,
            "quantity": 10,
            "date": "2025-01-26T21:01:44.316310"
        },
        {
            "assetId": 123,
            "baseId": 1,
            "personnelId": 139,
            "quantity": 7,
            "date": "2024-07-26T21:01:44.316316"
        },
        {
            "assetId": 113,
            "baseId": 1,
            "personnelId": 137,
            "quantity": 5,
            "date": "2025-04-18T21:01:44.316323"
        },
        {
            "assetId": 99,
            "baseId": 3,
            "personnelId": 68,
            "quantity": 1,
            "date": "2024-12-11T21:01:44.316329"
        },
        {
            "assetId": 85,
            "baseId": 4,
            "personnelId": 128,
            "quantity": 10,
            "date": "2024-09-17T21:01:44.316336"
        },
        {
            "assetId": 47,
            "baseId": 2,
            "personnelId": 118,
            "quantity": 10,
            "date": "2025-06-09T21:01:44.316344"
        },
        {
            "assetId": 98,
            "baseId": 3,
            "personnelId": 57,
            "quantity": 6,
            "date": "2025-05-21T21:01:44.316350"
        },
        {
            "assetId": 78,
            "baseId": 1,
            "personnelId": 51,
            "quantity": 10,
            "date": "2024-12-13T21:01:44.316357"
        },
        {
            "assetId": 14,
            "baseId": 3,
            "personnelId": 38,
            "quantity": 9,
            "date": "2025-05-23T21:01:44.316363"
        },
        {
            "assetId": 125,
            "baseId": 3,
            "personnelId": 126,
            "quantity": 6,
            "date": "2025-04-16T21:01:44.316369"
        },
        {
            "assetId": 27,
            "baseId": 4,
            "personnelId": 36,
            "quantity": 6,
            "date": "2025-04-11T21:01:44.316376"
        },
        {
            "assetId": 146,
            "baseId": 1,
            "personnelId": 113,
            "quantity": 4,
            "date": "2025-02-19T21:01:44.316382"
        },
        {
            "assetId": 22,
            "baseId": 1,
            "personnelId": 2,
            "quantity": 9,
            "date": "2025-02-25T21:01:44.316388"
        },
        {
            "assetId": 15,
            "baseId": 3,
            "personnelId": 14,
            "quantity": 8,
            "date": "2025-05-16T21:01:44.316394"
        },
        {
            "assetId": 15,
            "baseId": 2,
            "personnelId": 61,
            "quantity": 2,
            "date": "2025-06-06T21:01:44.316400"
        },
        {
            "assetId": 33,
            "baseId": 4,
            "personnelId": 140,
            "quantity": 1,
            "date": "2025-05-08T21:01:44.316407"
        },
        {
            "assetId": 77,
            "baseId": 2,
            "personnelId": 35,
            "quantity": 7,
            "date": "2025-01-04T21:01:44.316413"
        },
        {
            "assetId": 58,
            "baseId": 1,
            "personnelId": 131,
            "quantity": 3,
            "date": "2024-07-03T21:01:44.316419"
        },
        {
            "assetId": 105,
            "baseId": 4,
            "personnelId": 136,
            "quantity": 1,
            "date": "2024-10-18T21:01:44.316425"
        },
        {
            "assetId": 96,
            "baseId": 2,
            "personnelId": 136,
            "quantity": 7,
            "date": "2024-11-04T21:01:44.316431"
        },
        {
            "assetId": 15,
            "baseId": 3,
            "personnelId": 113,
            "quantity": 8,
            "date": "2025-04-28T21:01:44.316437"
        },
        {
            "assetId": 24,
            "baseId": 2,
            "personnelId": 8,
            "quantity": 9,
            "date": "2025-01-06T21:01:44.316444"
        },
        {
            "assetId": 150,
            "baseId": 2,
            "personnelId": 67,
            "quantity": 6,
            "date": "2025-04-24T21:01:44.316450"
        },
        {
            "assetId": 98,
            "baseId": 1,
            "personnelId": 132,
            "quantity": 5,
            "date": "2025-01-05T21:01:44.316456"
        },
        {
            "assetId": 13,
            "baseId": 4,
            "personnelId": 145,
            "quantity": 10,
            "date": "2025-03-30T21:01:44.316533"
        },
        {
            "assetId": 128,
            "baseId": 1,
            "personnelId": 32,
            "quantity": 8,
            "date": "2025-04-25T21:01:44.316540"
        },
        {
            "assetId": 102,
            "baseId": 4,
            "personnelId": 139,
            "quantity": 10,
            "date": "2024-12-03T21:01:44.316546"
        },
        {
            "assetId": 42,
            "baseId": 2,
            "personnelId": 90,
            "quantity": 8,
            "date": "2024-10-24T21:01:44.316552"
        },
        {
            "assetId": 99,
            "baseId": 3,
            "personnelId": 41,
            "quantity": 2,
            "date": "2024-07-31T21:01:44.316558"
        },
        {
            "assetId": 93,
            "baseId": 3,
            "personnelId": 119,
            "quantity": 1,
            "date": "2024-06-25T21:01:44.316565"
        },
        {
            "assetId": 92,
            "baseId": 1,
            "personnelId": 128,
            "quantity": 4,
            "date": "2024-09-12T21:01:44.316571"
        },
        {
            "assetId": 43,
            "baseId": 3,
            "personnelId": 63,
            "quantity": 9,
            "date": "2025-01-03T21:01:44.316577"
        },
        {
            "assetId": 22,
            "baseId": 1,
            "personnelId": 12,
            "quantity": 6,
            "date": "2025-03-08T21:01:44.316594"
        },
        {
            "assetId": 66,
            "baseId": 4,
            "personnelId": 44,
            "quantity": 8,
            "date": "2024-11-24T21:01:44.316601"
        },
        {
            "assetId": 36,
            "baseId": 3,
            "personnelId": 51,
            "quantity": 9,
            "date": "2025-06-14T21:01:44.316607"
        },
        {
            "assetId": 63,
            "baseId": 3,
            "personnelId": 145,
            "quantity": 8,
            "date": "2024-09-27T21:01:44.316613"
        },
        {
            "assetId": 49,
            "baseId": 2,
            "personnelId": 36,
            "quantity": 2,
            "date": "2024-08-23T21:01:44.316620"
        },
        {
            "assetId": 75,
            "baseId": 1,
            "personnelId": 37,
            "quantity": 3,
            "date": "2024-07-27T21:01:44.316626"
        },
        {
            "assetId": 62,
            "baseId": 2,
            "personnelId": 59,
            "quantity": 7,
            "date": "2024-07-30T21:01:44.316633"
        },
        {
            "assetId": 55,
            "baseId": 2,
            "personnelId": 118,
            "quantity": 9,
            "date": "2024-06-27T21:01:44.316639"
        },
        {
            "assetId": 66,
            "baseId": 1,
            "personnelId": 145,
            "quantity": 2,
            "date": "2025-05-19T21:01:44.316645"
        },
        {
            "assetId": 90,
            "baseId": 1,
            "personnelId": 69,
            "quantity": 5,
            "date": "2024-08-24T21:01:44.316651"
        },
        {
            "assetId": 123,
            "baseId": 4,
            "personnelId": 70,
            "quantity": 6,
            "date": "2024-08-30T21:01:44.316657"
        },
        {
            "assetId": 125,
            "baseId": 4,
            "personnelId": 87,
            "quantity": 8,
            "date": "2024-11-18T21:01:44.316663"
        },
        {
            "assetId": 63,
            "baseId": 4,
            "personnelId": 9,
            "quantity": 1,
            "date": "2025-02-09T21:01:44.316668"
        },
        {
            "assetId": 41,
            "baseId": 2,
            "personnelId": 11,
            "quantity": 9,
            "date": "2025-04-23T21:01:44.316674"
        },
        {
            "assetId": 11,
            "baseId": 4,
            "personnelId": 29,
            "quantity": 8,
            "date": "2025-04-03T21:01:44.316680"
        },
        {
            "assetId": 109,
            "baseId": 3,
            "personnelId": 97,
            "quantity": 9,
            "date": "2025-04-06T21:01:44.316686"
        },
        {
            "assetId": 70,
            "baseId": 4,
            "personnelId": 5,
            "quantity": 10,
            "date": "2025-04-28T21:01:44.316692"
        },
        {
            "assetId": 12,
            "baseId": 4,
            "personnelId": 36,
            "quantity": 6,
            "date": "2024-07-15T21:01:44.316698"
        },
        {
            "assetId": 99,
            "baseId": 3,
            "personnelId": 81,
            "quantity": 4,
            "date": "2024-08-14T21:01:44.316704"
        },
        {
            "assetId": 123,
            "baseId": 1,
            "personnelId": 120,
            "quantity": 10,
            "date": "2024-08-05T21:01:44.316710"
        },
        {
            "assetId": 18,
            "baseId": 1,
            "personnelId": 14,
            "quantity": 1,
            "date": "2024-09-12T21:01:44.316716"
        },
        {
            "assetId": 2,
            "baseId": 4,
            "personnelId": 49,
            "quantity": 5,
            "date": "2024-07-21T21:01:44.316722"
        },
        {
            "assetId": 4,
            "baseId": 1,
            "personnelId": 9,
            "quantity": 2,
            "date": "2025-06-03T21:01:44.316728"
        },
        {
            "assetId": 1,
            "baseId": 4,
            "personnelId": 102,
            "quantity": 7,
            "date": "2024-08-09T21:01:44.316734"
        },
        {
            "assetId": 9,
            "baseId": 1,
            "personnelId": 135,
            "quantity": 2,
            "date": "2024-10-08T21:01:44.316740"
        },
        {
            "assetId": 146,
            "baseId": 1,
            "personnelId": 117,
            "quantity": 4,
            "date": "2024-07-20T21:01:44.316746"
        },
        {
            "assetId": 67,
            "baseId": 3,
            "personnelId": 7,
            "quantity": 9,
            "date": "2025-05-27T21:01:44.316752"
        },
        {
            "assetId": 72,
            "baseId": 1,
            "personnelId": 12,
            "quantity": 7,
            "date": "2025-01-07T21:01:44.316758"
        },
        {
            "assetId": 71,
            "baseId": 4,
            "personnelId": 144,
            "quantity": 5,
            "date": "2025-05-02T21:01:44.316764"
        },
        {
            "assetId": 95,
            "baseId": 3,
            "personnelId": 76,
            "quantity": 5,
            "date": "2025-05-19T21:01:44.316769"
        },
        {
            "assetId": 106,
            "baseId": 4,
            "personnelId": 13,
            "quantity": 2,
            "date": "2024-08-26T21:01:44.316775"
        },
        {
            "assetId": 42,
            "baseId": 2,
            "personnelId": 24,
            "quantity": 9,
            "date": "2025-06-03T21:01:44.316781"
        },
        {
            "assetId": 123,
            "baseId": 4,
            "personnelId": 83,
            "quantity": 8,
            "date": "2024-11-17T21:01:44.316787"
        },
        {
            "assetId": 147,
            "baseId": 2,
            "personnelId": 124,
            "quantity": 4,
            "date": "2025-02-10T21:01:44.316805"
        },
        {
            "assetId": 68,
            "baseId": 3,
            "personnelId": 104,
            "quantity": 10,
            "date": "2024-08-20T21:01:44.316811"
        },
        {
            "assetId": 36,
            "baseId": 4,
            "personnelId": 131,
            "quantity": 8,
            "date": "2024-08-31T21:01:44.316817"
        },
        {
            "assetId": 68,
            "baseId": 3,
            "personnelId": 76,
            "quantity": 6,
            "date": "2025-03-22T21:01:44.316823"
        },
        {
            "assetId": 130,
            "baseId": 4,
            "personnelId": 33,
            "quantity": 4,
            "date": "2025-01-24T21:01:44.316829"
        },
        {
            "assetId": 46,
            "baseId": 4,
            "personnelId": 21,
            "quantity": 6,
            "date": "2024-08-05T21:01:44.316835"
        },
        {
            "assetId": 95,
            "baseId": 1,
            "personnelId": 100,
            "quantity": 7,
            "date": "2024-08-04T21:01:44.316841"
        },
        {
            "assetId": 100,
            "baseId": 2,
            "personnelId": 66,
            "quantity": 5,
            "date": "2025-03-04T21:01:44.316847"
        },
        {
            "assetId": 141,
            "baseId": 1,
            "personnelId": 114,
            "quantity": 7,
            "date": "2025-06-07T21:01:44.316853"
        },
        {
            "assetId": 43,
            "baseId": 1,
            "personnelId": 78,
            "quantity": 2,
            "date": "2024-06-27T21:01:44.316858"
        },
        {
            "assetId": 28,
            "baseId": 4,
            "personnelId": 94,
            "quantity": 4,
            "date": "2025-06-07T21:01:44.316865"
        },
        {
            "assetId": 43,
            "baseId": 2,
            "personnelId": 116,
            "quantity": 5,
            "date": "2024-09-08T21:01:44.316871"
        },
        {
            "assetId": 64,
            "baseId": 4,
            "personnelId": 140,
            "quantity": 9,
            "date": "2025-05-19T21:01:44.316877"
        },
        {
            "assetId": 48,
            "baseId": 3,
            "personnelId": 82,
            "quantity": 7,
            "date": "2024-09-02T21:01:44.316883"
        },
        {
            "assetId": 22,
            "baseId": 4,
            "personnelId": 89,
            "quantity": 4,
            "date": "2024-10-13T21:01:44.316889"
        },
        {
            "assetId": 98,
            "baseId": 4,
            "personnelId": 25,
            "quantity": 1,
            "date": "2025-02-28T21:01:44.316895"
        },
        {
            "assetId": 42,
            "baseId": 2,
            "personnelId": 130,
            "quantity": 10,
            "date": "2025-04-16T21:01:44.316901"
        },
        {
            "assetId": 32,
            "baseId": 1,
            "personnelId": 9,
            "quantity": 10,
            "date": "2024-11-09T21:01:44.316907"
        },
        {
            "assetId": 145,
            "baseId": 4,
            "personnelId": 11,
            "quantity": 5,
            "date": "2025-05-16T21:01:44.316913"
        },
        {
            "assetId": 115,
            "baseId": 4,
            "personnelId": 69,
            "quantity": 2,
            "date": "2024-07-15T21:01:44.316919"
        },
        {
            "assetId": 6,
            "baseId": 3,
            "personnelId": 18,
            "quantity": 7,
            "date": "2024-07-21T21:01:44.316925"
        },
        {
            "assetId": 10,
            "baseId": 4,
            "personnelId": 4,
            "quantity": 4,
            "date": "2024-09-18T21:01:44.316931"
        },
        {
            "assetId": 133,
            "baseId": 2,
            "personnelId": 113,
            "quantity": 2,
            "date": "2025-06-05T21:01:44.316937"
        },
        {
            "assetId": 67,
            "baseId": 4,
            "personnelId": 26,
            "quantity": 3,
            "date": "2024-12-12T21:01:44.316942"
        },
        {
            "assetId": 19,
            "baseId": 4,
            "personnelId": 39,
            "quantity": 2,
            "date": "2024-06-27T21:01:44.316948"
        },
        {
            "assetId": 87,
            "baseId": 3,
            "personnelId": 93,
            "quantity": 2,
            "date": "2025-04-15T21:01:44.316954"
        },
        {
            "assetId": 101,
            "baseId": 1,
            "personnelId": 91,
            "quantity": 10,
            "date": "2025-04-11T21:01:44.316960"
        },
        {
            "assetId": 106,
            "baseId": 4,
            "personnelId": 150,
            "quantity": 7,
            "date": "2025-05-05T21:01:44.316966"
        },
        {
            "assetId": 49,
            "baseId": 2,
            "personnelId": 24,
            "quantity": 2,
            "date": "2024-08-18T21:01:44.316972"
        },
        {
            "assetId": 42,
            "baseId": 2,
            "personnelId": 116,
            "quantity": 5,
            "date": "2024-11-11T21:01:44.316978"
        },
        {
            "assetId": 74,
            "baseId": 1,
            "personnelId": 5,
            "quantity": 7,
            "date": "2025-02-21T21:01:44.316984"
        },
        {
            "assetId": 126,
            "baseId": 3,
            "personnelId": 77,
            "quantity": 2,
            "date": "2024-09-21T21:01:44.316990"
        },
        {
            "assetId": 6,
            "baseId": 4,
            "personnelId": 120,
            "quantity": 4,
            "date": "2024-08-15T21:01:44.316996"
        },
        {
            "assetId": 127,
            "baseId": 2,
            "personnelId": 40,
            "quantity": 5,
            "date": "2025-04-15T21:01:44.317002"
        },
        {
            "assetId": 6,
            "baseId": 3,
            "personnelId": 60,
            "quantity": 3,
            "date": "2025-03-25T21:01:44.317008"
        },
        {
            "assetId": 115,
            "baseId": 4,
            "personnelId": 80,
            "quantity": 2,
            "date": "2025-04-06T21:01:44.317014"
        },
        {
            "assetId": 126,
            "baseId": 3,
            "personnelId": 77,
            "quantity": 7,
            "date": "2024-08-16T21:01:44.317020"
        },
        {
            "assetId": 145,
            "baseId": 2,
            "personnelId": 68,
            "quantity": 6,
            "date": "2024-07-31T21:01:44.317026"
        },
        {
            "assetId": 85,
            "baseId": 2,
            "personnelId": 3,
            "quantity": 8,
            "date": "2025-03-27T21:01:44.317032"
        },
        {
            "assetId": 10,
            "baseId": 3,
            "personnelId": 64,
            "quantity": 6,
            "date": "2025-03-03T21:01:44.317038"
        },
        {
            "assetId": 26,
            "baseId": 4,
            "personnelId": 1,
            "quantity": 4,
            "date": "2025-03-04T21:01:44.317045"
        },
        {
            "assetId": 70,
            "baseId": 4,
            "personnelId": 127,
            "quantity": 1,
            "date": "2025-05-31T21:01:44.317051"
        },
        {
            "assetId": 133,
            "baseId": 4,
            "personnelId": 8,
            "quantity": 2,
            "date": "2024-08-03T21:01:44.317057"
        },
        {
            "assetId": 102,
            "baseId": 2,
            "personnelId": 136,
            "quantity": 5,
            "date": "2025-05-15T21:01:44.317063"
        },
        {
            "assetId": 72,
            "baseId": 4,
            "personnelId": 7,
            "quantity": 8,
            "date": "2025-02-03T21:01:44.317068"
        },
        {
            "assetId": 34,
            "baseId": 1,
            "personnelId": 132,
            "quantity": 3,
            "date": "2024-12-19T21:01:44.317074"
        },
        {
            "assetId": 60,
            "baseId": 4,
            "personnelId": 73,
            "quantity": 10,
            "date": "2025-01-09T21:01:44.317080"
        },
        {
            "assetId": 40,
            "baseId": 4,
            "personnelId": 146,
            "quantity": 5,
            "date": "2025-06-12T21:01:44.317086"
        },
        {
            "assetId": 130,
            "baseId": 2,
            "personnelId": 123,
            "quantity": 2,
            "date": "2024-11-10T21:01:44.317092"
        },
        {
            "assetId": 54,
            "baseId": 2,
            "personnelId": 87,
            "quantity": 5,
            "date": "2025-01-08T21:01:44.317097"
        },
        {
            "assetId": 37,
            "baseId": 1,
            "personnelId": 8,
            "quantity": 3,
            "date": "2025-04-04T21:01:44.317103"
        },
        {
            "assetId": 9,
            "baseId": 4,
            "personnelId": 136,
            "quantity": 1,
            "date": "2024-12-19T21:01:44.317113"
        },
        {
            "assetId": 94,
            "baseId": 4,
            "personnelId": 10,
            "quantity": 3,
            "date": "2025-01-22T21:01:44.317120"
        },
        {
            "assetId": 141,
            "baseId": 2,
            "personnelId": 68,
            "quantity": 9,
            "date": "2025-01-14T21:01:44.317126"
        },
        {
            "assetId": 134,
            "baseId": 2,
            "personnelId": 95,
            "quantity": 2,
            "date": "2024-09-22T21:01:44.317132"
        },
        {
            "assetId": 41,
            "baseId": 2,
            "personnelId": 147,
            "quantity": 6,
            "date": "2025-05-23T21:01:44.317138"
        },
        {
            "assetId": 77,
            "baseId": 2,
            "personnelId": 72,
            "quantity": 2,
            "date": "2025-04-12T21:01:44.317144"
        },
        {
            "assetId": 63,
            "baseId": 4,
            "personnelId": 118,
            "quantity": 10,
            "date": "2025-02-28T21:01:44.317150"
        }
    ];
    const cleanedData = seedData.map(value => ({
        ...value,
        date: new Date(value.date).toISOString(),
    }));
    await prisma.assignment.createMany({
        data: cleanedData
    });
    console.log("Assignments seeded");
}
seedAssignments().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});
