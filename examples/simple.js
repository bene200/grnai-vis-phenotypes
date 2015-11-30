var App = require("grnai-vis-phenotypes");

var real = [
  {
    "node": {
      "id": "Muscles rounded up",
      "name": "Muscles rounded up",
      "type": "phenotype"
    }
  },
  {
    "node": {
      "id": "Muscles spread",
      "name": "Muscles spread",
      "type": "phenotype"
    }
  },
  {
    "node": {
      "id": "actin and myosin filaments lack striation",
      "name": "actin and myosin filaments lack striation",
      "type": "phenotype"
    }
  },
  {
    "node": {
      "id": "myosin filaments striated",
      "name": "myosin filaments striated",
      "type": "phenotype"
    }
  },
  {
    "node": {
      "id": "actin filaments lack striation",
      "name": "actin filaments lack striation",
      "type": "phenotype"
    }
  },
  {
    "node": {
      "id": "Muscles with short and/or thin myofibrils",
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
      "target": "Muscles rounded up"
    }
  },
  {
    "edge": {
      "source": 38488,
      "target": "Muscles rounded up"
    }
  },
  {
    "edge": {
      "source": 39864,
      "target": "Muscles rounded up"
    }
  },
  {
    "edge": {
      "source": 39907,
      "target": "Muscles rounded up"
    }
  },
  {
    "edge": {
      "source": 43787,
      "target": "Muscles rounded up"
    }
  },
  {
    "edge": {
      "source": 44291,
      "target": "Muscles rounded up"
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
      "comment": ""
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
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
      "phenotype": "Muscles spread",
      "comment": ""
    }
  },
  {
    "edge": {
      "source": 32314,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 32794,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 35007,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 39002,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 39165,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 40232,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 43587,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 43633,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 43814,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 49090,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 31166,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 31196,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 31350,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 31554,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 33845,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 36405,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 37190,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 39179,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 39628,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 39765,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 39775,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 39855,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 40143,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 40174,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 40272,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 40368,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 40530,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 40542,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 40546,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 40559,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 40593,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 43149,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 43449,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 43563,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 43625,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 43689,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 43718,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 43737,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 43758,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 44013,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 45250,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 45525,
      "target": "Muscles spread"
    }
  },
  {
    "edge": {
      "source": 326148,
      "target": "Muscles spread"
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
      "phenotype": "actin and myosin filaments lack striation",
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
      "phenotype": "actin and myosin filaments lack striation",
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
      "phenotype": "actin and myosin filaments lack striation",
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
      "phenotype": "actin and myosin filaments lack striation",
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
      "phenotype": "actin and myosin filaments lack striation",
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
      "phenotype": "actin and myosin filaments lack striation",
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
      "phenotype": "actin and myosin filaments lack striation",
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
      "phenotype": "actin and myosin filaments lack striation",
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
      "phenotype": "actin and myosin filaments lack striation",
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
      "phenotype": "actin and myosin filaments lack striation",
      "comment": ""
    }
  },
  {
    "edge": {
      "source": 32314,
      "target": "actin and myosin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 32794,
      "target": "actin and myosin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 35007,
      "target": "actin and myosin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 39002,
      "target": "actin and myosin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 39165,
      "target": "actin and myosin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 40232,
      "target": "actin and myosin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 43587,
      "target": "actin and myosin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 43633,
      "target": "actin and myosin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 43814,
      "target": "actin and myosin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 49090,
      "target": "actin and myosin filaments lack striation"
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
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
      "phenotype": "myosin filaments striated",
      "comment": ""
    }
  },
  {
    "edge": {
      "source": 31166,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 31196,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 31350,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 31554,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 33845,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 36405,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 37190,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 39179,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 39628,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 39765,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 39775,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 39855,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 40143,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 40174,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 40272,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 40368,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 40530,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 40542,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 40546,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 40559,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 40593,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 43149,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 43449,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 43563,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 43625,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 43689,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 43718,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 43737,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 43758,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 44013,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 45250,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 45525,
      "target": "myosin filaments striated"
    }
  },
  {
    "edge": {
      "source": 326148,
      "target": "myosin filaments striated"
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
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
      "phenotype": "actin filaments lack striation",
      "comment": ""
    }
  },
  {
    "edge": {
      "source": 31166,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 31196,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 31350,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 31554,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 33845,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 36405,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 37190,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 39179,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 39628,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 39765,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 39775,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 39855,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 40143,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 40174,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 40272,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 40368,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 40530,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 40542,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 40546,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 40559,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 40593,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 43149,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 43449,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 43563,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 43625,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 43689,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 43718,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 43737,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 43758,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 44013,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 45250,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 45525,
      "target": "actin filaments lack striation"
    }
  },
  {
    "edge": {
      "source": 326148,
      "target": "actin filaments lack striation"
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
      "target": "Muscles with short and/or thin myofibrils"
    }
  },
  {
    "edge": {
      "source": 31208,
      "target": "Muscles with short and/or thin myofibrils"
    }
  },
  {
    "edge": {
      "source": 31243,
      "target": "Muscles with short and/or thin myofibrils"
    }
  },
  {
    "edge": {
      "source": 31521,
      "target": "Muscles with short and/or thin myofibrils"
    }
  },
  {
    "edge": {
      "source": 35526,
      "target": "Muscles with short and/or thin myofibrils"
    }
  },
  {
    "edge": {
      "source": 37368,
      "target": "Muscles with short and/or thin myofibrils"
    }
  },
  {
    "edge": {
      "source": 38721,
      "target": "Muscles with short and/or thin myofibrils"
    }
  },
  {
    "edge": {
      "source": 39108,
      "target": "Muscles with short and/or thin myofibrils"
    }
  },
  {
    "edge": {
      "source": 39164,
      "target": "Muscles with short and/or thin myofibrils"
    }
  },
  {
    "edge": {
      "source": 39480,
      "target": "Muscles with short and/or thin myofibrils"
    }
  },
  {
    "edge": {
      "source": 39737,
      "target": "Muscles with short and/or thin myofibrils"
    }
  },
  {
    "edge": {
      "source": 40152,
      "target": "Muscles with short and/or thin myofibrils"
    }
  },
  {
    "edge": {
      "source": 40180,
      "target": "Muscles with short and/or thin myofibrils"
    }
  },
  {
    "edge": {
      "source": 41377,
      "target": "Muscles with short and/or thin myofibrils"
    }
  },
  {
    "edge": {
      "source": 43349,
      "target": "Muscles with short and/or thin myofibrils"
    }
  },
  {
    "edge": {
      "source": 48632,
      "target": "Muscles with short and/or thin myofibrils"
    }
  }
];

rootDiv.id = "rootDiv";
var instance = new App({el: rootDiv,  graph: real});
