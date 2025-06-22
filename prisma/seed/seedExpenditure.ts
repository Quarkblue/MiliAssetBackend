import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function seedExpenditure() {
    const seedData = [
            {
              "assetId": 1,
              "baseId": 3,
              "personnelId": 9,
              "quantity": 9,
              "date": "2024-11-22T02:39:31.178298"
            },
            {
              "assetId": 2,
              "baseId": 1,
              "personnelId": 14,
              "quantity": 3,
              "date": "2025-04-20T02:39:31.178334"
            },
            {
              "assetId": 3,
              "baseId": 3,
              "personnelId": 26,
              "quantity": 8,
              "date": "2025-04-13T02:39:31.178340"
            },
            {
              "assetId": 4,
              "baseId": 1,
              "personnelId": 120,
              "quantity": 9,
              "date": "2024-12-16T02:39:31.178344"
            },
            {
              "assetId": 5,
              "baseId": 3,
              "personnelId": 77,
              "quantity": 5,
              "date": "2024-11-29T02:39:31.178348"
            },
            {
              "assetId": 6,
              "baseId": 4,
              "personnelId": 59,
              "quantity": 7,
              "date": "2025-03-25T02:39:31.178352"
            },
            {
              "assetId": 7,
              "baseId": 4,
              "personnelId": 33,
              "quantity": 7,
              "date": "2024-11-01T02:39:31.178359"
            },
            {
              "assetId": 8,
              "baseId": 1,
              "personnelId": 48,
              "quantity": 3,
              "date": "2024-09-23T02:39:31.178363"
            },
            {
              "assetId": 9,
              "baseId": 1,
              "personnelId": 61,
              "quantity": 8,
              "date": "2024-10-30T02:39:31.178367"
            },
            {
              "assetId": 10,
              "baseId": 4,
              "personnelId": 70,
              "quantity": 6,
              "date": "2024-09-19T02:39:31.178371"
            },
            {
              "assetId": 11,
              "baseId": 2,
              "personnelId": 61,
              "quantity": 1,
              "date": "2024-06-30T02:39:31.178375"
            },
            {
              "assetId": 12,
              "baseId": 2,
              "personnelId": 19,
              "quantity": 3,
              "date": "2024-08-12T02:39:31.178378"
            },
            {
              "assetId": 13,
              "baseId": 3,
              "personnelId": 2,
              "quantity": 2,
              "date": "2025-06-18T02:39:31.178382"
            },
            {
              "assetId": 14,
              "baseId": 3,
              "personnelId": 85,
              "quantity": 3,
              "date": "2024-08-17T02:39:31.178386"
            },
            {
              "assetId": 15,
              "baseId": 3,
              "personnelId": 96,
              "quantity": 8,
              "date": "2025-05-11T02:39:31.178390"
            },
            {
              "assetId": 16,
              "baseId": 1,
              "personnelId": 25,
              "quantity": 3,
              "date": "2025-04-16T02:39:31.178394"
            },
            {
              "assetId": 17,
              "baseId": 1,
              "personnelId": 15,
              "quantity": 4,
              "date": "2024-09-01T02:39:31.178398"
            },
            {
              "assetId": 18,
              "baseId": 3,
              "personnelId": 7,
              "quantity": 10,
              "date": "2024-12-28T02:39:31.178402"
            },
            {
              "assetId": 19,
              "baseId": 1,
              "personnelId": 119,
              "quantity": 5,
              "date": "2024-08-05T02:39:31.178406"
            },
            {
              "assetId": 20,
              "baseId": 4,
              "personnelId": 2,
              "quantity": 10,
              "date": "2025-04-06T02:39:31.178409"
            },
            {
              "assetId": 21,
              "baseId": 3,
              "personnelId": 19,
              "quantity": 6,
              "date": "2024-09-26T02:39:31.178413"
            },
            {
              "assetId": 22,
              "baseId": 1,
              "personnelId": 57,
              "quantity": 10,
              "date": "2025-04-25T02:39:31.178417"
            },
            {
              "assetId": 23,
              "baseId": 2,
              "personnelId": 113,
              "quantity": 9,
              "date": "2025-03-20T02:39:31.178421"
            },
            {
              "assetId": 24,
              "baseId": 1,
              "personnelId": 81,
              "quantity": 10,
              "date": "2025-03-14T02:39:31.178425"
            },
            {
              "assetId": 25,
              "baseId": 4,
              "personnelId": 7,
              "quantity": 10,
              "date": "2025-05-18T02:39:31.178430"
            },
            {
              "assetId": 26,
              "baseId": 1,
              "personnelId": 76,
              "quantity": 5,
              "date": "2025-01-17T02:39:31.178434"
            },
            {
              "assetId": 27,
              "baseId": 3,
              "personnelId": 94,
              "quantity": 3,
              "date": "2024-10-24T02:39:31.178438"
            },
            {
              "assetId": 28,
              "baseId": 4,
              "personnelId": 72,
              "quantity": 5,
              "date": "2024-09-02T02:39:31.178442"
            },
            {
              "assetId": 29,
              "baseId": 3,
              "personnelId": 49,
              "quantity": 8,
              "date": "2025-02-24T02:39:31.178446"
            },
            {
              "assetId": 30,
              "baseId": 4,
              "personnelId": 83,
              "quantity": 2,
              "date": "2024-10-20T02:39:31.178450"
            },
            {
              "assetId": 31,
              "baseId": 1,
              "personnelId": 52,
              "quantity": 5,
              "date": "2024-07-24T02:39:31.178454"
            },
            {
              "assetId": 32,
              "baseId": 3,
              "personnelId": 76,
              "quantity": 6,
              "date": "2024-09-17T02:39:31.178457"
            },
            {
              "assetId": 33,
              "baseId": 3,
              "personnelId": 97,
              "quantity": 7,
              "date": "2025-06-04T02:39:31.178461"
            },
            {
              "assetId": 34,
              "baseId": 1,
              "personnelId": 148,
              "quantity": 5,
              "date": "2024-07-21T02:39:31.178465"
            },
            {
              "assetId": 35,
              "baseId": 1,
              "personnelId": 108,
              "quantity": 4,
              "date": "2024-12-11T02:39:31.178469"
            },
            {
              "assetId": 36,
              "baseId": 4,
              "personnelId": 79,
              "quantity": 3,
              "date": "2024-12-04T02:39:31.178473"
            },
            {
              "assetId": 37,
              "baseId": 1,
              "personnelId": 125,
              "quantity": 4,
              "date": "2025-06-03T02:39:31.178477"
            },
            {
              "assetId": 38,
              "baseId": 3,
              "personnelId": 3,
              "quantity": 2,
              "date": "2025-02-19T02:39:31.178480"
            },
            {
              "assetId": 39,
              "baseId": 4,
              "personnelId": 30,
              "quantity": 5,
              "date": "2024-07-19T02:39:31.178484"
            },
            {
              "assetId": 40,
              "baseId": 1,
              "personnelId": 33,
              "quantity": 3,
              "date": "2024-11-24T02:39:31.178488"
            },
            {
              "assetId": 41,
              "baseId": 3,
              "personnelId": 110,
              "quantity": 9,
              "date": "2024-10-31T02:39:31.178492"
            },
            {
              "assetId": 42,
              "baseId": 1,
              "personnelId": 89,
              "quantity": 9,
              "date": "2025-03-01T02:39:31.178496"
            },
            {
              "assetId": 43,
              "baseId": 4,
              "personnelId": 148,
              "quantity": 9,
              "date": "2025-04-26T02:39:31.178500"
            },
            {
              "assetId": 44,
              "baseId": 4,
              "personnelId": 57,
              "quantity": 9,
              "date": "2025-02-28T02:39:31.178503"
            },
            {
              "assetId": 45,
              "baseId": 4,
              "personnelId": 16,
              "quantity": 1,
              "date": "2024-12-15T02:39:31.178507"
            },
            {
              "assetId": 46,
              "baseId": 2,
              "personnelId": 138,
              "quantity": 9,
              "date": "2025-02-01T02:39:31.178511"
            },
            {
              "assetId": 47,
              "baseId": 1,
              "personnelId": 30,
              "quantity": 4,
              "date": "2025-01-19T02:39:31.178515"
            },
            {
              "assetId": 48,
              "baseId": 3,
              "personnelId": 86,
              "quantity": 4,
              "date": "2024-11-18T02:39:31.178519"
            },
            {
              "assetId": 49,
              "baseId": 4,
              "personnelId": 150,
              "quantity": 4,
              "date": "2024-08-11T02:39:31.178522"
            },
            {
              "assetId": 50,
              "baseId": 2,
              "personnelId": 149,
              "quantity": 6,
              "date": "2024-07-10T02:39:31.178526"
            },
            {
              "assetId": 51,
              "baseId": 2,
              "personnelId": 57,
              "quantity": 1,
              "date": "2024-08-24T02:39:31.178530"
            },
            {
              "assetId": 52,
              "baseId": 2,
              "personnelId": 61,
              "quantity": 6,
              "date": "2024-07-03T02:39:31.178534"
            },
            {
              "assetId": 53,
              "baseId": 1,
              "personnelId": 78,
              "quantity": 2,
              "date": "2025-05-21T02:39:31.178537"
            },
            {
              "assetId": 54,
              "baseId": 3,
              "personnelId": 20,
              "quantity": 8,
              "date": "2025-03-30T02:39:31.178541"
            },
            {
              "assetId": 55,
              "baseId": 1,
              "personnelId": 75,
              "quantity": 1,
              "date": "2024-12-28T02:39:31.178545"
            },
            {
              "assetId": 56,
              "baseId": 3,
              "personnelId": 144,
              "quantity": 9,
              "date": "2025-04-06T02:39:31.178549"
            },
            {
              "assetId": 57,
              "baseId": 1,
              "personnelId": 125,
              "quantity": 5,
              "date": "2025-01-27T02:39:31.178555"
            },
            {
              "assetId": 58,
              "baseId": 2,
              "personnelId": 82,
              "quantity": 5,
              "date": "2025-03-14T02:39:31.178558"
            },
            {
              "assetId": 59,
              "baseId": 2,
              "personnelId": 138,
              "quantity": 7,
              "date": "2024-09-11T02:39:31.178562"
            },
            {
              "assetId": 60,
              "baseId": 2,
              "personnelId": 105,
              "quantity": 6,
              "date": "2025-04-19T02:39:31.178566"
            },
            {
              "assetId": 61,
              "baseId": 3,
              "personnelId": 125,
              "quantity": 1,
              "date": "2025-02-08T02:39:31.178570"
            },
            {
              "assetId": 62,
              "baseId": 4,
              "personnelId": 63,
              "quantity": 7,
              "date": "2024-10-03T02:39:31.178573"
            },
            {
              "assetId": 63,
              "baseId": 1,
              "personnelId": 143,
              "quantity": 9,
              "date": "2025-04-20T02:39:31.178577"
            },
            {
              "assetId": 64,
              "baseId": 3,
              "personnelId": 123,
              "quantity": 4,
              "date": "2024-09-18T02:39:31.178581"
            },
            {
              "assetId": 65,
              "baseId": 4,
              "personnelId": 146,
              "quantity": 5,
              "date": "2024-07-03T02:39:31.178585"
            },
            {
              "assetId": 66,
              "baseId": 1,
              "personnelId": 51,
              "quantity": 4,
              "date": "2025-02-06T02:39:31.178590"
            },
            {
              "assetId": 67,
              "baseId": 3,
              "personnelId": 35,
              "quantity": 5,
              "date": "2024-12-09T02:39:31.178594"
            },
            {
              "assetId": 68,
              "baseId": 2,
              "personnelId": 96,
              "quantity": 4,
              "date": "2025-05-04T02:39:31.178597"
            },
            {
              "assetId": 69,
              "baseId": 3,
              "personnelId": 85,
              "quantity": 9,
              "date": "2025-02-10T02:39:31.178601"
            },
            {
              "assetId": 70,
              "baseId": 2,
              "personnelId": 42,
              "quantity": 3,
              "date": "2025-01-04T02:39:31.178605"
            },
            {
              "assetId": 71,
              "baseId": 2,
              "personnelId": 25,
              "quantity": 10,
              "date": "2024-09-02T02:39:31.178608"
            },
            {
              "assetId": 72,
              "baseId": 4,
              "personnelId": 60,
              "quantity": 4,
              "date": "2025-03-04T02:39:31.178612"
            },
            {
              "assetId": 73,
              "baseId": 2,
              "personnelId": 118,
              "quantity": 9,
              "date": "2024-07-28T02:39:31.178631"
            },
            {
              "assetId": 74,
              "baseId": 1,
              "personnelId": 56,
              "quantity": 2,
              "date": "2025-06-10T02:39:31.178635"
            },
            {
              "assetId": 75,
              "baseId": 4,
              "personnelId": 55,
              "quantity": 3,
              "date": "2025-04-29T02:39:31.178638"
            },
            {
              "assetId": 76,
              "baseId": 1,
              "personnelId": 52,
              "quantity": 5,
              "date": "2024-10-09T02:39:31.178642"
            },
            {
              "assetId": 77,
              "baseId": 2,
              "personnelId": 99,
              "quantity": 3,
              "date": "2024-12-15T02:39:31.178646"
            },
            {
              "assetId": 78,
              "baseId": 4,
              "personnelId": 110,
              "quantity": 2,
              "date": "2025-04-22T02:39:31.178652"
            },
            {
              "assetId": 79,
              "baseId": 1,
              "personnelId": 75,
              "quantity": 4,
              "date": "2025-04-06T02:39:31.178656"
            },
            {
              "assetId": 80,
              "baseId": 3,
              "personnelId": 63,
              "quantity": 3,
              "date": "2024-07-29T02:39:31.178659"
            },
            {
              "assetId": 81,
              "baseId": 1,
              "personnelId": 143,
              "quantity": 7,
              "date": "2024-10-10T02:39:31.178663"
            },
            {
              "assetId": 82,
              "baseId": 1,
              "personnelId": 129,
              "quantity": 8,
              "date": "2024-08-21T02:39:31.178667"
            },
            {
              "assetId": 83,
              "baseId": 2,
              "personnelId": 57,
              "quantity": 8,
              "date": "2024-08-28T02:39:31.178671"
            },
            {
              "assetId": 84,
              "baseId": 4,
              "personnelId": 47,
              "quantity": 9,
              "date": "2024-10-24T02:39:31.178674"
            },
            {
              "assetId": 85,
              "baseId": 4,
              "personnelId": 97,
              "quantity": 7,
              "date": "2024-10-25T02:39:31.178678"
            },
            {
              "assetId": 86,
              "baseId": 4,
              "personnelId": 19,
              "quantity": 3,
              "date": "2025-02-12T02:39:31.178682"
            },
            {
              "assetId": 87,
              "baseId": 1,
              "personnelId": 96,
              "quantity": 3,
              "date": "2024-12-16T02:39:31.178687"
            },
            {
              "assetId": 88,
              "baseId": 3,
              "personnelId": 43,
              "quantity": 2,
              "date": "2024-11-05T02:39:31.178691"
            },
            {
              "assetId": 89,
              "baseId": 3,
              "personnelId": 106,
              "quantity": 3,
              "date": "2025-01-28T02:39:31.178696"
            },
            {
              "assetId": 90,
              "baseId": 4,
              "personnelId": 87,
              "quantity": 4,
              "date": "2025-04-22T02:39:31.178935"
            },
            {
              "assetId": 91,
              "baseId": 1,
              "personnelId": 144,
              "quantity": 4,
              "date": "2025-04-01T02:39:31.178941"
            },
            {
              "assetId": 92,
              "baseId": 3,
              "personnelId": 7,
              "quantity": 8,
              "date": "2025-01-12T02:39:31.178945"
            },
            {
              "assetId": 93,
              "baseId": 4,
              "personnelId": 55,
              "quantity": 7,
              "date": "2025-02-13T02:39:31.178949"
            },
            {
              "assetId": 94,
              "baseId": 2,
              "personnelId": 138,
              "quantity": 8,
              "date": "2025-02-15T02:39:31.178954"
            },
            {
              "assetId": 95,
              "baseId": 1,
              "personnelId": 114,
              "quantity": 7,
              "date": "2024-07-13T02:39:31.178957"
            },
            {
              "assetId": 96,
              "baseId": 2,
              "personnelId": 103,
              "quantity": 4,
              "date": "2025-02-25T02:39:31.178962"
            },
            {
              "assetId": 97,
              "baseId": 3,
              "personnelId": 98,
              "quantity": 2,
              "date": "2024-09-30T02:39:31.178966"
            },
            {
              "assetId": 98,
              "baseId": 3,
              "personnelId": 116,
              "quantity": 4,
              "date": "2025-02-16T02:39:31.178970"
            },
            {
              "assetId": 99,
              "baseId": 3,
              "personnelId": 47,
              "quantity": 8,
              "date": "2024-08-18T02:39:31.178974"
            },
            {
              "assetId": 100,
              "baseId": 4,
              "personnelId": 63,
              "quantity": 2,
              "date": "2024-09-21T02:39:31.178978"
            },
            {
              "assetId": 101,
              "baseId": 4,
              "personnelId": 40,
              "quantity": 10,
              "date": "2024-10-27T02:39:31.178982"
            },
            {
              "assetId": 102,
              "baseId": 1,
              "personnelId": 144,
              "quantity": 10,
              "date": "2024-11-08T02:39:31.178985"
            },
            {
              "assetId": 103,
              "baseId": 1,
              "personnelId": 86,
              "quantity": 2,
              "date": "2024-09-25T02:39:31.178989"
            },
            {
              "assetId": 104,
              "baseId": 3,
              "personnelId": 146,
              "quantity": 6,
              "date": "2025-05-15T02:39:31.178993"
            },
            {
              "assetId": 105,
              "baseId": 3,
              "personnelId": 108,
              "quantity": 8,
              "date": "2025-01-14T02:39:31.178997"
            },
            {
              "assetId": 106,
              "baseId": 1,
              "personnelId": 134,
              "quantity": 3,
              "date": "2025-01-12T02:39:31.179000"
            },
            {
              "assetId": 107,
              "baseId": 4,
              "personnelId": 36,
              "quantity": 1,
              "date": "2025-02-24T02:39:31.179004"
            },
            {
              "assetId": 108,
              "baseId": 3,
              "personnelId": 46,
              "quantity": 8,
              "date": "2025-02-23T02:39:31.179008"
            },
            {
              "assetId": 109,
              "baseId": 1,
              "personnelId": 41,
              "quantity": 10,
              "date": "2025-02-06T02:39:31.179011"
            },
            {
              "assetId": 110,
              "baseId": 4,
              "personnelId": 120,
              "quantity": 9,
              "date": "2025-03-16T02:39:31.179016"
            },
            {
              "assetId": 111,
              "baseId": 4,
              "personnelId": 37,
              "quantity": 7,
              "date": "2025-06-03T02:39:31.179020"
            },
            {
              "assetId": 112,
              "baseId": 1,
              "personnelId": 30,
              "quantity": 3,
              "date": "2024-08-11T02:39:31.179024"
            },
            {
              "assetId": 113,
              "baseId": 1,
              "personnelId": 38,
              "quantity": 9,
              "date": "2024-09-25T02:39:31.179028"
            },
            {
              "assetId": 114,
              "baseId": 3,
              "personnelId": 132,
              "quantity": 9,
              "date": "2024-09-24T02:39:31.179031"
            },
            {
              "assetId": 115,
              "baseId": 1,
              "personnelId": 77,
              "quantity": 10,
              "date": "2025-03-30T02:39:31.179035"
            },
            {
              "assetId": 116,
              "baseId": 4,
              "personnelId": 132,
              "quantity": 3,
              "date": "2025-04-30T02:39:31.179041"
            },
            {
              "assetId": 117,
              "baseId": 4,
              "personnelId": 92,
              "quantity": 5,
              "date": "2024-06-26T02:39:31.179045"
            },
            {
              "assetId": 118,
              "baseId": 3,
              "personnelId": 136,
              "quantity": 7,
              "date": "2025-04-21T02:39:31.179049"
            },
            {
              "assetId": 119,
              "baseId": 1,
              "personnelId": 99,
              "quantity": 2,
              "date": "2025-06-08T02:39:31.179052"
            },
            {
              "assetId": 120,
              "baseId": 1,
              "personnelId": 70,
              "quantity": 9,
              "date": "2025-04-17T02:39:31.179056"
            },
            {
              "assetId": 121,
              "baseId": 1,
              "personnelId": 40,
              "quantity": 10,
              "date": "2024-06-28T02:39:31.179060"
            },
            {
              "assetId": 122,
              "baseId": 1,
              "personnelId": 75,
              "quantity": 8,
              "date": "2025-01-16T02:39:31.179064"
            },
            {
              "assetId": 123,
              "baseId": 2,
              "personnelId": 14,
              "quantity": 9,
              "date": "2024-09-30T02:39:31.179067"
            },
            {
              "assetId": 124,
              "baseId": 3,
              "personnelId": 41,
              "quantity": 7,
              "date": "2024-11-11T02:39:31.179073"
            },
            {
              "assetId": 125,
              "baseId": 1,
              "personnelId": 144,
              "quantity": 9,
              "date": "2024-11-02T02:39:31.179076"
            },
            {
              "assetId": 126,
              "baseId": 2,
              "personnelId": 49,
              "quantity": 8,
              "date": "2024-09-25T02:39:31.179080"
            },
            {
              "assetId": 127,
              "baseId": 3,
              "personnelId": 31,
              "quantity": 1,
              "date": "2024-08-13T02:39:31.179084"
            },
            {
              "assetId": 128,
              "baseId": 2,
              "personnelId": 44,
              "quantity": 1,
              "date": "2024-11-07T02:39:31.179088"
            },
            {
              "assetId": 129,
              "baseId": 4,
              "personnelId": 18,
              "quantity": 9,
              "date": "2025-01-08T02:39:31.179091"
            },
            {
              "assetId": 130,
              "baseId": 4,
              "personnelId": 10,
              "quantity": 1,
              "date": "2024-09-21T02:39:31.179096"
            },
            {
              "assetId": 131,
              "baseId": 3,
              "personnelId": 60,
              "quantity": 8,
              "date": "2024-07-31T02:39:31.179100"
            },
            {
              "assetId": 132,
              "baseId": 3,
              "personnelId": 92,
              "quantity": 4,
              "date": "2025-02-13T02:39:31.179104"
            },
            {
              "assetId": 133,
              "baseId": 4,
              "personnelId": 100,
              "quantity": 10,
              "date": "2024-07-03T02:39:31.179107"
            },
            {
              "assetId": 134,
              "baseId": 2,
              "personnelId": 22,
              "quantity": 7,
              "date": "2024-09-09T02:39:31.179111"
            },
            {
              "assetId": 135,
              "baseId": 2,
              "personnelId": 8,
              "quantity": 8,
              "date": "2025-06-11T02:39:31.179115"
            },
            {
              "assetId": 136,
              "baseId": 3,
              "personnelId": 7,
              "quantity": 3,
              "date": "2024-07-19T02:39:31.179119"
            },
            {
              "assetId": 137,
              "baseId": 3,
              "personnelId": 106,
              "quantity": 2,
              "date": "2024-07-10T02:39:31.179122"
            },
            {
              "assetId": 138,
              "baseId": 1,
              "personnelId": 5,
              "quantity": 2,
              "date": "2025-03-27T02:39:31.179126"
            },
            {
              "assetId": 139,
              "baseId": 3,
              "personnelId": 20,
              "quantity": 6,
              "date": "2024-08-10T02:39:31.179130"
            },
            {
              "assetId": 140,
              "baseId": 2,
              "personnelId": 89,
              "quantity": 5,
              "date": "2024-09-11T02:39:31.179134"
            },
            {
              "assetId": 141,
              "baseId": 3,
              "personnelId": 57,
              "quantity": 2,
              "date": "2024-10-09T02:39:31.179137"
            },
            {
              "assetId": 142,
              "baseId": 1,
              "personnelId": 104,
              "quantity": 3,
              "date": "2025-04-15T02:39:31.179141"
            },
            {
              "assetId": 143,
              "baseId": 4,
              "personnelId": 38,
              "quantity": 4,
              "date": "2024-07-02T02:39:31.179145"
            },
            {
              "assetId": 144,
              "baseId": 3,
              "personnelId": 72,
              "quantity": 4,
              "date": "2025-04-25T02:39:31.179149"
            },
            {
              "assetId": 145,
              "baseId": 3,
              "personnelId": 54,
              "quantity": 5,
              "date": "2024-09-14T02:39:31.179153"
            },
            {
              "assetId": 146,
              "baseId": 3,
              "personnelId": 51,
              "quantity": 4,
              "date": "2024-11-16T02:39:31.179156"
            },
            {
              "assetId": 147,
              "baseId": 1,
              "personnelId": 65,
              "quantity": 4,
              "date": "2025-05-27T02:39:31.179160"
            },
            {
              "assetId": 148,
              "baseId": 1,
              "personnelId": 43,
              "quantity": 7,
              "date": "2024-07-02T02:39:31.179164"
            },
            {
              "assetId": 149,
              "baseId": 1,
              "personnelId": 48,
              "quantity": 6,
              "date": "2024-07-31T02:39:31.179168"
            },
            {
              "assetId": 150,
              "baseId": 4,
              "personnelId": 50,
              "quantity": 9,
              "date": "2024-09-13T02:39:31.179172"
            }
          ]

    const cleanedData = seedData.map(value => ({
      ...value,
      date: new Date(value.date).toISOString(),
    }))

    await prisma.expenditure.createMany({
        data: cleanedData
    })
    console.log("Expenditure seeded")
}

seedExpenditure().catch((e) => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
});