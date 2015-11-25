var app = require("grnai-vis-phenotypes");

var real = [
  {
    "node": {
      "id": 43,
      "name": "Muscles rounded up",
      "type": "phenotype"
    }
  },
  {
    "node": {
      "id": 46,
      "name": "Muscles spread, actin and myosin filaments lack striation",
      "type": "phenotype"
    }
  },
  {
    "node": {
      "id": 44,
      "name": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "type": "phenotype"
    }
  },
  {
    "node": {
      "id": 47,
      "name": "Muscles with short and/or thin myofibrils",
      "type": "phenotype"
    }
  },
  {
    "node": {
      "id": 32275,
      "name": "FBgn0004456",
      "symbols": [
        "mew"
      ],
      "reagents": [
        {
          "reagentName": "DRSC18971",
          "isLinked": true
        },
        {
          "reagentName": "DRSC20352",
          "isLinked": true
        },
        {
          "reagentName": "DRSC35847",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "np",
      "phenotype": "Muscles rounded up",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 38488,
      "name": "FBgn0035498",
      "symbols": [
        "Fit1"
      ],
      "reagents": [
        {
          "reagentName": "DRSC08450",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34432",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "medium",
      "phenotype": "Muscles rounded up",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 39864,
      "name": "FBgn0063485",
      "symbols": [
        "Lasp"
      ],
      "reagents": [
        {
          "reagentName": "DRSC10379",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34926",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34927",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "np",
      "phenotype": "Muscles rounded up",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 39907,
      "name": "FBgn0036688",
      "symbols": [
        "Fit2"
      ],
      "reagents": [
        {
          "reagentName": "DRSC10908",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32125",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "medium",
      "phenotype": "Muscles rounded up",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 43787,
      "name": "FBgn0025704",
      "symbols": [
        "CG2165"
      ],
      "reagents": [
        {
          "reagentName": "DRSC17113",
          "isLinked": true
        },
        {
          "reagentName": "DRSC17114",
          "isLinked": true
        },
        {
          "reagentName": "DRSC17154",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34373",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles rounded up",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 44291,
      "name": "FBgn0001248",
      "symbols": [
        "Idh"
      ],
      "reagents": [
        {
          "reagentName": "DRSC10779",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34441",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "medium",
      "phenotype": "Muscles rounded up",
      "comment": ""
    }
  },
  {
    "edge": {
      "source": 32275,
      "target": 43
    }
  },
  {
    "edge": {
      "source": 38488,
      "target": 43
    }
  },
  {
    "edge": {
      "source": 39864,
      "target": 43
    }
  },
  {
    "edge": {
      "source": 39907,
      "target": 43
    }
  },
  {
    "edge": {
      "source": 43787,
      "target": 43
    }
  },
  {
    "edge": {
      "source": 44291,
      "target": 43
    }
  },
  {
    "node": {
      "id": 32314,
      "name": "FBgn0004169",
      "symbols": [
        "up"
      ],
      "reagents": [
        {
          "reagentName": "DRSC20382",
          "isLinked": true
        },
        {
          "reagentName": "DRSC28798",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "np",
      "phenotype": "Muscles spread, actin and myosin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 32794,
      "name": "FBgn0004028",
      "symbols": [
        "wupA"
      ],
      "reagents": [
        {
          "reagentName": "DRSC20385",
          "isLinked": true
        },
        {
          "reagentName": "DRSC22547",
          "isLinked": true
        },
        {
          "reagentName": "DRSC29330",
          "isLinked": true
        },
        {
          "reagentName": "DRSC31986",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "np",
      "phenotype": "Muscles spread, actin and myosin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 35007,
      "name": "FBgn0002741",
      "symbols": [
        "Mhc"
      ],
      "reagents": [
        {
          "reagentName": "DRSC03367",
          "isLinked": true
        },
        {
          "reagentName": "DRSC25959",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34448",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34449",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "np",
      "phenotype": "Muscles spread, actin and myosin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 39002,
      "name": "FBgn0003149",
      "symbols": [
        "Prm"
      ],
      "reagents": [
        {
          "reagentName": "DRSC11255",
          "isLinked": true
        },
        {
          "reagentName": "DRSC36327",
          "isLinked": true
        },
        {
          "reagentName": "DRSC36328",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, actin and myosin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 39165,
      "name": "FBgn0025866",
      "symbols": [
        "CalpB"
      ],
      "reagents": [
        {
          "reagentName": "DRSC11109",
          "isLinked": true
        },
        {
          "reagentName": "DRSC25885",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "np",
      "phenotype": "Muscles spread, actin and myosin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 40232,
      "name": "FBgn0003124",
      "symbols": [
        "polo"
      ],
      "reagents": [
        {
          "reagentName": "DRSC11384",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34463",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34464",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "medium",
      "phenotype": "Muscles spread, actin and myosin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 43587,
      "name": "FBgn0002773",
      "symbols": [
        "Mlc2"
      ],
      "reagents": [
        {
          "reagentName": "DRSC16741",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32500",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32501",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, actin and myosin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 43633,
      "name": "FBgn0082582",
      "symbols": [
        "Tmod"
      ],
      "reagents": [
        {
          "reagentName": "DRSC17062",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34480",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34481",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, actin and myosin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 43814,
      "name": "FBgn0005666",
      "symbols": [
        "bt"
      ],
      "reagents": [
        {
          "reagentName": "DRSC17129",
          "isLinked": true
        },
        {
          "reagentName": "DRSC17171",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34355",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34356",
          "isLinked": true
        },
        {
          "reagentName": "DRSC36656",
          "isLinked": true
        },
        {
          "reagentName": "DRSC36657",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, actin and myosin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 49090,
      "name": "FBgn0011286",
      "symbols": [
        "Rya-r44F"
      ],
      "reagents": [
        {
          "reagentName": "DRSC07543",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "np",
      "phenotype": "Muscles spread, actin and myosin filaments lack striation",
      "comment": ""
    }
  },
  {
    "edge": {
      "source": 32314,
      "target": 46
    }
  },
  {
    "edge": {
      "source": 32794,
      "target": 46
    }
  },
  {
    "edge": {
      "source": 35007,
      "target": 46
    }
  },
  {
    "edge": {
      "source": 39002,
      "target": 46
    }
  },
  {
    "edge": {
      "source": 39165,
      "target": 46
    }
  },
  {
    "edge": {
      "source": 40232,
      "target": 46
    }
  },
  {
    "edge": {
      "source": 43587,
      "target": 46
    }
  },
  {
    "edge": {
      "source": 43633,
      "target": 46
    }
  },
  {
    "edge": {
      "source": 43814,
      "target": 46
    }
  },
  {
    "edge": {
      "source": 49090,
      "target": 46
    }
  },
  {
    "node": {
      "id": 31166,
      "name": "FBgn0000667",
      "symbols": [
        "Actn"
      ],
      "reagents": [
        {
          "reagentName": "DRSC17724",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34351",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34352",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 31196,
      "name": "FBgn0024984",
      "symbols": [
        "CG3457"
      ],
      "reagents": [
        {
          "reagentName": "DRSC18509",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34386",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 31350,
      "name": "FBgn0029688",
      "symbols": [
        "lva"
      ],
      "reagents": [
        {
          "reagentName": "DRSC18403",
          "isLinked": true
        },
        {
          "reagentName": "DRSC31278",
          "isLinked": true
        },
        {
          "reagentName": "DRSC31279",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 31554,
      "name": "FBgn0003514",
      "symbols": [
        "sqh"
      ],
      "reagents": [
        {
          "reagentName": "DRSC18837",
          "isLinked": true
        },
        {
          "reagentName": "DRSC23800",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34474",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34475",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "np",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 33845,
      "name": "FBgn0025742",
      "symbols": [
        "mtm"
      ],
      "reagents": [
        {
          "reagentName": "DRSC03576",
          "isLinked": true
        },
        {
          "reagentName": "DRSC36585",
          "isLinked": true
        },
        {
          "reagentName": "DRSC36764",
          "isLinked": true
        },
        {
          "reagentName": "DRSC36765",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "np",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 36405,
      "name": "FBgn0026619",
      "symbols": [
        "tafazzin"
      ],
      "reagents": [
        {
          "reagentName": "DRSC07704",
          "isLinked": true
        },
        {
          "reagentName": "DRSC27100",
          "isLinked": true
        },
        {
          "reagentName": "DRSC36045",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "np",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 37190,
      "name": "FBgn0034412",
      "symbols": [
        "CG15105"
      ],
      "reagents": [
        {
          "reagentName": "DRSC05768",
          "isLinked": true
        },
        {
          "reagentName": "DRSC06532",
          "isLinked": true
        },
        {
          "reagentName": "DRSC27711",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "np",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 39179,
      "name": "FBgn0036068",
      "symbols": [
        "CG6640"
      ],
      "reagents": [
        {
          "reagentName": "DRSC10681",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34404",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 39628,
      "name": "FBgn0023174",
      "symbols": [
        "Prosbeta2"
      ],
      "reagents": [
        {
          "reagentName": "DRSC11257",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32178",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 39765,
      "name": "FBgn0010280",
      "symbols": [
        "Taf4"
      ],
      "reagents": [
        {
          "reagentName": "DRSC11297",
          "isLinked": true
        },
        {
          "reagentName": "DRSC31762",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 39775,
      "name": "FBgn0036579",
      "symbols": [
        "CG5027"
      ],
      "reagents": [
        {
          "reagentName": "DRSC10471",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34391",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 39855,
      "name": "FBgn0002284",
      "symbols": [
        "Pros26"
      ],
      "reagents": [
        {
          "reagentName": "DRSC11256",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32168",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 40143,
      "name": "FBgn0036896",
      "symbols": [
        "CG8789"
      ],
      "reagents": [
        {
          "reagentName": "DRSC11046",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34410",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 40174,
      "name": "FBgn0028695",
      "symbols": [
        "Rpn1"
      ],
      "reagents": [
        {
          "reagentName": "DRSC11274",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32192",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32193",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 40272,
      "name": "FBgn0037001",
      "symbols": [
        "CG6020"
      ],
      "reagents": [
        {
          "reagentName": "DRSC11791",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34398",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34399",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "medium",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 40368,
      "name": "FBgn0027542",
      "symbols": [
        "CG6014"
      ],
      "reagents": [
        {
          "reagentName": "DRSC11609",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34396",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34397",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "medium",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 40530,
      "name": "FBgn0015331",
      "symbols": [
        "abs"
      ],
      "reagents": [
        {
          "reagentName": "DRSC12372",
          "isLinked": true
        },
        {
          "reagentName": "DRSC31883",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 40542,
      "name": "FBgn0037231",
      "symbols": [
        "CG9779"
      ],
      "reagents": [
        {
          "reagentName": "DRSC12332",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34417",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 40546,
      "name": "FBgn0027866",
      "symbols": [
        "CG9776"
      ],
      "reagents": [
        {
          "reagentName": "DRSC12127",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34415",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 40559,
      "name": "FBgn0037245",
      "symbols": [
        "CG14648"
      ],
      "reagents": [
        {
          "reagentName": "DRSC12002",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34034",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 40593,
      "name": "FBgn0010750",
      "symbols": [
        "atms"
      ],
      "reagents": [
        {
          "reagentName": "DRSC12310",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34353",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34354",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "medium",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 43149,
      "name": "FBgn0015269",
      "symbols": [
        "Nf1"
      ],
      "reagents": [
        {
          "reagentName": "DRSC16758",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34456",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34457",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "medium",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 43449,
      "name": "FBgn0028692",
      "symbols": [
        "Rpn2"
      ],
      "reagents": [
        {
          "reagentName": "DRSC16839",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32198",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32199",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 43563,
      "name": "FBgn0039738",
      "symbols": [
        "Mgat2"
      ],
      "reagents": [
        {
          "reagentName": "DRSC16347",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34446",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34447",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "medium",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 43625,
      "name": "FBgn0039780",
      "symbols": [
        "PH4alphaNE1"
      ],
      "reagents": [
        {
          "reagentName": "DRSC16546",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34461",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34462",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 43689,
      "name": "FBgn0039827",
      "symbols": [
        "CG1544"
      ],
      "reagents": [
        {
          "reagentName": "DRSC15036",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34369",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34370",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "medium",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 43718,
      "name": "FBgn0043900",
      "symbols": [
        "pygo"
      ],
      "reagents": [
        {
          "reagentName": "DRSC14322",
          "isLinked": true
        },
        {
          "reagentName": "DRSC33088",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 43737,
      "name": "FBgn0039869",
      "symbols": [
        "CG1890"
      ],
      "reagents": [
        {
          "reagentName": "DRSC15395",
          "isLinked": true
        },
        {
          "reagentName": "DRSC29064",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 43758,
      "name": "FBgn0039883",
      "symbols": [
        "RhoGAP100F"
      ],
      "reagents": [
        {
          "reagentName": "DRSC15409",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34466",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34467",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 44013,
      "name": "FBgn0003432",
      "symbols": [
        "sls"
      ],
      "reagents": [
        {
          "reagentName": "DRSC08528",
          "isLinked": true
        },
        {
          "reagentName": "DRSC08540",
          "isLinked": true
        },
        {
          "reagentName": "DRSC08670",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32611",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32612",
          "isLinked": true
        },
        {
          "reagentName": "DRSC36617",
          "isLinked": true
        },
        {
          "reagentName": "DRSC36618",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "np",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 45250,
      "name": "FBgn0028969",
      "symbols": [
        "deltaCOP"
      ],
      "reagents": [
        {
          "reagentName": "DRSC18760",
          "isLinked": true
        },
        {
          "reagentName": "DRSC31062",
          "isLinked": true
        },
        {
          "reagentName": "DRSC31063",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 45525,
      "name": "FBgn0015218",
      "symbols": [
        "eIF-4E"
      ],
      "reagents": [
        {
          "reagentName": "DRSC11342",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32113",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 326148,
      "name": "FBgn0051523",
      "symbols": [
        "CG31523"
      ],
      "reagents": [
        {
          "reagentName": "DRSC12009",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34377",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34378",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles spread, myosin filaments striated, actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "edge": {
      "source": 31166,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 31196,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 31350,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 31554,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 33845,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 36405,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 37190,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 39179,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 39628,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 39765,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 39775,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 39855,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 40143,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 40174,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 40272,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 40368,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 40530,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 40542,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 40546,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 40559,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 40593,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 43149,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 43449,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 43563,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 43625,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 43689,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 43718,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 43737,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 43758,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 44013,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 45250,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 45525,
      "target": 44
    }
  },
  {
    "edge": {
      "source": 326148,
      "target": 44
    }
  },
  {
    "node": {
      "id": 31201,
      "name": "FBgn0004397",
      "symbols": [
        "Vinc"
      ],
      "reagents": [
        {
          "reagentName": "DRSC18728",
          "isLinked": true
        },
        {
          "reagentName": "DRSC31286",
          "isLinked": true
        },
        {
          "reagentName": "DRSC31287",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles with short and/or thin myofibrils",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 31208,
      "name": "FBgn0000377",
      "symbols": [
        "crn"
      ],
      "reagents": [
        {
          "reagentName": "DRSC18184",
          "isLinked": true
        },
        {
          "reagentName": "DRSC31852",
          "isLinked": true
        },
        {
          "reagentName": "DRSC31853",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles with short and/or thin myofibrils",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 31243,
      "name": "FBgn0029629",
      "symbols": [
        "CG8636"
      ],
      "reagents": [
        {
          "reagentName": "DRSC18427",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32088",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles with short and/or thin myofibrils",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 31521,
      "name": "FBgn0000042",
      "symbols": [
        "Act5C"
      ],
      "reagents": [
        {
          "reagentName": "DRSC17723",
          "isLinked": true
        },
        {
          "reagentName": "DRSC31415",
          "isLinked": true
        },
        {
          "reagentName": "DRSC31416",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "np",
      "phenotype": "Muscles with short and/or thin myofibrils",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 35526,
      "name": "FBgn0000043",
      "symbols": [
        "Act42A"
      ],
      "reagents": [
        {
          "reagentName": "DRSC04835",
          "isLinked": true
        },
        {
          "reagentName": "DRSC25061",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "np",
      "phenotype": "Muscles with short and/or thin myofibrils",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 37368,
      "name": "FBgn0000044",
      "symbols": [
        "Act57B"
      ],
      "reagents": [
        {
          "reagentName": "DRSC04042",
          "isLinked": true
        },
        {
          "reagentName": "DRSC31414",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "np",
      "phenotype": "Muscles with short and/or thin myofibrils",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 38721,
      "name": "FBgn0024921",
      "symbols": [
        "Trn"
      ],
      "reagents": [
        {
          "reagentName": "DRSC11309",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32777",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32778",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles with short and/or thin myofibrils",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 39108,
      "name": "FBgn0010408",
      "symbols": [
        "RpS9"
      ],
      "reagents": [
        {
          "reagentName": "DRSC11273",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32598",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32599",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles with short and/or thin myofibrils",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 39164,
      "name": "FBgn0011836",
      "symbols": [
        "Taf2"
      ],
      "reagents": [
        {
          "reagentName": "DRSC11298",
          "isLinked": true
        },
        {
          "reagentName": "DRSC33206",
          "isLinked": true
        },
        {
          "reagentName": "DRSC33207",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles with short and/or thin myofibrils",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 39480,
      "name": "FBgn0014027",
      "symbols": [
        "RpS12"
      ],
      "reagents": [
        {
          "reagentName": "DRSC11270",
          "isLinked": true
        },
        {
          "reagentName": "DRSC34294",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles with short and/or thin myofibrils",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 39737,
      "name": "FBgn0036548",
      "symbols": [
        "CG5931"
      ],
      "reagents": [
        {
          "reagentName": "DRSC10559",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32419",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32420",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles with short and/or thin myofibrils",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 40152,
      "name": "FBgn0036904",
      "symbols": [
        "CG8743"
      ],
      "reagents": [
        {
          "reagentName": "DRSC11032",
          "isLinked": true
        },
        {
          "reagentName": "DRSC31589",
          "isLinked": true
        },
        {
          "reagentName": "DRSC31590",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles with short and/or thin myofibrils",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 40180,
      "name": "FBgn0004852",
      "symbols": [
        "Ac76E"
      ],
      "reagents": [
        {
          "reagentName": "DRSC09642",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32652",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32653",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles with short and/or thin myofibrils",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 41377,
      "name": "FBgn0051374",
      "symbols": [
        "CG31374"
      ],
      "reagents": [
        {
          "reagentName": "DRSC14925",
          "isLinked": true
        },
        {
          "reagentName": "DRSC16113",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32900",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32901",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles with short and/or thin myofibrils",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 43349,
      "name": "FBgn0003279",
      "symbols": [
        "RpL4"
      ],
      "reagents": [
        {
          "reagentName": "DRSC16833",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32560",
          "isLinked": true
        },
        {
          "reagentName": "DRSC32561",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "severe",
      "phenotype": "Muscles with short and/or thin myofibrils",
      "comment": ""
    }
  },
  {
    "node": {
      "id": 48632,
      "name": "FBgn0000046",
      "symbols": [
        "Act87E"
      ],
      "reagents": [
        {
          "reagentName": "DRSC22578",
          "isLinked": true
        },
        {
          "reagentName": "DRSC23961",
          "isLinked": true
        }
      ],
      "scoreType": "Percentage of muscles with a given phenotype",
      "cutoff": "Severe: > 80 %; medium: ~ 50 %",
      "score": "np",
      "phenotype": "Muscles with short and/or thin myofibrils",
      "comment": ""
    }
  },
  {
    "edge": {
      "source": 31201,
      "target": 47
    }
  },
  {
    "edge": {
      "source": 31208,
      "target": 47
    }
  },
  {
    "edge": {
      "source": 31243,
      "target": 47
    }
  },
  {
    "edge": {
      "source": 31521,
      "target": 47
    }
  },
  {
    "edge": {
      "source": 35526,
      "target": 47
    }
  },
  {
    "edge": {
      "source": 37368,
      "target": 47
    }
  },
  {
    "edge": {
      "source": 38721,
      "target": 47
    }
  },
  {
    "edge": {
      "source": 39108,
      "target": 47
    }
  },
  {
    "edge": {
      "source": 39164,
      "target": 47
    }
  },
  {
    "edge": {
      "source": 39480,
      "target": 47
    }
  },
  {
    "edge": {
      "source": 39737,
      "target": 47
    }
  },
  {
    "edge": {
      "source": 40152,
      "target": 47
    }
  },
  {
    "edge": {
      "source": 40180,
      "target": 47
    }
  },
  {
    "edge": {
      "source": 41377,
      "target": 47
    }
  },
  {
    "edge": {
      "source": 43349,
      "target": 47
    }
  },
  {
    "edge": {
      "source": 48632,
      "target": 47
    }
  }
];

var elements = {
  nodes: [
    { data: { id: 'mrup', name: "Muscles rounded up" }, classes: "phenotype" },
    { data: { id: 'mspread', name: "Muscles spread" }, classes: "phenotype" },
    { data: { id: 'amlstr', name: "Actin and myosin filaments lack striation" }, classes: "phenotype" },
    { data: { id: 'alstr', name: "Actin filaments lack striation" }, classes: "phenotype" },
    { data: { id: 'mstr', name: "Myosin filaments striated" }, classes: "phenotype" },
    { data: { id: 'msmyo', name: "Muscles with short and/or thin myofibrils" }, classes: "phenotype" },
    { data: { id: 'mew', mappedId: "32275", geneId: "FBgn0004456", reagentId: ["DRSC18971", "DRSC20352", "DRSC35847"], scoreType: "Percentage of muscles with a given phenotype", cutoff: "Severe: > 80 %; medium: ~ 50 %" }, classes: "gene" },
    { data: { id: 'Fit1' }, classes: "gene" },
    { data: { id: 'Lasp' }, classes: "gene" },
    { data: { id: 'Fit2' }, classes: "gene" },
    { data: { id: 'CG152' }, classes: "gene" },
    { data: { id: 'ldh' }, classes: "gene" },
    { data: { id: 'up' }, classes: "gene" },
    { data: { id: 'wupA' }, classes: "gene" },
    { data: { id: 'mhc' }, classes: "gene" },
    { data: { id: 'Prm' }, classes: "gene" },
    { data: { id: 'CalpB' }, classes: "gene" },
    { data: { id: 'polo' }, classes: "gene" },
    { data: { id: 'Mlc2' }, classes: "gene" },
    { data: { id: 'Tmod' }, classes: "gene" },
    { data: { id: 'bt' }, classes: "gene" },
    { data: { id: 'Rya-r44F' }, classes: "gene" },

    { data: { id: 'Actn' }, classes: "gene" },
    { data: { id: 'CG3457' }, classes: "gene" },
    { data: { id: 'lvh' }, classes: "gene" },
    { data: { id: 'sqh' }, classes: "gene" },
    { data: { id: 'mtm' }, classes: "gene" },
    { data: { id: 'tafazzin' }, classes: "gene" },
    { data: { id: 'CG15105' }, classes: "gene" },
    { data: { id: 'CG6640' }, classes: "gene" },
    { data: { id: 'Prosbeta2' }, classes: "gene" },
    { data: { id: 'Taf4' }, classes: "gene" },
    { data: { id: 'CG5027' }, classes: "gene" },
    { data: { id: 'Pros26' }, classes: "gene" },
    { data: { id: 'CG8789' }, classes: "gene" },
    { data: { id: 'Rpn1' }, classes: "gene" },
    { data: { id: 'CG6020' }, classes: "gene" },
    { data: { id: 'CG6014' }, classes: "gene" },
    { data: { id: 'abs' }, classes: "gene" },
    { data: { id: 'CG9779' }, classes: "gene" },
    { data: { id: 'CG9776' }, classes: "gene" },
    { data: { id: 'CG14648' }, classes: "gene" },
    { data: { id: 'atms' }, classes: "gene" },
    { data: { id: 'Nf1' }, classes: "gene" },
    { data: { id: 'Rpn2' }, classes: "gene" },
    { data: { id: 'Mgat2' }, classes: "gene" },
    { data: { id: 'PH4alphaNE1' }, classes: "gene" },
    { data: { id: 'CG1544' }, classes: "gene" },
    { data: { id: 'pygo' }, classes: "gene" },
    { data: { id: 'CG1890' }, classes: "gene" },
    { data: { id: 'RhoGAP100F' }, classes: "gene" },
    { data: { id: 'sls' }, classes: "gene" },
    { data: { id: 'deltaCOP' }, classes: "gene" },
    { data: { id: 'elF-4E' }, classes: "gene" },
    { data: { id: 'CG31523' }, classes: "gene" },

    { data: { id: 'Vinc' }, classes: "gene" },
    { data: { id: 'crn' }, classes: "gene" },
    { data: { id: 'CG8636' }, classes: "gene" },
    { data: { id: 'Act5C' }, classes: "gene" },
    { data: { id: 'Act42A' }, classes: "gene" },
    { data: { id: 'Act57B' }, classes: "gene" },
    { data: { id: 'Trn' }, classes: "gene" },
    { data: { id: 'RpS9' }, classes: "gene" },
    { data: { id: 'Taf2' }, classes: "gene" },
    { data: { id: 'RpS12' }, classes: "gene" },
    { data: { id: 'CG5931' }, classes: "gene" },
    { data: { id: 'CG8743' }, classes: "gene" },
    { data: { id: 'Ac76E' }, classes: "gene" },
    { data: { id: 'CG31374' }, classes: "gene" },
    { data: { id: 'RpL4' }, classes: "gene" },
    { data: { id: 'Act87E' }, classes: "gene" }
  ],
  edges: [
    { data: { source: 'mrup', target: 'mew' } },
    { data: { source: 'mrup', target: 'Fit1' } },
    { data: { source: 'mrup', target: 'Lasp' } },
    { data: { source: 'mrup', target: 'Fit2' } },
    { data: { source: 'mrup', target: 'CG152' } },
    { data: { source: 'mrup', target: 'ldh' } },
    { data: { source: 'mspread', target: 'up' } },
    { data: { source: 'mspread', target: 'wupA' } },
    { data: { source: 'mspread', target: 'mhc' } },
    { data: { source: 'mspread', target: 'Prm' } },
    { data: { source: 'mspread', target: 'CalpB' } },
    { data: { source: 'mspread', target: 'polo' } },
    { data: { source: 'mspread', target: 'Mlc2' } },
    { data: { source: 'mspread', target: 'Tmod' } },
    { data: { source: 'mspread', target: 'bt' } },
    { data: { source: 'mspread', target: 'Rya-r44F' } },
    { data: { source: 'amlstr', target: 'up' } },
    { data: { source: 'amlstr', target: 'wupA' } },
    { data: { source: 'amlstr', target: 'mhc' } },
    { data: { source: 'amlstr', target: 'Prm' } },
    { data: { source: 'amlstr', target: 'CalpB' } },
    { data: { source: 'amlstr', target: 'polo' } },
    { data: { source: 'amlstr', target: 'Mlc2' } },
    { data: { source: 'amlstr', target: 'Tmod' } },
    { data: { source: 'amlstr', target: 'bt' } },
    { data: { source: 'amlstr', target: 'Rya-r44F' } },

    { data: { source: 'mspread', target: 'Actn' } },
    { data: { source: 'mspread', target: 'CG3457' } },
    { data: { source: 'mspread', target: 'lvh' } },
    { data: { source: 'mspread', target: 'sqh' } },
    { data: { source: 'mspread', target: 'mtm' } },
    { data: { source: 'mspread', target: 'tafazzin' } },
    { data: { source: 'mspread', target: 'CG15105' } },
    { data: { source: 'mspread', target: 'CG6640' } },
    { data: { source: 'mspread', target: 'Prosbeta2' } },
    { data: { source: 'mspread', target: 'Taf4' } },
    { data: { source: 'mspread', target: 'CG5027' } },
    { data: { source: 'mspread', target: 'Pros26' } },
    { data: { source: 'mspread', target: 'CG8789' } },
    { data: { source: 'mspread', target: 'Rpn1' } },
    { data: { source: 'mspread', target: 'CG6020' } },
    { data: { source: 'mspread', target: 'CG6014' } },
    { data: { source: 'mspread', target: 'abs' } },
    { data: { source: 'mspread', target: 'CG9779' } },
    { data: { source: 'mspread', target: 'CG9776' } },
    { data: { source: 'mspread', target: 'CG14648' } },
    { data: { source: 'mspread', target: 'atms' } },
    { data: { source: 'mspread', target: 'Nf1' } },
    { data: { source: 'mspread', target: 'Rpn2' } },
    { data: { source: 'mspread', target: 'Mgat2' } },
    { data: { source: 'mspread', target: 'PH4alphaNE1' } },
    { data: { source: 'mspread', target: 'CG1544' } },
    { data: { source: 'mspread', target: 'pygo' } },
    { data: { source: 'mspread', target: 'CG1890' } },
    { data: { source: 'mspread', target: 'RhoGAP100F' } },
    { data: { source: 'mspread', target: 'sls' } },
    { data: { source: 'mspread', target: 'deltaCOP' } },
    { data: { source: 'mspread', target: 'elF-4E' } },
    { data: { source: 'mspread', target: 'CG31523' } },

    { data: { source: 'mstr', target: 'Actn' } },
    { data: { source: 'mstr', target: 'CG3457' } },
    { data: { source: 'mstr', target: 'lvh' } },
    { data: { source: 'mstr', target: 'sqh' } },
    { data: { source: 'mstr', target: 'mtm' } },
    { data: { source: 'mstr', target: 'tafazzin' } },
    { data: { source: 'mstr', target: 'CG15105' } },
    { data: { source: 'mstr', target: 'CG6640' } },
    { data: { source: 'mstr', target: 'Prosbeta2' } },
    { data: { source: 'mstr', target: 'Taf4' } },
    { data: { source: 'mstr', target: 'CG5027' } },
    { data: { source: 'mstr', target: 'Pros26' } },
    { data: { source: 'mstr', target: 'CG8789' } },
    { data: { source: 'mstr', target: 'Rpn1' } },
    { data: { source: 'mstr', target: 'CG6020' } },
    { data: { source: 'mstr', target: 'CG6014' } },
    { data: { source: 'mstr', target: 'abs' } },
    { data: { source: 'mstr', target: 'CG9779' } },
    { data: { source: 'mstr', target: 'CG9776' } },
    { data: { source: 'mstr', target: 'CG14648' } },
    { data: { source: 'mstr', target: 'atms' } },
    { data: { source: 'mstr', target: 'Nf1' } },
    { data: { source: 'mstr', target: 'Rpn2' } },
    { data: { source: 'mstr', target: 'Mgat2' } },
    { data: { source: 'mstr', target: 'PH4alphaNE1' } },
    { data: { source: 'mstr', target: 'CG1544' } },
    { data: { source: 'mstr', target: 'pygo' } },
    { data: { source: 'mstr', target: 'CG1890' } },
    { data: { source: 'mstr', target: 'RhoGAP100F' } },
    { data: { source: 'mstr', target: 'sls' } },
    { data: { source: 'mstr', target: 'deltaCOP' } },
    { data: { source: 'mstr', target: 'elF-4E' } },
    { data: { source: 'mstr', target: 'CG31523' } },

    { data: { source: 'alstr', target: 'Actn' } },
    { data: { source: 'alstr', target: 'CG3457' } },
    { data: { source: 'alstr', target: 'lvh' } },
    { data: { source: 'alstr', target: 'sqh' } },
    { data: { source: 'alstr', target: 'mtm' } },
    { data: { source: 'alstr', target: 'tafazzin' } },
    { data: { source: 'alstr', target: 'CG15105' } },
    { data: { source: 'alstr', target: 'CG6640' } },
    { data: { source: 'alstr', target: 'Prosbeta2' } },
    { data: { source: 'alstr', target: 'Taf4' } },
    { data: { source: 'alstr', target: 'CG5027' } },
    { data: { source: 'alstr', target: 'Pros26' } },
    { data: { source: 'alstr', target: 'CG8789' } },
    { data: { source: 'alstr', target: 'Rpn1' } },
    { data: { source: 'alstr', target: 'CG6020' } },
    { data: { source: 'alstr', target: 'CG6014' } },
    { data: { source: 'alstr', target: 'abs' } },
    { data: { source: 'alstr', target: 'CG9779' } },
    { data: { source: 'alstr', target: 'CG9776' } },
    { data: { source: 'alstr', target: 'CG14648' } },
    { data: { source: 'alstr', target: 'atms' } },
    { data: { source: 'alstr', target: 'Nf1' } },
    { data: { source: 'alstr', target: 'Rpn2' } },
    { data: { source: 'alstr', target: 'Mgat2' } },
    { data: { source: 'alstr', target: 'PH4alphaNE1' } },
    { data: { source: 'alstr', target: 'CG1544' } },
    { data: { source: 'alstr', target: 'pygo' } },
    { data: { source: 'alstr', target: 'CG1890' } },
    { data: { source: 'alstr', target: 'RhoGAP100F' } },
    { data: { source: 'alstr', target: 'sls' } },
    { data: { source: 'alstr', target: 'deltaCOP' } },
    { data: { source: 'alstr', target: 'elF-4E' } },
    { data: { source: 'alstr', target: 'CG31523' } },

    { data: { source: 'msmyo', target: 'Vinc' } },
    { data: { source: 'msmyo', target: 'crn' } },
    { data: { source: 'msmyo', target: 'CG8636' } },
    { data: { source: 'msmyo', target: 'Act5C' } },
    { data: { source: 'msmyo', target: 'Act42A' } },
    { data: { source: 'msmyo', target: 'Act57B' } },
    { data: { source: 'msmyo', target: 'Trn' } },
    { data: { source: 'msmyo', target: 'RpS9' } },
    { data: { source: 'msmyo', target: 'Taf2' } },
    { data: { source: 'msmyo', target: 'RpS12' } },
    { data: { source: 'msmyo', target: 'CG5931' } },
    { data: { source: 'msmyo', target: 'CG8743' } },
    { data: { source: 'msmyo', target: 'Ac76E' } },
    { data: { source: 'msmyo', target: 'CG31374' } },
    { data: { source: 'msmyo', target: 'RpL4' } },
    { data: { source: 'msmyo', target: 'Act87E' } },
  ]
};
rootDiv.id = "rootDiv";
var instance = new app({el: rootDiv,  });
