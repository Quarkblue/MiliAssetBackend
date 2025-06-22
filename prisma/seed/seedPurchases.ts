import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function seedPurchases() {
    const seedData = [
            {
              "assetId": 89,
              "baseId": 1,
              "quantity": 37,
              "date": "2024-11-10T20:51:29.390984"
            },
            {
              "assetId": 103,
              "baseId": 2,
              "quantity": 45,
              "date": "2024-11-09T20:51:29.391006"
            },
            {
              "assetId": 77,
              "baseId": 2,
              "quantity": 95,
              "date": "2025-01-05T20:51:29.391017"
            },
            {
              "assetId": 118,
              "baseId": 4,
              "quantity": 26,
              "date": "2024-11-17T20:51:29.391027"
            },
            {
              "assetId": 49,
              "baseId": 3,
              "quantity": 77,
              "date": "2024-07-22T20:51:29.391036"
            },
            {
              "assetId": 116,
              "baseId": 2,
              "quantity": 44,
              "date": "2024-12-03T20:51:29.391046"
            },
            {
              "assetId": 70,
              "baseId": 4,
              "quantity": 55,
              "date": "2024-09-23T20:51:29.391056"
            },
            {
              "assetId": 48,
              "baseId": 3,
              "quantity": 100,
              "date": "2024-11-21T20:51:29.391068"
            },
            {
              "assetId": 24,
              "baseId": 3,
              "quantity": 59,
              "date": "2024-09-30T20:51:29.391080"
            },
            {
              "assetId": 36,
              "baseId": 2,
              "quantity": 35,
              "date": "2025-05-09T20:51:29.391091"
            },
            {
              "assetId": 74,
              "baseId": 1,
              "quantity": 80,
              "date": "2025-04-11T20:51:29.391100"
            },
            {
              "assetId": 58,
              "baseId": 1,
              "quantity": 67,
              "date": "2025-05-19T20:51:29.391109"
            },
            {
              "assetId": 39,
              "baseId": 3,
              "quantity": 66,
              "date": "2024-12-24T20:51:29.391118"
            },
            {
              "assetId": 100,
              "baseId": 2,
              "quantity": 15,
              "date": "2025-05-22T20:51:29.391127"
            },
            {
              "assetId": 119,
              "baseId": 4,
              "quantity": 20,
              "date": "2024-07-20T20:51:29.391137"
            },
            {
              "assetId": 147,
              "baseId": 1,
              "quantity": 74,
              "date": "2025-06-12T20:51:29.391146"
            },
            {
              "assetId": 57,
              "baseId": 3,
              "quantity": 59,
              "date": "2025-05-24T20:51:29.391154"
            },
            {
              "assetId": 77,
              "baseId": 4,
              "quantity": 51,
              "date": "2024-07-26T20:51:29.391163"
            },
            {
              "assetId": 48,
              "baseId": 2,
              "quantity": 40,
              "date": "2024-12-29T20:51:29.391173"
            },
            {
              "assetId": 56,
              "baseId": 3,
              "quantity": 31,
              "date": "2025-06-02T20:51:29.391181"
            },
            {
              "assetId": 99,
              "baseId": 1,
              "quantity": 54,
              "date": "2025-03-14T20:51:29.391190"
            },
            {
              "assetId": 147,
              "baseId": 3,
              "quantity": 32,
              "date": "2024-12-21T20:51:29.391199"
            },
            {
              "assetId": 142,
              "baseId": 2,
              "quantity": 45,
              "date": "2024-09-04T20:51:29.391208"
            },
            {
              "assetId": 136,
              "baseId": 2,
              "quantity": 13,
              "date": "2025-01-18T20:51:29.391217"
            },
            {
              "assetId": 106,
              "baseId": 4,
              "quantity": 91,
              "date": "2024-10-04T20:51:29.391226"
            },
            {
              "assetId": 54,
              "baseId": 1,
              "quantity": 59,
              "date": "2025-05-01T20:51:29.391236"
            },
            {
              "assetId": 127,
              "baseId": 2,
              "quantity": 87,
              "date": "2024-07-03T20:51:29.391245"
            },
            {
              "assetId": 67,
              "baseId": 2,
              "quantity": 69,
              "date": "2024-12-02T20:51:29.391255"
            },
            {
              "assetId": 91,
              "baseId": 4,
              "quantity": 48,
              "date": "2024-07-22T20:51:29.391264"
            },
            {
              "assetId": 85,
              "baseId": 4,
              "quantity": 55,
              "date": "2025-03-08T20:51:29.391274"
            },
            {
              "assetId": 107,
              "baseId": 4,
              "quantity": 94,
              "date": "2024-11-20T20:51:29.391283"
            },
            {
              "assetId": 18,
              "baseId": 4,
              "quantity": 27,
              "date": "2025-03-15T20:51:29.391291"
            },
            {
              "assetId": 121,
              "baseId": 4,
              "quantity": 32,
              "date": "2024-06-22T20:51:29.391301"
            },
            {
              "assetId": 69,
              "baseId": 1,
              "quantity": 95,
              "date": "2025-05-22T20:51:29.391310"
            },
            {
              "assetId": 44,
              "baseId": 2,
              "quantity": 82,
              "date": "2025-04-07T20:51:29.391339"
            },
            {
              "assetId": 149,
              "baseId": 2,
              "quantity": 24,
              "date": "2025-03-18T20:51:29.391348"
            },
            {
              "assetId": 74,
              "baseId": 4,
              "quantity": 7,
              "date": "2024-08-02T20:51:29.391357"
            },
            {
              "assetId": 17,
              "baseId": 2,
              "quantity": 51,
              "date": "2024-09-09T20:51:29.391366"
            },
            {
              "assetId": 3,
              "baseId": 2,
              "quantity": 86,
              "date": "2025-02-24T20:51:29.391376"
            },
            {
              "assetId": 28,
              "baseId": 1,
              "quantity": 8,
              "date": "2024-09-25T20:51:29.391385"
            },
            {
              "assetId": 138,
              "baseId": 1,
              "quantity": 16,
              "date": "2024-10-28T20:51:29.391394"
            },
            {
              "assetId": 22,
              "baseId": 4,
              "quantity": 3,
              "date": "2025-01-13T20:51:29.391404"
            },
            {
              "assetId": 77,
              "baseId": 2,
              "quantity": 18,
              "date": "2024-12-26T20:51:29.391413"
            },
            {
              "assetId": 12,
              "baseId": 1,
              "quantity": 84,
              "date": "2025-05-28T20:51:29.391422"
            },
            {
              "assetId": 22,
              "baseId": 2,
              "quantity": 4,
              "date": "2024-12-31T20:51:29.391432"
            },
            {
              "assetId": 63,
              "baseId": 1,
              "quantity": 48,
              "date": "2024-07-19T20:51:29.391440"
            },
            {
              "assetId": 86,
              "baseId": 1,
              "quantity": 80,
              "date": "2024-08-10T20:51:29.391449"
            },
            {
              "assetId": 27,
              "baseId": 1,
              "quantity": 95,
              "date": "2025-06-09T20:51:29.391458"
            },
            {
              "assetId": 143,
              "baseId": 2,
              "quantity": 59,
              "date": "2024-09-10T20:51:29.391467"
            },
            {
              "assetId": 103,
              "baseId": 1,
              "quantity": 14,
              "date": "2025-05-01T20:51:29.391476"
            },
            {
              "assetId": 19,
              "baseId": 1,
              "quantity": 62,
              "date": "2024-10-26T20:51:29.391485"
            },
            {
              "assetId": 17,
              "baseId": 1,
              "quantity": 73,
              "date": "2024-12-04T20:51:29.391494"
            },
            {
              "assetId": 119,
              "baseId": 2,
              "quantity": 20,
              "date": "2025-06-11T20:51:29.391504"
            },
            {
              "assetId": 59,
              "baseId": 1,
              "quantity": 58,
              "date": "2024-12-29T20:51:29.391514"
            },
            {
              "assetId": 141,
              "baseId": 2,
              "quantity": 85,
              "date": "2024-12-12T20:51:29.391522"
            },
            {
              "assetId": 78,
              "baseId": 4,
              "quantity": 70,
              "date": "2025-05-23T20:51:29.391531"
            },
            {
              "assetId": 26,
              "baseId": 1,
              "quantity": 71,
              "date": "2024-12-20T20:51:29.391541"
            },
            {
              "assetId": 138,
              "baseId": 1,
              "quantity": 74,
              "date": "2024-10-09T20:51:29.391549"
            },
            {
              "assetId": 2,
              "baseId": 4,
              "quantity": 80,
              "date": "2025-01-29T20:51:29.391557"
            },
            {
              "assetId": 128,
              "baseId": 1,
              "quantity": 23,
              "date": "2024-10-12T20:51:29.391567"
            },
            {
              "assetId": 110,
              "baseId": 1,
              "quantity": 15,
              "date": "2025-06-11T20:51:29.391575"
            },
            {
              "assetId": 127,
              "baseId": 3,
              "quantity": 27,
              "date": "2024-12-01T20:51:29.391585"
            },
            {
              "assetId": 35,
              "baseId": 1,
              "quantity": 86,
              "date": "2025-03-02T20:51:29.391595"
            },
            {
              "assetId": 3,
              "baseId": 1,
              "quantity": 65,
              "date": "2024-08-14T20:51:29.391604"
            },
            {
              "assetId": 82,
              "baseId": 3,
              "quantity": 46,
              "date": "2025-03-08T20:51:29.391613"
            },
            {
              "assetId": 127,
              "baseId": 1,
              "quantity": 90,
              "date": "2025-06-08T20:51:29.391622"
            },
            {
              "assetId": 74,
              "baseId": 3,
              "quantity": 25,
              "date": "2025-05-09T20:51:29.391631"
            },
            {
              "assetId": 26,
              "baseId": 3,
              "quantity": 76,
              "date": "2025-03-05T20:51:29.391639"
            },
            {
              "assetId": 83,
              "baseId": 3,
              "quantity": 30,
              "date": "2025-02-03T20:51:29.391649"
            },
            {
              "assetId": 131,
              "baseId": 3,
              "quantity": 11,
              "date": "2024-08-29T20:51:29.391658"
            },
            {
              "assetId": 15,
              "baseId": 1,
              "quantity": 81,
              "date": "2024-10-02T20:51:29.391667"
            },
            {
              "assetId": 35,
              "baseId": 1,
              "quantity": 78,
              "date": "2024-08-24T20:51:29.391676"
            },
            {
              "assetId": 116,
              "baseId": 4,
              "quantity": 57,
              "date": "2025-01-21T20:51:29.391685"
            },
            {
              "assetId": 84,
              "baseId": 1,
              "quantity": 1,
              "date": "2024-10-14T20:51:29.391694"
            },
            {
              "assetId": 24,
              "baseId": 3,
              "quantity": 93,
              "date": "2024-07-21T20:51:29.391703"
            },
            {
              "assetId": 58,
              "baseId": 2,
              "quantity": 5,
              "date": "2024-12-31T20:51:29.391712"
            },
            {
              "assetId": 3,
              "baseId": 4,
              "quantity": 89,
              "date": "2025-01-20T20:51:29.391722"
            },
            {
              "assetId": 140,
              "baseId": 1,
              "quantity": 28,
              "date": "2025-02-17T20:51:29.391731"
            },
            {
              "assetId": 16,
              "baseId": 4,
              "quantity": 82,
              "date": "2025-01-28T20:51:29.391740"
            },
            {
              "assetId": 31,
              "baseId": 2,
              "quantity": 46,
              "date": "2024-07-27T20:51:29.391749"
            },
            {
              "assetId": 22,
              "baseId": 3,
              "quantity": 31,
              "date": "2025-05-21T20:51:29.391758"
            },
            {
              "assetId": 122,
              "baseId": 2,
              "quantity": 63,
              "date": "2025-02-15T20:51:29.391767"
            },
            {
              "assetId": 8,
              "baseId": 3,
              "quantity": 93,
              "date": "2025-05-18T20:51:29.391776"
            },
            {
              "assetId": 33,
              "baseId": 3,
              "quantity": 71,
              "date": "2025-03-20T20:51:29.391784"
            },
            {
              "assetId": 82,
              "baseId": 2,
              "quantity": 20,
              "date": "2024-10-24T20:51:29.391794"
            },
            {
              "assetId": 24,
              "baseId": 2,
              "quantity": 59,
              "date": "2025-01-03T20:51:29.391803"
            },
            {
              "assetId": 14,
              "baseId": 2,
              "quantity": 5,
              "date": "2025-05-06T20:51:29.391812"
            },
            {
              "assetId": 3,
              "baseId": 4,
              "quantity": 36,
              "date": "2025-01-10T20:51:29.391821"
            },
            {
              "assetId": 85,
              "baseId": 1,
              "quantity": 8,
              "date": "2024-08-29T20:51:29.391829"
            },
            {
              "assetId": 116,
              "baseId": 4,
              "quantity": 79,
              "date": "2025-05-25T20:51:29.391839"
            },
            {
              "assetId": 3,
              "baseId": 1,
              "quantity": 73,
              "date": "2024-10-12T20:51:29.391847"
            },
            {
              "assetId": 129,
              "baseId": 3,
              "quantity": 88,
              "date": "2024-06-24T20:51:29.391856"
            },
            {
              "assetId": 77,
              "baseId": 1,
              "quantity": 43,
              "date": "2024-12-01T20:51:29.391865"
            },
            {
              "assetId": 48,
              "baseId": 2,
              "quantity": 73,
              "date": "2024-12-17T20:51:29.391875"
            },
            {
              "assetId": 59,
              "baseId": 2,
              "quantity": 83,
              "date": "2024-08-10T20:51:29.391884"
            },
            {
              "assetId": 58,
              "baseId": 2,
              "quantity": 31,
              "date": "2025-03-06T20:51:29.391893"
            },
            {
              "assetId": 61,
              "baseId": 2,
              "quantity": 42,
              "date": "2024-10-14T20:51:29.391902"
            },
            {
              "assetId": 112,
              "baseId": 2,
              "quantity": 65,
              "date": "2024-07-15T20:51:29.391911"
            },
            {
              "assetId": 130,
              "baseId": 1,
              "quantity": 36,
              "date": "2025-03-27T20:51:29.391920"
            },
            {
              "assetId": 13,
              "baseId": 3,
              "quantity": 29,
              "date": "2024-08-16T20:51:29.391929"
            },
            {
              "assetId": 3,
              "baseId": 1,
              "quantity": 7,
              "date": "2025-03-13T20:51:29.391939"
            },
            {
              "assetId": 35,
              "baseId": 1,
              "quantity": 100,
              "date": "2024-10-16T20:51:29.391948"
            },
            {
              "assetId": 9,
              "baseId": 1,
              "quantity": 74,
              "date": "2024-10-05T20:51:29.391957"
            },
            {
              "assetId": 18,
              "baseId": 1,
              "quantity": 2,
              "date": "2025-06-18T20:51:29.391966"
            },
            {
              "assetId": 2,
              "baseId": 1,
              "quantity": 6,
              "date": "2024-07-20T20:51:29.391974"
            },
            {
              "assetId": 15,
              "baseId": 4,
              "quantity": 17,
              "date": "2024-09-02T20:51:29.391983"
            },
            {
              "assetId": 125,
              "baseId": 3,
              "quantity": 86,
              "date": "2025-02-24T20:51:29.391992"
            },
            {
              "assetId": 63,
              "baseId": 2,
              "quantity": 95,
              "date": "2024-11-27T20:51:29.392001"
            },
            {
              "assetId": 47,
              "baseId": 1,
              "quantity": 51,
              "date": "2024-11-22T20:51:29.392009"
            },
            {
              "assetId": 14,
              "baseId": 1,
              "quantity": 20,
              "date": "2025-01-05T20:51:29.392018"
            },
            {
              "assetId": 23,
              "baseId": 3,
              "quantity": 58,
              "date": "2024-08-26T20:51:29.392027"
            },
            {
              "assetId": 117,
              "baseId": 1,
              "quantity": 7,
              "date": "2024-10-11T20:51:29.392036"
            },
            {
              "assetId": 18,
              "baseId": 3,
              "quantity": 90,
              "date": "2025-03-12T20:51:29.392045"
            },
            {
              "assetId": 123,
              "baseId": 3,
              "quantity": 21,
              "date": "2024-11-17T20:51:29.392054"
            },
            {
              "assetId": 54,
              "baseId": 1,
              "quantity": 72,
              "date": "2025-02-17T20:51:29.392063"
            },
            {
              "assetId": 67,
              "baseId": 3,
              "quantity": 49,
              "date": "2025-04-18T20:51:29.392072"
            },
            {
              "assetId": 87,
              "baseId": 3,
              "quantity": 13,
              "date": "2025-03-13T20:51:29.392082"
            },
            {
              "assetId": 79,
              "baseId": 1,
              "quantity": 17,
              "date": "2024-08-22T20:51:29.392092"
            },
            {
              "assetId": 79,
              "baseId": 3,
              "quantity": 93,
              "date": "2024-12-17T20:51:29.392100"
            },
            {
              "assetId": 120,
              "baseId": 2,
              "quantity": 57,
              "date": "2024-10-20T20:51:29.392110"
            },
            {
              "assetId": 53,
              "baseId": 3,
              "quantity": 82,
              "date": "2025-03-29T20:51:29.392118"
            },
            {
              "assetId": 105,
              "baseId": 1,
              "quantity": 41,
              "date": "2024-07-19T20:51:29.392127"
            },
            {
              "assetId": 113,
              "baseId": 1,
              "quantity": 51,
              "date": "2024-09-14T20:51:29.392137"
            },
            {
              "assetId": 148,
              "baseId": 3,
              "quantity": 96,
              "date": "2024-08-08T20:51:29.392146"
            },
            {
              "assetId": 91,
              "baseId": 2,
              "quantity": 49,
              "date": "2024-12-05T20:51:29.392155"
            },
            {
              "assetId": 57,
              "baseId": 2,
              "quantity": 34,
              "date": "2025-05-01T20:51:29.392165"
            },
            {
              "assetId": 53,
              "baseId": 3,
              "quantity": 42,
              "date": "2025-03-27T20:51:29.392174"
            },
            {
              "assetId": 146,
              "baseId": 3,
              "quantity": 53,
              "date": "2024-06-26T20:51:29.392182"
            },
            {
              "assetId": 89,
              "baseId": 3,
              "quantity": 29,
              "date": "2025-01-26T20:51:29.392191"
            },
            {
              "assetId": 2,
              "baseId": 3,
              "quantity": 65,
              "date": "2025-03-09T20:51:29.392201"
            },
            {
              "assetId": 132,
              "baseId": 4,
              "quantity": 66,
              "date": "2024-09-01T20:51:29.392209"
            },
            {
              "assetId": 57,
              "baseId": 4,
              "quantity": 82,
              "date": "2025-04-22T20:51:29.392217"
            },
            {
              "assetId": 124,
              "baseId": 2,
              "quantity": 93,
              "date": "2025-01-07T20:51:29.392224"
            },
            {
              "assetId": 31,
              "baseId": 1,
              "quantity": 80,
              "date": "2025-05-06T20:51:29.392233"
            },
            {
              "assetId": 83,
              "baseId": 2,
              "quantity": 62,
              "date": "2025-01-07T20:51:29.392242"
            },
            {
              "assetId": 31,
              "baseId": 4,
              "quantity": 4,
              "date": "2024-09-30T20:51:29.392249"
            },
            {
              "assetId": 65,
              "baseId": 3,
              "quantity": 88,
              "date": "2024-07-06T20:51:29.392257"
            },
            {
              "assetId": 6,
              "baseId": 2,
              "quantity": 28,
              "date": "2024-09-11T20:51:29.392265"
            },
            {
              "assetId": 8,
              "baseId": 4,
              "quantity": 5,
              "date": "2025-03-07T20:51:29.392273"
            },
            {
              "assetId": 46,
              "baseId": 2,
              "quantity": 73,
              "date": "2024-06-25T20:51:29.392280"
            },
            {
              "assetId": 41,
              "baseId": 1,
              "quantity": 57,
              "date": "2024-07-18T20:51:29.392289"
            },
            {
              "assetId": 82,
              "baseId": 2,
              "quantity": 3,
              "date": "2025-02-10T20:51:29.392296"
            },
            {
              "assetId": 148,
              "baseId": 4,
              "quantity": 29,
              "date": "2024-11-09T20:51:29.392304"
            },
            {
              "assetId": 136,
              "baseId": 1,
              "quantity": 43,
              "date": "2024-11-21T20:51:29.392311"
            },
            {
              "assetId": 116,
              "baseId": 2,
              "quantity": 12,
              "date": "2025-01-15T20:51:29.392318"
            },
            {
              "assetId": 32,
              "baseId": 3,
              "quantity": 70,
              "date": "2025-03-10T20:51:29.392325"
            },
            {
              "assetId": 146,
              "baseId": 4,
              "quantity": 69,
              "date": "2025-06-01T20:51:29.392335"
            },
            {
              "assetId": 1,
              "baseId": 4,
              "quantity": 62,
              "date": "2024-11-28T20:51:29.392344"
            },
            {
              "assetId": 134,
              "baseId": 3,
              "quantity": 42,
              "date": "2024-10-30T20:51:29.392352"
            },
            {
              "assetId": 87,
              "baseId": 2,
              "quantity": 54,
              "date": "2024-08-24T20:51:29.392361"
            }
          ]

    const cleanedData = seedData.map(value => ({
      ...value,
      date: new Date(value.date).toISOString(),
    }))

    await prisma.purchase.createMany({
        data: cleanedData
    })
    console.log("Purchases seeded")
}

seedPurchases().catch((e) => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
});