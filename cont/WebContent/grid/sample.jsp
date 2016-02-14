<%
	String jsonp = request.getParameter("callback");
	out.print(jsonp+"(");
%>
{
    "error": null,
    "status": "SUCCESS",
    "columns": [
        {
            "displayName": "Benchmark",
            "field": "benchmark"
        },
        {
            "displayName": "Benchmark Name (Alias)",
            "field": "benchmarkAlias"
        },
        {
            "displayName": "Rollover",
            "field": "rolloverFlg",
            "type": "flag",
            "tooltip": {
            	"Y": "Auto Rollover",
            	"N": "No Rollover"
            }
        },
        {
            "displayName": "Rank",
            "field": "rank",
            "type": "number",
            "cellFilter": ""
        },
        {
            "displayName": "Currency",
            "field": "currency",
            "cellClass": "text-center"
        },
        {
            "displayName": "Status",
            "field": "deleteFlg",
            "type": "flag",
            "tooltip": {
            	"A": "Active",
            	"I": "Inactive"
            }
        }
    ],
    "list": [
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "Fed Open",
            "deleteFlg": "I",
            "benchmarkId": 29,
            "rank": 1,
            "benchmark": "Fed Open"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "Fed Target",
            "deleteFlg": "A",
            "benchmarkId": 30,
            "rank": 2,
            "benchmark": "Fed Target"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "Fed Effective 12",
            "deleteFlg": "A",
            "benchmarkId": 70,
            "rank": 3,
            "benchmark": "Fed Effective"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "Fed Funds Index Rate",
            "deleteFlg": "A",
            "benchmarkId": 83,
            "rank": 4,
            "benchmark": "Fed Funds Index Rate"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "BBA LIBOR - USD O/N",
            "deleteFlg": "A",
            "benchmarkId": 43,
            "rank": 4,
            "benchmark": "BBA LIBOR - USD O/N"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "BBA LIBOR - USD 1W",
            "deleteFlg": "A",
            "benchmarkId": 60,
            "rank": 5,
            "benchmark": "BBA LIBOR - USD 1W"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "BBA LIBOR - USD 1M",
            "deleteFlg": "A",
            "benchmarkId": 71,
            "rank": 6,
            "benchmark": "BBA LIBOR - USD 1M"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "BBA LIBOR - USD 2M",
            "deleteFlg": "A",
            "benchmarkId": 72,
            "rank": 7,
            "benchmark": "BBA LIBOR - USD 2M"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "BBA LIBOR - USD 3M",
            "deleteFlg": "A",
            "benchmarkId": 73,
            "rank": 8,
            "benchmark": "BBA LIBOR - USD 3M"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "BBA LIBOR - USD 6M",
            "deleteFlg": "A",
            "benchmarkId": 74,
            "rank": 9,
            "benchmark": "BBA LIBOR - USD 6M"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "BBA LIBOR - USD 1Y",
            "deleteFlg": "A",
            "benchmarkId": 75,
            "rank": 10,
            "benchmark": "BBA LIBOR - USD 1Y"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "15C3-3",
            "deleteFlg": "A",
            "benchmarkId": 80,
            "rank": 11,
            "benchmark": "15C3-3"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "Cost of Funds DR-USD",
            "deleteFlg": "A",
            "benchmarkId": 28,
            "rank": 20,
            "benchmark": "Cost of Funds DR-USD"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "Cost of Funds CR-USD",
            "deleteFlg": "A",
            "benchmarkId": 14,
            "rank": 21,
            "benchmark": "Cost of Funds CR-USD"
        },
        {
            "rolloverFlg": "N",
            "currency": "USD",
            "benchmarkAlias": "JN Test Rate",
            "deleteFlg": "A",
            "benchmarkId": 199,
            "rank": 22,
            "benchmark": "JN Test Rate - 1"
        },
        {
            "rolloverFlg": "N",
            "currency": "USD",
            "benchmarkAlias": "JN Test Rate",
            "deleteFlg": "I",
            "benchmarkId": 198,
            "rank": 23,
            "benchmark": "JN Test Rate"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "Andrew Future",
            "deleteFlg": "A",
            "benchmarkId": 267,
            "rank": 25,
            "benchmark": "Andrew Future"
        },
        {
            "rolloverFlg": "N",
            "currency": "USD",
            "benchmarkAlias": "Mike's BM USD",
            "deleteFlg": "A",
            "benchmarkId": 201,
            "rank": 30,
            "benchmark": "Mike's BM USD"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "Andrew Test",
            "deleteFlg": "A",
            "benchmarkId": 220,
            "rank": 31,
            "benchmark": "Andrew Test"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "yeeha",
            "deleteFlg": "I",
            "benchmarkId": 171,
            "rank": 33,
            "benchmark": "Geo's manual benchmark"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "yeeha!",
            "deleteFlg": "I",
            "benchmarkId": 172,
            "rank": 40,
            "benchmark": "Geos 2nd benchmark"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "Mike Test",
            "deleteFlg": "A",
            "benchmarkId": 259,
            "rank": 41,
            "benchmark": "Mike Test"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "Testing Andrew",
            "deleteFlg": "A",
            "benchmarkId": 271,
            "rank": 42,
            "benchmark": "Andrew Testing"
        },
        {
            "rolloverFlg": "N",
            "currency": "USD",
            "benchmarkAlias": "Peter grid",
            "deleteFlg": "A",
            "benchmarkId": 377,
            "rank": 63,
            "benchmark": "US DISCOUNT RATE"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "ujhkjh",
            "deleteFlg": "A",
            "benchmarkId": 354,
            "rank": 66,
            "benchmark": "ujhkjh"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "test",
            "deleteFlg": "I",
            "benchmarkId": 430,
            "rank": 99,
            "benchmark": "test"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "s",
            "deleteFlg": "I",
            "benchmarkId": 272,
            "rank": 100,
            "benchmark": "Test benchmark"
        },
        {
            "rolloverFlg": "N",
            "currency": "USD",
            "benchmarkAlias": "JIBAR SOUTH AFR - ZAR 4Y",
            "deleteFlg": "A",
            "benchmarkId": 327,
            "rank": 123,
            "benchmark": "JIBAR SOUTH AFR - ZAR 4Y"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "JIBAR SOUTH AFR - ZAR 3Y",
            "deleteFlg": "A",
            "benchmarkId": 326,
            "rank": 134,
            "benchmark": "JIBAR SOUTH AFR - ZAR 3Y"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "Vivek Test",
            "deleteFlg": "I",
            "benchmarkId": 322,
            "rank": 150,
            "benchmark": "Vivek Test"
        },
        {
            "rolloverFlg": "N",
            "currency": "USD",
            "benchmarkAlias": "peter ag-grid123",
            "deleteFlg": "A",
            "benchmarkId": 457,
            "rank": 199,
            "benchmark": "Peter ag-grid"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "peter test 3",
            "deleteFlg": "I",
            "benchmarkId": 355,
            "rank": 200,
            "benchmark": "O/N INDEX SWAP - USD 1Y"
        },
        {
            "rolloverFlg": "N",
            "currency": "USD",
            "benchmarkAlias": "Mike Test 1212",
            "deleteFlg": "A",
            "benchmarkId": 304,
            "rank": 233,
            "benchmark": "Mike Test 1212"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "tstst",
            "deleteFlg": "A",
            "benchmarkId": 330,
            "rank": 302,
            "benchmark": "Tstst"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "petebenchmark",
            "deleteFlg": "A",
            "benchmarkId": 496,
            "rank": 399,
            "benchmark": "peter benchmark"
        },
        {
            "rolloverFlg": "Y",
            "currency": "USD",
            "benchmarkAlias": "testing",
            "deleteFlg": "I",
            "benchmarkId": 456,
            "rank": 999,
            "benchmark": "Peter Test"
        },
        {
            "rolloverFlg": "Y",
            "currency": "AFN",
            "benchmarkAlias": "Test 123 - 12",
            "deleteFlg": "I",
            "benchmarkId": 162,
            "rank": 1,
            "benchmark": "Test 123"
        },
        {
            "rolloverFlg": "Y",
            "currency": "ALL",
            "benchmarkAlias": "Testing Mike",
            "deleteFlg": "A",
            "benchmarkId": 314,
            "rank": 23,
            "benchmark": "Testing Mike"
        },
        {
            "rolloverFlg": "Y",
            "currency": "AMD",
            "benchmarkAlias": "with both dates in past - change",
            "deleteFlg": "A",
            "benchmarkId": 180,
            "rank": 32,
            "benchmark": "with both dates in past"
        },
        {
            "rolloverFlg": "Y",
            "currency": "AMD",
            "benchmarkAlias": "Mike Testing",
            "deleteFlg": "A",
            "benchmarkId": 320,
            "rank": 34,
            "benchmark": "Mike Testing"
        },
        {
            "rolloverFlg": "Y",
            "currency": "ANG",
            "benchmarkAlias": "My Test benchmark",
            "deleteFlg": "I",
            "benchmarkId": 174,
            "rank": 1,
            "benchmark": "My Test benchmark"
        },
        {
            "rolloverFlg": "Y",
            "currency": "AOA",
            "benchmarkAlias": "Test Add12",
            "deleteFlg": "A",
            "benchmarkId": 196,
            "rank": 1,
            "benchmark": "Test Add12"
        },
        {
            "rolloverFlg": "Y",
            "currency": "AOA",
            "benchmarkAlias": "width past start date and future end date",
            "deleteFlg": "A",
            "benchmarkId": 179,
            "rank": 3,
            "benchmark": "width past start date and future end date"
        },
        {
            "rolloverFlg": "N",
            "currency": "AOA",
            "benchmarkAlias": "MyTest new bmc",
            "deleteFlg": "A",
            "benchmarkId": 258,
            "rank": 21,
            "benchmark": "MyTest new bmc"
        },
        {
            "rolloverFlg": "N",
            "currency": "AOA",
            "benchmarkAlias": "Test Name213",
            "deleteFlg": "A",
            "benchmarkId": 420,
            "rank": 45,
            "benchmark": "Test Name213"
        },
        {
            "rolloverFlg": "Y",
            "currency": "AOA",
            "benchmarkAlias": "Mike Alias",
            "deleteFlg": "I",
            "benchmarkId": 334,
            "rank": 80,
            "benchmark": "Mikeeee"
        },
        {
            "rolloverFlg": "Y",
            "currency": "ARS",
            "benchmarkAlias": "test name",
            "deleteFlg": "A",
            "benchmarkId": 203,
            "rank": 1,
            "benchmark": "test name"
        },
        {
            "rolloverFlg": "Y",
            "currency": "ARS",
            "benchmarkAlias": "SWAP SEMI 6M - ARS 5Y",
            "deleteFlg": "I",
            "benchmarkId": 426,
            "rank": 72,
            "benchmark": "SWAP SEMI 6M - ARS 5Y"
        },
        {
            "rolloverFlg": "Y",
            "currency": "ARS",
            "benchmarkAlias": "SWAP SEMI 6M - ARS 2Y",
            "deleteFlg": "A",
            "benchmarkId": 365,
            "rank": 89,
            "benchmark": "SWAP SEMI 6M - ARS 2Y"
        },
        {
            "rolloverFlg": "Y",
            "currency": "ATS",
            "benchmarkAlias": "Raj Test",
            "deleteFlg": "A",
            "benchmarkId": 204,
            "rank": 1,
            "benchmark": "Raj Test"
        },
        {
            "rolloverFlg": "N",
            "currency": "ATS",
            "benchmarkAlias": "Test 12",
            "deleteFlg": "A",
            "benchmarkId": 235,
            "rank": 2,
            "benchmark": "Test 12"
        },
        {
            "rolloverFlg": "Y",
            "currency": "AUD",
            "benchmarkAlias": "BBA LIBOR - AUD SPOT/NEXT",
            "deleteFlg": "A",
            "benchmarkId": 31,
            "rank": 1,
            "benchmark": "BBA LIBOR - AUD SPOT/NEXT"
        },
        {
            "rolloverFlg": "Y",
            "currency": "AUD",
            "benchmarkAlias": "BBA LIBOR - AUD 1Wf",
            "deleteFlg": "A",
            "benchmarkId": 47,
            "rank": 2,
            "benchmark": "BBA LIBOR - AUD 1W"
        },
        {
            "rolloverFlg": "N",
            "currency": "AUD",
            "benchmarkAlias": "AUS AUD O/N INTERBANK CASH",
            "deleteFlg": "A",
            "benchmarkId": 92,
            "rank": 3,
            "benchmark": "AUS AUD O/N INTERBANK CASH"
        },
        {
            "rolloverFlg": "Y",
            "currency": "AUD",
            "benchmarkAlias": "Test empty to date",
            "deleteFlg": "A",
            "benchmarkId": 197,
            "rank": 6,
            "benchmark": "Test empty to date"
        },
        {
            "rolloverFlg": "Y",
            "currency": "AUD",
            "benchmarkAlias": "Cost of Funds DR-AUD",
            "deleteFlg": "A",
            "benchmarkId": 15,
            "rank": 20,
            "benchmark": "Cost of Funds DR-AUD"
        },
        {
            "rolloverFlg": "Y",
            "currency": "AUD",
            "benchmarkAlias": "Cost of Funds CR-AUD",
            "deleteFlg": "A",
            "benchmarkId": 1,
            "rank": 21,
            "benchmark": "Cost of Funds CR-AUD"
        },
        {
            "rolloverFlg": "Y",
            "currency": "AUD",
            "benchmarkAlias": "Benchmark with from and To date",
            "deleteFlg": "A",
            "benchmarkId": 175,
            "rank": 25,
            "benchmark": "Benchmark with from and To date"
        },
        {
            "rolloverFlg": "Y",
            "currency": "AUD",
            "benchmarkAlias": "Test A",
            "deleteFlg": "A",
            "benchmarkId": 263,
            "rank": 26,
            "benchmark": "Test A"
        },
        {
            "rolloverFlg": "N",
            "currency": "AUD",
            "benchmarkAlias": "AUD TARGET OVERNIGHT RATE",
            "deleteFlg": "A",
            "benchmarkId": 356,
            "rank": 40,
            "benchmark": "AUD TARGET OVERNIGHT RATE"
        },
        {
            "rolloverFlg": "Y",
            "currency": "AWG",
            "benchmarkAlias": "start date end date",
            "deleteFlg": "A",
            "benchmarkId": 177,
            "rank": 2,
            "benchmark": "start date end date"
        },
        {
            "rolloverFlg": "Y",
            "currency": "AZM",
            "benchmarkAlias": "Both past dates Jan 1 - 31Both",
            "deleteFlg": "A",
            "benchmarkId": 178,
            "rank": 2,
            "benchmark": "Both past dates Jan 1- 31"
        },
        {
            "rolloverFlg": "Y",
            "currency": "AZN",
            "benchmarkAlias": "efef",
            "deleteFlg": "A",
            "benchmarkId": 270,
            "rank": 2,
            "benchmark": "efef"
        },
        {
            "rolloverFlg": "N",
            "currency": "AZN",
            "benchmarkAlias": "12323 Test",
            "deleteFlg": "I",
            "benchmarkId": 269,
            "rank": 32,
            "benchmark": "12323 Test"
        },
        {
            "rolloverFlg": "Y",
            "currency": "BAM",
            "benchmarkAlias": "Test Name",
            "deleteFlg": "I",
            "benchmarkId": 202,
            "rank": 1,
            "benchmark": "Test Name"
        },
        {
            "rolloverFlg": "Y",
            "currency": "BAM",
            "benchmarkAlias": "With start date and end date",
            "deleteFlg": "A",
            "benchmarkId": 176,
            "rank": 3,
            "benchmark": "WIth start and end date"
        },
        {
            "rolloverFlg": "Y",
            "currency": "BAM",
            "benchmarkAlias": "Testing future benchmark",
            "deleteFlg": "A",
            "benchmarkId": 264,
            "rank": 23,
            "benchmark": "Testing future benchmark"
        },
        {
            "rolloverFlg": "Y",
            "currency": "BDT",
            "benchmarkAlias": "Test benchmaek",
            "deleteFlg": "A",
            "benchmarkId": 268,
            "rank": 2,
            "benchmark": "Test benchmaek"
        },
        {
            "rolloverFlg": "N",
            "currency": "BRL",
            "benchmarkAlias": "Andrew Test 2",
            "deleteFlg": "A",
            "benchmarkId": 378,
            "rank": 1,
            "benchmark": "BRAZIL CDI - BRL ON"
        },
        {
            "rolloverFlg": "N",
            "currency": "CAD",
            "benchmarkAlias": "CAD TARGET OVERNIGHT RATE",
            "deleteFlg": "A",
            "benchmarkId": 93,
            "rank": 1,
            "benchmark": "CAD TARGET OVERNIGHT RATE"
        },
        {
            "rolloverFlg": "Y",
            "currency": "CAD",
            "benchmarkAlias": "dfhksd fhksjfhskjlf sadfhlask hfaskjdfhkasjdhf sdd",
            "deleteFlg": "A",
            "benchmarkId": 32,
            "rank": 2,
            "benchmark": "BBA LIBOR - CAD O/N"
        },
        {
            "rolloverFlg": "Y",
            "currency": "CAD",
            "benchmarkAlias": "BBA LIBOR - CAD 1W",
            "deleteFlg": "A",
            "benchmarkId": 48,
            "rank": 3,
            "benchmark": "BBA LIBOR - CAD 1W"
        },
        {
            "rolloverFlg": "N",
            "currency": "CAD",
            "benchmarkAlias": "CAD OVERNIGHT BANK RATE",
            "deleteFlg": "A",
            "benchmarkId": 91,
            "rank": 4,
            "benchmark": "CAD OVERNIGHT BANK RATE"
        },
        {
            "rolloverFlg": "N",
            "currency": "CAD",
            "benchmarkAlias": "Cost of Funds DR-CAD",
            "deleteFlg": "A",
            "benchmarkId": 16,
            "rank": 20,
            "benchmark": "Cost of Funds DR-CAD"
        },
        {
            "rolloverFlg": "Y",
            "currency": "CAD",
            "benchmarkAlias": "Yaah!",
            "deleteFlg": "A",
            "benchmarkId": 2,
            "rank": 21,
            "benchmark": "Cost of Funds CR-CAD"
        },
        {
            "rolloverFlg": "Y",
            "currency": "CHF",
            "benchmarkAlias": "BBA LIBOR - CHF SPOT/NEXT",
            "deleteFlg": "A",
            "benchmarkId": 33,
            "rank": 1,
            "benchmark": "BBA LIBOR - CHF SPOT/NEXT"
        },
        {
            "rolloverFlg": "Y",
            "currency": "CHF",
            "benchmarkAlias": "BBA LIBOR - CHF 1W",
            "deleteFlg": "A",
            "benchmarkId": 49,
            "rank": 2,
            "benchmark": "BBA LIBOR - CHF 1W"
        },
        {
            "rolloverFlg": "Y",
            "currency": "CHF",
            "benchmarkAlias": "ICE LIBOR - CHF 1M",
            "deleteFlg": "A",
            "benchmarkId": 367,
            "rank": 5,
            "benchmark": "ICE LIBOR - CHF 1M"
        },
        {
            "rolloverFlg": "Y",
            "currency": "CHF",
            "benchmarkAlias": "Cost of Funds DR-CHF",
            "deleteFlg": "A",
            "benchmarkId": 17,
            "rank": 20,
            "benchmark": "Cost of Funds DR-CHF"
        },
        {
            "rolloverFlg": "Y",
            "currency": "CHF",
            "benchmarkAlias": "Cost of Funds CR-CHF",
            "deleteFlg": "A",
            "benchmarkId": 3,
            "rank": 21,
            "benchmark": "Cost of Funds CR-CHF"
        },
        {
            "rolloverFlg": "Y",
            "currency": "CZK",
            "benchmarkAlias": "PRIBOR FIXING 1",
            "deleteFlg": "I",
            "benchmarkId": 34,
            "rank": 1,
            "benchmark": "PRIBOR FIXING - CZK O/NIGHT"
        },
        {
            "rolloverFlg": "N",
            "currency": "CZK",
            "benchmarkAlias": "PRIBOR FIXING - CZK 1 WEEK",
            "deleteFlg": "A",
            "benchmarkId": 50,
            "rank": 2,
            "benchmark": "PRIBOR FIXING - CZK 1 WEEK"
        },
        {
            "rolloverFlg": "N",
            "currency": "CZK",
            "benchmarkAlias": "O/N INDEX SWAP - CZK 2W",
            "deleteFlg": "I",
            "benchmarkId": 373,
            "rank": 3,
            "benchmark": "O/N INDEX SWAP - CZK 2W"
        },
        {
            "rolloverFlg": "N",
            "currency": "CZK",
            "benchmarkAlias": "O/N INDEX SWAP - CZK 3M",
            "deleteFlg": "I",
            "benchmarkId": 374,
            "rank": 4,
            "benchmark": "O/N INDEX SWAP - CZK 3M"
        },
        {
            "rolloverFlg": "Y",
            "currency": "CZK",
            "benchmarkAlias": "O/N INDEX SWAP - CZK 1",
            "deleteFlg": "A",
            "benchmarkId": 375,
            "rank": 5,
            "benchmark": "O/N INDEX SWAP - CZK 6M"
        },
        {
            "rolloverFlg": "N",
            "currency": "CZK",
            "benchmarkAlias": "O/N INDEX SWAP - CZK 1M - Test",
            "deleteFlg": "I",
            "benchmarkId": 359,
            "rank": 8,
            "benchmark": "O/N INDEX SWAP - CZK 1M"
        },
        {
            "rolloverFlg": "Y",
            "currency": "CZK",
            "benchmarkAlias": "Cost of Funds DR-CZK",
            "deleteFlg": "A",
            "benchmarkId": 18,
            "rank": 20,
            "benchmark": "Cost of Funds DR-CZK"
        },
        {
            "rolloverFlg": "N",
            "currency": "CZK",
            "benchmarkAlias": "PRIBOR FIXING - CZK 9 MONTH",
            "deleteFlg": "A",
            "benchmarkId": 387,
            "rank": 21,
            "benchmark": "PRIBOR FIXING - CZK 9 MONTH"
        },
        {
            "rolloverFlg": "Y",
            "currency": "CZK",
            "benchmarkAlias": "Cost of Funds CR-CZK",
            "deleteFlg": "A",
            "benchmarkId": 4,
            "rank": 21,
            "benchmark": "Cost of Funds CR-CZK"
        },
        {
            "rolloverFlg": "Y",
            "currency": "DKK",
            "benchmarkAlias": "CIBOR FIXING - DKK 1 WEEK",
            "deleteFlg": "A",
            "benchmarkId": 89,
            "rank": 1,
            "benchmark": "CIBOR FIXING - DKK 1 WEEK"
        },
        {
            "rolloverFlg": "Y",
            "currency": "DKK",
            "benchmarkAlias": "BBA LIBOR - DKK SPOT/NEXT",
            "deleteFlg": "A",
            "benchmarkId": 35,
            "rank": 2,
            "benchmark": "BBA LIBOR - DKK SPOT/NEXT"
        },
        {
            "rolloverFlg": "Y",
            "currency": "DKK",
            "benchmarkAlias": "BBA LIBOR - DKK 1W",
            "deleteFlg": "A",
            "benchmarkId": 51,
            "rank": 3,
            "benchmark": "BBA LIBOR - DKK 1W"
        },
        {
            "rolloverFlg": "Y",
            "currency": "DKK",
            "benchmarkAlias": "Cost of Funds DR-DKK",
            "deleteFlg": "A",
            "benchmarkId": 19,
            "rank": 20,
            "benchmark": "Cost of Funds DR-DKK"
        },
        {
            "rolloverFlg": "Y",
            "currency": "DKK",
            "benchmarkAlias": "Cost of Funds CR-DKK",
            "deleteFlg": "A",
            "benchmarkId": 5,
            "rank": 21,
            "benchmark": "Cost of Funds CR-DKK"
        },
        {
            "rolloverFlg": "Y",
            "currency": "EUR",
            "benchmarkAlias": "BBA LIBOR - EUR O/N",
            "deleteFlg": "A",
            "benchmarkId": 36,
            "rank": 1,
            "benchmark": "BBA LIBOR - EUR O/N"
        },
        {
            "rolloverFlg": "Y",
            "currency": "EUR",
            "benchmarkAlias": "EONIA FIXING - EUR O/NIGHT",
            "deleteFlg": "A",
            "benchmarkId": 76,
            "rank": 2,
            "benchmark": "EONIA FIXING - EUR O/NIGHT"
        },
        {
            "rolloverFlg": "Y",
            "currency": "EUR",
            "benchmarkAlias": "BBA LIBOR - EUR 1W",
            "deleteFlg": "A",
            "benchmarkId": 52,
            "rank": 3,
            "benchmark": "BBA LIBOR - EUR 1W"
        },
        {
            "rolloverFlg": "N",
            "currency": "EUR",
            "benchmarkAlias": "EONIA - EUR 1 WEEK",
            "deleteFlg": "A",
            "benchmarkId": 77,
            "rank": 4,
            "benchmark": "EONIA - EUR 1 WEEK"
        },
        {
            "rolloverFlg": "N",
            "currency": "EUR",
            "benchmarkAlias": "andrew test 3",
            "deleteFlg": "A",
            "benchmarkId": 380,
            "rank": 5,
            "benchmark": "BELGIUM T-BILL - 1 YEAR YLD"
        },
        {
            "rolloverFlg": "N",
            "currency": "EUR",
            "benchmarkAlias": "GERMANY T-BILL - 1 YR YIELD",
            "deleteFlg": "I",
            "benchmarkId": 368,
            "rank": 7,
            "benchmark": "GERMANY T-BILL - 1 YR YIELD"
        },
        {
            "rolloverFlg": "N",
            "currency": "EUR",
            "benchmarkAlias": "EURIBOR - (ACT/365) EUR 3M",
            "deleteFlg": "A",
            "benchmarkId": 412,
            "rank": 14,
            "benchmark": "EURIBOR - (ACT/365) EUR 3M"
        },
        {
            "rolloverFlg": "Y",
            "currency": "EUR",
            "benchmarkAlias": "Cost of Funds DR-EUR",
            "deleteFlg": "A",
            "benchmarkId": 20,
            "rank": 20,
            "benchmark": "Cost of Funds DR-EUR"
        },
        {
            "rolloverFlg": "Y",
            "currency": "EUR",
            "benchmarkAlias": "Cost of Funds CR-EUR",
            "deleteFlg": "A",
            "benchmarkId": 6,
            "rank": 21,
            "benchmark": "Cost of Funds CR-EUR"
        },
        {
            "rolloverFlg": "Y",
            "currency": "GBP",
            "benchmarkAlias": "BBA LIBOR - GBP O/N",
            "deleteFlg": "A",
            "benchmarkId": 37,
            "rank": 1,
            "benchmark": "BBA LIBOR - GBP O/N"
        },
        {
            "rolloverFlg": "Y",
            "currency": "GBP",
            "benchmarkAlias": "BBA LIBOR - GBP 1W",
            "deleteFlg": "A",
            "benchmarkId": 53,
            "rank": 2,
            "benchmark": "BBA LIBOR - GBP 1W"
        },
        {
            "rolloverFlg": "Y",
            "currency": "GBP",
            "benchmarkAlias": "Cost of Funds DR-GBP",
            "deleteFlg": "A",
            "benchmarkId": 21,
            "rank": 20,
            "benchmark": "Cost of Funds DR-GBP"
        },
        {
            "rolloverFlg": "Y",
            "currency": "GBP",
            "benchmarkAlias": "Cost of Funds CR-GBP",
            "deleteFlg": "A",
            "benchmarkId": 7,
            "rank": 21,
            "benchmark": "Cost of Funds CR-GBP"
        },
        {
            "rolloverFlg": "N",
            "currency": "HKD",
            "benchmarkAlias": "HKAB SETTLEMENT - HKD O/N",
            "deleteFlg": "A",
            "benchmarkId": 46,
            "rank": 1,
            "benchmark": "HKAB SETTLEMENT - HKD O/N"
        },
        {
            "rolloverFlg": "N",
            "currency": "HKD",
            "benchmarkAlias": "HKAB SETTLEMENT - HKD 1W",
            "deleteFlg": "A",
            "benchmarkId": 54,
            "rank": 2,
            "benchmark": "HKAB SETTLEMENT - HKD 1W"
        },
        {
            "rolloverFlg": "Y",
            "currency": "HKD",
            "benchmarkAlias": "Cost of Funds DR-HKD",
            "deleteFlg": "A",
            "benchmarkId": 45,
            "rank": 20,
            "benchmark": "Cost of Funds DR-HKD"
        },
        {
            "rolloverFlg": "Y",
            "currency": "HKD",
            "benchmarkAlias": "Cost of Funds CR-HKD",
            "deleteFlg": "A",
            "benchmarkId": 44,
            "rank": 21,
            "benchmark": "Cost of Funds CR-HKD"
        },
        {
            "rolloverFlg": null,
            "currency": "HKD",
            "benchmarkAlias": "test3",
            "deleteFlg": "A",
            "benchmarkId": 350,
            "rank": 22,
            "benchmark": "INTERBANK DEP - HKD 2 MONTH"
        },
        {
            "rolloverFlg": "Y",
            "currency": "HUF",
            "benchmarkAlias": "BUBOR FIXING - HUF O/NIGHT",
            "deleteFlg": "A",
            "benchmarkId": 38,
            "rank": 1,
            "benchmark": "BUBOR FIXING - HUF O/NIGHT"
        },
        {
            "rolloverFlg": "N",
            "currency": "HUF",
            "benchmarkAlias": "BUBOR FIXING - HUF 1 WEEK",
            "deleteFlg": "A",
            "benchmarkId": 55,
            "rank": 2,
            "benchmark": "BUBOR FIXING - HUF 1 WEEK"
        },
        {
            "rolloverFlg": "Y",
            "currency": "HUF",
            "benchmarkAlias": "BUBOR FIXING - HUF 1 MONTH",
            "deleteFlg": "A",
            "benchmarkId": 357,
            "rank": 4,
            "benchmark": "BUBOR FIXING - HUF 1 MONTH"
        },
        {
            "rolloverFlg": "Y",
            "currency": "HUF",
            "benchmarkAlias": "Cost of Funds DR-HUF",
            "deleteFlg": "A",
            "benchmarkId": 22,
            "rank": 20,
            "benchmark": "Cost of Funds DR-HUF"
        },
        {
            "rolloverFlg": "Y",
            "currency": "HUF",
            "benchmarkAlias": "Cost of Funds CR-HUF",
            "deleteFlg": "A",
            "benchmarkId": 8,
            "rank": 21,
            "benchmark": "Cost of Funds CR-HUF"
        },
        {
            "rolloverFlg": "N",
            "currency": "ILS",
            "benchmarkAlias": "frfe",
            "deleteFlg": "A",
            "benchmarkId": 352,
            "rank": 85,
            "benchmark": "TELBOR FIXING - ILS 1 MONTH"
        },
        {
            "rolloverFlg": "Y",
            "currency": "JPY",
            "benchmarkAlias": "BBA LIBOR - JPY SPOT/NEXT",
            "deleteFlg": "A",
            "benchmarkId": 39,
            "rank": 1,
            "benchmark": "BBA LIBOR - JPY SPOT/NEXT"
        },
        {
            "rolloverFlg": "Y",
            "currency": "JPY",
            "benchmarkAlias": "BBA LIBOR - JPY 1W",
            "deleteFlg": "A",
            "benchmarkId": 56,
            "rank": 2,
            "benchmark": "BBA LIBOR - JPY 1W"
        },
        {
            "rolloverFlg": "Y",
            "currency": "JPY",
            "benchmarkAlias": "Cost of Funds DR-JPY",
            "deleteFlg": "A",
            "benchmarkId": 23,
            "rank": 20,
            "benchmark": "Cost of Funds DR-JPY"
        },
        {
            "rolloverFlg": "Y",
            "currency": "JPY",
            "benchmarkAlias": "Cost of Funds CR-JPY",
            "deleteFlg": "A",
            "benchmarkId": 9,
            "rank": 21,
            "benchmark": "Cost of Funds CR-JPY"
        },
        {
            "rolloverFlg": "N",
            "currency": "MXN",
            "benchmarkAlias": "MEXICO - MXN EFFECTIVE O/N",
            "deleteFlg": "A",
            "benchmarkId": 57,
            "rank": 1,
            "benchmark": "MEXICO - MXN EFFECTIVE O/N"
        },
        {
            "rolloverFlg": "N",
            "currency": "MXN",
            "benchmarkAlias": "MEXICO TIIE - MXN 28 DAY",
            "deleteFlg": "A",
            "benchmarkId": 40,
            "rank": 2,
            "benchmark": "MEXICO TIIE - MXN 28 DAY"
        },
        {
            "rolloverFlg": "N",
            "currency": "MXN",
            "benchmarkAlias": "peter new grid",
            "deleteFlg": "I",
            "benchmarkId": 369,
            "rank": 3,
            "benchmark": "MEXICO - MXN O/N TARGET"
        },
        {
            "rolloverFlg": "Y",
            "currency": "MXN",
            "benchmarkAlias": "Cost of Funds DR-MXN",
            "deleteFlg": "A",
            "benchmarkId": 24,
            "rank": 20,
            "benchmark": "Cost of Funds DR-MXN"
        },
        {
            "rolloverFlg": "Y",
            "currency": "MXN",
            "benchmarkAlias": "Cost of Funds CR-MXN",
            "deleteFlg": "A",
            "benchmarkId": 10,
            "rank": 21,
            "benchmark": "Cost of Funds CR-MXN"
        },
        {
            "rolloverFlg": "Y",
            "currency": "MYR",
            "benchmarkAlias": "MYR REPO RATE - 10M",
            "deleteFlg": "A",
            "benchmarkId": 360,
            "rank": 3,
            "benchmark": "MYR REPO RATE - 10M"
        },
        {
            "rolloverFlg": "N",
            "currency": "MYR",
            "benchmarkAlias": "lmc",
            "deleteFlg": "A",
            "benchmarkId": 362,
            "rank": 12,
            "benchmark": "MYR REPO RATE - 11M"
        },
        {
            "rolloverFlg": "N",
            "currency": "NOK",
            "benchmarkAlias": "NIBOR FIXING - NOK TOMORROW",
            "deleteFlg": "A",
            "benchmarkId": 41,
            "rank": 1,
            "benchmark": "NIBOR FIXING - NOK TOMORROW"
        },
        {
            "rolloverFlg": "N",
            "currency": "NOK",
            "benchmarkAlias": "NIBOR FIXING - NOK 1 WEEK",
            "deleteFlg": "I",
            "benchmarkId": 58,
            "rank": 2,
            "benchmark": "NIBOR FIXING - NOK 1 WEEK"
        },
        {
            "rolloverFlg": "N",
            "currency": "NOK",
            "benchmarkAlias": "NIBOR FIXING - NOK 1 MONTH",
            "deleteFlg": "A",
            "benchmarkId": 358,
            "rank": 9,
            "benchmark": "NIBOR FIXING - NOK 1 MONTH"
        },
        {
            "rolloverFlg": "Y",
            "currency": "NOK",
            "benchmarkAlias": "Cost of Funds DR-NOK",
            "deleteFlg": "A",
            "benchmarkId": 25,
            "rank": 20,
            "benchmark": "Cost of Funds DR-NOK"
        },
        {
            "rolloverFlg": "Y",
            "currency": "NOK",
            "benchmarkAlias": "Cost of Funds CR-NOK",
            "deleteFlg": "A",
            "benchmarkId": 11,
            "rank": 21,
            "benchmark": "Cost of Funds CR-NOK"
        },
        {
            "rolloverFlg": "N",
            "currency": "NZD",
            "benchmarkAlias": "GEO's Rate",
            "deleteFlg": "I",
            "benchmarkId": 90,
            "rank": 1,
            "benchmark": "NZD O/N OFFICIAL CASH RATE"
        },
        {
            "rolloverFlg": "Y",
            "currency": "NZD",
            "benchmarkAlias": "BBA LIBOR - NZD SPOT/NEXT",
            "deleteFlg": "A",
            "benchmarkId": 78,
            "rank": 2,
            "benchmark": "BBA LIBOR - NZD SPOT/NEXT"
        },
        {
            "rolloverFlg": "Y",
            "currency": "NZD",
            "benchmarkAlias": "BBA LIBOR - NZD 1W",
            "deleteFlg": "A",
            "benchmarkId": 79,
            "rank": 3,
            "benchmark": "BBA LIBOR - NZD 1W"
        },
        {
            "rolloverFlg": "Y",
            "currency": "NZD",
            "benchmarkAlias": "Cost of Funds DR-NZD",
            "deleteFlg": "A",
            "benchmarkId": 26,
            "rank": 20,
            "benchmark": "Cost of Funds DR-NZD"
        },
        {
            "rolloverFlg": "Y",
            "currency": "NZD",
            "benchmarkAlias": "Cost of Funds CR-NZD",
            "deleteFlg": "A",
            "benchmarkId": 12,
            "rank": 21,
            "benchmark": "Cost of Funds CR-NZD"
        },
        {
            "rolloverFlg": "Y",
            "currency": "PLN",
            "benchmarkAlias": "WIBOR - PLN 6 MONTH",
            "deleteFlg": "I",
            "benchmarkId": 425,
            "rank": 2,
            "benchmark": "WIBOR - PLN 6 MONTH"
        },
        {
            "rolloverFlg": "N",
            "currency": "PLN",
            "benchmarkAlias": "WIBOR - PLN OVERNIGHT",
            "deleteFlg": "I",
            "benchmarkId": 427,
            "rank": 8,
            "benchmark": "WIBOR - PLN OVERNIGHT"
        },
        {
            "rolloverFlg": "N",
            "currency": "PLN",
            "benchmarkAlias": "Peter grid test",
            "deleteFlg": "I",
            "benchmarkId": 353,
            "rank": 33,
            "benchmark": "WIBOR - PLN 2 WEEK"
        },
        {
            "rolloverFlg": "N",
            "currency": "SEK",
            "benchmarkAlias": "STIBOR FIXING - SEK TN1",
            "deleteFlg": "A",
            "benchmarkId": 87,
            "rank": 1,
            "benchmark": "STIBOR FIXING - SEK TN"
        },
        {
            "rolloverFlg": "N",
            "currency": "SEK",
            "benchmarkAlias": "STIBOR FIXING - SEK 1W",
            "deleteFlg": "A",
            "benchmarkId": 88,
            "rank": 2,
            "benchmark": "STIBOR FIXING - SEK 1W"
        },
        {
            "rolloverFlg": "Y",
            "currency": "SEK",
            "benchmarkAlias": "BBA LIBOR - SEK SPOT/NEXT",
            "deleteFlg": "A",
            "benchmarkId": 42,
            "rank": 3,
            "benchmark": "BBA LIBOR - SEK SPOT/NEXT"
        },
        {
            "rolloverFlg": "Y",
            "currency": "SEK",
            "benchmarkAlias": "BBA LIBOR - SEK 1W",
            "deleteFlg": "A",
            "benchmarkId": 59,
            "rank": 4,
            "benchmark": "BBA LIBOR - SEK 1W"
        },
        {
            "rolloverFlg": "Y",
            "currency": "SEK",
            "benchmarkAlias": "Cost of Funds DR-SEK",
            "deleteFlg": "A",
            "benchmarkId": 27,
            "rank": 20,
            "benchmark": "Cost of Funds DR-SEK"
        },
        {
            "rolloverFlg": "Y",
            "currency": "SEK",
            "benchmarkAlias": "Cost of Funds CR-SEK",
            "deleteFlg": "A",
            "benchmarkId": 13,
            "rank": 21,
            "benchmark": "Cost of Funds CR-SEK"
        },
        {
            "rolloverFlg": "N",
            "currency": "SGD",
            "benchmarkAlias": "DOMESTIC DEP - SGD O/NIGHT",
            "deleteFlg": "I",
            "benchmarkId": 64,
            "rank": 1,
            "benchmark": "DOMESTIC DEP - SGD O/NIGHT"
        },
        {
            "rolloverFlg": "N",
            "currency": "SGD",
            "benchmarkAlias": "DOMESTIC DEP - SGD 1 WEEK",
            "deleteFlg": "A",
            "benchmarkId": 63,
            "rank": 2,
            "benchmark": "DOMESTIC DEP - SGD 1 WEEK"
        },
        {
            "rolloverFlg": "N",
            "currency": "SGD",
            "benchmarkAlias": "DOMESTIC DEP - SGD 1 MONTH",
            "deleteFlg": "A",
            "benchmarkId": 65,
            "rank": 3,
            "benchmark": "DOMESTIC DEP - SGD 1 MONTH"
        },
        {
            "rolloverFlg": "Y",
            "currency": "SGD",
            "benchmarkAlias": "dgdg1 12",
            "deleteFlg": "A",
            "benchmarkId": 62,
            "rank": 20,
            "benchmark": "Cost of Funds DR-SGD"
        },
        {
            "rolloverFlg": "Y",
            "currency": "SGD",
            "benchmarkAlias": "dgdg",
            "deleteFlg": "I",
            "benchmarkId": 61,
            "rank": 21,
            "benchmark": "Cost of Funds CR-SGD"
        },
        {
            "rolloverFlg": "Y",
            "currency": "TWD",
            "benchmarkAlias": "CUR SWAP SEM 6M-TWD-USD 12Y",
            "deleteFlg": "A",
            "benchmarkId": 363,
            "rank": 78,
            "benchmark": "CUR SWAP SEM 6M-TWD-USD 12Y"
        },
        {
            "rolloverFlg": "N",
            "currency": "UAH",
            "benchmarkAlias": "new benchmark",
            "deleteFlg": "A",
            "benchmarkId": 458,
            "rank": 299,
            "benchmark": "Peter new benchmark"
        },
        {
            "rolloverFlg": "Y",
            "currency": "ZAR",
            "benchmarkAlias": "LIBOR O/N-ZAR",
            "deleteFlg": "A",
            "benchmarkId": 69,
            "rank": 1,
            "benchmark": "LIBOR O/N-ZAR"
        },
        {
            "rolloverFlg": "Y",
            "currency": "ZAR",
            "benchmarkAlias": "ZAR: O/N Deposit",
            "deleteFlg": "A",
            "benchmarkId": 81,
            "rank": 2,
            "benchmark": "ZAR: O/N Deposit"
        },
        {
            "rolloverFlg": "N",
            "currency": "ZAR",
            "benchmarkAlias": "EURO DEP - ZAR 1 WEEK",
            "deleteFlg": "A",
            "benchmarkId": 68,
            "rank": 3,
            "benchmark": "EURO DEP - ZAR 1 WEEK"
        },
        {
            "rolloverFlg": "Y",
            "currency": "ZAR",
            "benchmarkAlias": "ZAR: 1W Deposit",
            "deleteFlg": "A",
            "benchmarkId": 82,
            "rank": 4,
            "benchmark": "ZAR: 1W Deposit"
        },
        {
            "rolloverFlg": "Y",
            "currency": "ZAR",
            "benchmarkAlias": "Cost of Funds DR-ZAR",
            "deleteFlg": "A",
            "benchmarkId": 67,
            "rank": 20,
            "benchmark": "Cost of Funds DR-ZAR"
        },
        {
            "rolloverFlg": "Y",
            "currency": "ZAR",
            "benchmarkAlias": "Cost of Funds CR-ZAR",
            "deleteFlg": "A",
            "benchmarkId": 66,
            "rank": 21,
            "benchmark": "Cost of Funds CR-ZAR"
        }
    ]
}
<% out.print(")"); %>
