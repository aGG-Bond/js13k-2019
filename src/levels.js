// autogenerated file
const levels = [
  {
    id: 0,
    walls: [
      [
        { x: 416, y: 768 },
        { x: 480, y: 768 },
        { x: 480, y: 288 },
        { x: 576, y: 288 },
        { x: 576, y: 160 },
        { x: 320, y: 160 },
        { x: 320, y: 288 },
        { x: 416, y: 288 },
        { x: 416, y: 768 }
      ]
    ],
    polys: [
      [
        { x: 480, y: 768 },
        { x: 480, y: 288 },
        { x: 416, y: 288 },
        { x: 416, y: 768 }
      ],
      [
        { x: 480, y: 288 },
        { x: 576, y: 288 },
        { x: 576, y: 160 },
        { x: 320, y: 160 },
        { x: 320, y: 288 },
        { x: 416, y: 288 }
      ]
    ],
    doors: [
      {
        name: "door1",
        polygon: [
          { x: 416, y: 288 },
          { x: 480, y: 288 },
          { x: 480, y: 297 },
          { x: 416, y: 297 },
          { x: 416, y: 288 }
        ],
        open: false
      }
    ],
    switches: [
      {
        x: 448,
        y: 480,
        name: "switch1",
        targets: ["door1"],
        type: "momentary",
        pressed: 0
      }
    ],
    start: { x: 448, y: 736 },
    end: { x: 448, y: 224 }
  },
  {
    id: 1,
    walls: [
      [
        { x: 288, y: 960 },
        { x: 416, y: 960 },
        { x: 416, y: 896 },
        { x: 512, y: 896 },
        { x: 512, y: 704 },
        { x: 416, y: 640 },
        { x: 544, y: 544 },
        { x: 672, y: 544 },
        { x: 672, y: 608 },
        { x: 576, y: 608 },
        { x: 576, y: 736 },
        { x: 832, y: 736 },
        { x: 832, y: 608 },
        { x: 736, y: 608 },
        { x: 736, y: 480 },
        { x: 512, y: 480 },
        { x: 512, y: 352 },
        { x: 512, y: 352 },
        { x: 544, y: 352 },
        { x: 544, y: 224 },
        { x: 416, y: 224 },
        { x: 416, y: 352 },
        { x: 448, y: 352 },
        { x: 448, y: 480 },
        { x: 320, y: 576 },
        { x: 320, y: 704 },
        { x: 448, y: 768 },
        { x: 448, y: 832 },
        { x: 416, y: 832 },
        { x: 416, y: 800 },
        { x: 288, y: 800 },
        { x: 288, y: 960 }
      ]
    ],
    polys: [
      [
        { x: 512, y: 704 },
        { x: 416, y: 640 },
        { x: 448, y: 768 },
        { x: 512, y: 896 }
      ],
      [
        { x: 320, y: 704 },
        { x: 448, y: 768 },
        { x: 416, y: 640 },
        { x: 320, y: 576 }
      ],
      [
        { x: 672, y: 544 },
        { x: 672, y: 608 },
        { x: 736, y: 608 },
        { x: 736, y: 480 }
      ],
      [
        { x: 736, y: 480 },
        { x: 512, y: 480 },
        { x: 544, y: 544 },
        { x: 672, y: 544 }
      ],
      [
        { x: 512, y: 480 },
        { x: 448, y: 480 },
        { x: 320, y: 576 },
        { x: 416, y: 640 },
        { x: 544, y: 544 }
      ],
      [{ x: 448, y: 768 }, { x: 448, y: 832 }, { x: 512, y: 896 }],
      [
        { x: 448, y: 832 },
        { x: 416, y: 832 },
        { x: 416, y: 896 },
        { x: 512, y: 896 }
      ],
      [
        { x: 416, y: 832 },
        { x: 416, y: 800 },
        { x: 288, y: 800 },
        { x: 288, y: 960 },
        { x: 416, y: 960 },
        { x: 416, y: 896 }
      ],
      [
        { x: 672, y: 608 },
        { x: 576, y: 608 },
        { x: 576, y: 736 },
        { x: 832, y: 736 },
        { x: 832, y: 608 },
        { x: 736, y: 608 }
      ],
      [
        { x: 512, y: 480 },
        { x: 512, y: 352 },
        { x: 448, y: 352 },
        { x: 448, y: 480 }
      ],
      [
        { x: 512, y: 352 },
        { x: 544, y: 352 },
        { x: 544, y: 224 },
        { x: 416, y: 224 },
        { x: 416, y: 352 },
        { x: 448, y: 352 }
      ]
    ],
    doors: [
      {
        name: "door2",
        polygon: [
          { x: 448, y: 352 },
          { x: 512, y: 352 },
          { x: 512, y: 359 },
          { x: 448, y: 359 },
          { x: 448, y: 352 }
        ],
        open: false
      },
      {
        name: "door1",
        polygon: [
          { x: 448, y: 416 },
          { x: 448, y: 423 },
          { x: 512, y: 423 },
          { x: 512, y: 416 },
          { x: 448, y: 416 }
        ],
        open: false
      }
    ],
    switches: [
      {
        x: 768,
        y: 672,
        name: "switch1",
        targets: ["door1"],
        type: "momentary",
        pressed: 0
      },
      {
        x: 640,
        y: 672,
        name: "switch2",
        targets: ["door2"],
        type: "momentary",
        pressed: 0
      }
    ],
    start: { x: 352, y: 896 },
    end: { x: 480, y: 288 }
  },
  {
    id: 2,
    walls: [
      [
        { x: 448, y: 960 },
        { x: 512, y: 960 },
        { x: 512, y: 736 },
        { x: 800, y: 736 },
        { x: 800, y: 672 },
        { x: 512, y: 672 },
        { x: 512, y: 352 },
        { x: 640, y: 352 },
        { x: 640, y: 224 },
        { x: 320, y: 224 },
        { x: 320, y: 352 },
        { x: 448, y: 352 },
        { x: 448, y: 672 },
        { x: 192, y: 672 },
        { x: 192, y: 640 },
        { x: 416, y: 640 },
        { x: 416, y: 384 },
        { x: 128, y: 384 },
        { x: 128, y: 736 },
        { x: 448, y: 736 },
        { x: 448, y: 960 }
      ]
    ],
    polys: [
      [
        { x: 800, y: 736 },
        { x: 800, y: 672 },
        { x: 512, y: 672 },
        { x: 448, y: 672 },
        { x: 192, y: 672 },
        { x: 128, y: 736 },
        { x: 448, y: 736 },
        { x: 512, y: 736 }
      ],
      [
        { x: 192, y: 640 },
        { x: 416, y: 640 },
        { x: 416, y: 384 },
        { x: 128, y: 384 }
      ],
      [
        { x: 128, y: 384 },
        { x: 128, y: 736 },
        { x: 192, y: 672 },
        { x: 192, y: 640 }
      ],
      [
        { x: 448, y: 736 },
        { x: 448, y: 960 },
        { x: 512, y: 960 },
        { x: 512, y: 736 }
      ],
      [
        { x: 512, y: 672 },
        { x: 512, y: 352 },
        { x: 448, y: 352 },
        { x: 448, y: 672 }
      ],
      [
        { x: 512, y: 352 },
        { x: 640, y: 352 },
        { x: 640, y: 224 },
        { x: 320, y: 224 },
        { x: 320, y: 352 },
        { x: 448, y: 352 }
      ]
    ],
    doors: [
      {
        name: "door2",
        polygon: [
          { x: 448, y: 352 },
          { x: 512, y: 352 },
          { x: 512, y: 359 },
          { x: 448, y: 359 },
          { x: 448, y: 352 }
        ],
        open: false
      },
      {
        name: "door1",
        polygon: [
          { x: 448, y: 672 },
          { x: 448, y: 736 },
          { x: 440, y: 736 },
          { x: 440, y: 672 },
          { x: 448, y: 672 }
        ],
        open: false
      }
    ],
    switches: [
      {
        x: 352,
        y: 512,
        name: "switch",
        targets: ["door2"],
        type: "momentary",
        pressed: 0
      },
      {
        x: 769,
        y: 702,
        name: "switch1",
        targets: ["door1"],
        type: "toggle",
        pressed: 0
      }
    ],
    start: { x: 480, y: 928 },
    end: { x: 480, y: 288 }
  },
  {
    id: 3,
    walls: [
      [
        { x: 416, y: 960 },
        { x: 480, y: 960 },
        { x: 480, y: 288 },
        { x: 576, y: 288 },
        { x: 576, y: 672 },
        { x: 512, y: 672 },
        { x: 512, y: 800 },
        { x: 640, y: 800 },
        { x: 640, y: 224 },
        { x: 480, y: 224 },
        { x: 480, y: 32 },
        { x: 128, y: 32 },
        { x: 128, y: 960 },
        { x: 384, y: 960 },
        { x: 384, y: 832 },
        { x: 192, y: 832 },
        { x: 192, y: 96 },
        { x: 416, y: 96 },
        { x: 416, y: 224 },
        { x: 256, y: 224 },
        { x: 256, y: 800 },
        { x: 384, y: 800 },
        { x: 384, y: 672 },
        { x: 320, y: 672 },
        { x: 320, y: 288 },
        { x: 416, y: 288 },
        { x: 416, y: 960 }
      ]
    ],
    polys: [
      [
        { x: 576, y: 672 },
        { x: 512, y: 672 },
        { x: 512, y: 800 },
        { x: 640, y: 800 }
      ],
      [
        { x: 640, y: 800 },
        { x: 640, y: 224 },
        { x: 576, y: 288 },
        { x: 576, y: 672 }
      ],
      [
        { x: 640, y: 224 },
        { x: 480, y: 224 },
        { x: 480, y: 288 },
        { x: 576, y: 288 }
      ],
      [
        { x: 480, y: 224 },
        { x: 480, y: 32 },
        { x: 416, y: 96 },
        { x: 416, y: 224 },
        { x: 416, y: 288 },
        { x: 416, y: 960 },
        { x: 480, y: 960 },
        { x: 480, y: 288 }
      ],
      [
        { x: 480, y: 32 },
        { x: 128, y: 32 },
        { x: 192, y: 96 },
        { x: 416, y: 96 }
      ],
      [
        { x: 128, y: 32 },
        { x: 128, y: 960 },
        { x: 192, y: 832 },
        { x: 192, y: 96 }
      ],
      [
        { x: 128, y: 960 },
        { x: 384, y: 960 },
        { x: 384, y: 832 },
        { x: 192, y: 832 }
      ],
      [
        { x: 416, y: 224 },
        { x: 256, y: 224 },
        { x: 320, y: 288 },
        { x: 416, y: 288 }
      ],
      [
        { x: 256, y: 224 },
        { x: 256, y: 800 },
        { x: 320, y: 672 },
        { x: 320, y: 288 }
      ],
      [
        { x: 256, y: 800 },
        { x: 384, y: 800 },
        { x: 384, y: 672 },
        { x: 320, y: 672 }
      ]
    ],
    doors: [
      {
        name: "door1",
        polygon: [{ x: 416, y: 416 }, { x: 480, y: 416 }, { x: 416, y: 416 }],
        open: false
      },
      {
        name: "door1",
        polygon: [{ x: 416, y: 512 }, { x: 480, y: 512 }, { x: 416, y: 512 }],
        open: false
      },
      {
        name: "door1",
        polygon: [{ x: 576, y: 576 }, { x: 640, y: 576 }, { x: 576, y: 576 }],
        open: false
      }
    ],
    switches: [
      {
        x: 448,
        y: 480,
        name: "switch1",
        targets: ["door1"],
        type: "momentary",
        pressed: 0
      },
      {
        x: 320,
        y: 736,
        name: "switch1",
        targets: ["door1"],
        type: "momentary",
        pressed: 0
      },
      {
        x: 448,
        y: 576,
        name: "switch1",
        targets: ["door1"],
        type: "momentary",
        pressed: 0
      }
    ],
    start: { x: 448, y: 736 },
    end: { x: 576, y: 736 }
  },
  {
    id: 4,
    walls: [
      [
        { x: 416, y: 832 },
        { x: 480, y: 832 },
        { x: 480, y: 672 },
        { x: 576, y: 672 },
        { x: 576, y: 608 },
        { x: 480, y: 608 },
        { x: 480, y: 320 },
        { x: 416, y: 320 },
        { x: 416, y: 608 },
        { x: 320, y: 608 },
        { x: 320, y: 672 },
        { x: 416, y: 672 },
        { x: 416, y: 832 }
      ]
    ],
    polys: [
      [
        { x: 480, y: 832 },
        { x: 480, y: 672 },
        { x: 480, y: 608 },
        { x: 480, y: 320 },
        { x: 416, y: 320 },
        { x: 416, y: 608 },
        { x: 416, y: 672 },
        { x: 416, y: 832 }
      ],
      [
        { x: 480, y: 672 },
        { x: 576, y: 672 },
        { x: 576, y: 608 },
        { x: 480, y: 608 }
      ],
      [
        { x: 416, y: 608 },
        { x: 320, y: 608 },
        { x: 320, y: 672 },
        { x: 416, y: 672 }
      ]
    ],
    doors: [
      {
        name: "door1",
        polygon: [{ x: 416, y: 608 }, { x: 480, y: 608 }, { x: 416, y: 608 }],
        open: false
      },
      {
        name: "door2",
        polygon: [{ x: 416, y: 544 }, { x: 480, y: 544 }, { x: 416, y: 544 }],
        open: false
      },
      {
        name: "door3",
        polygon: [{ x: 416, y: 480 }, { x: 480, y: 480 }, { x: 416, y: 480 }],
        open: false
      },
      {
        name: "door4",
        polygon: [{ x: 416, y: 416 }, { x: 480, y: 416 }, { x: 416, y: 416 }],
        open: false
      }
    ],
    switches: [
      {
        x: 352,
        y: 640,
        name: "switch1",
        targets: ["door1", "door3"],
        type: "momentary",
        pressed: 0
      },
      {
        x: 416,
        y: 640,
        name: "switch2",
        targets: ["door3", "door4"],
        type: "momentary",
        pressed: 0
      },
      {
        x: 480,
        y: 640,
        name: "switch3",
        targets: ["door1", "door2"],
        type: "momentary",
        pressed: 0
      },
      {
        x: 544,
        y: 640,
        name: "switch4",
        targets: ["door2", "door3"],
        type: "momentary",
        pressed: 0
      }
    ],
    start: { x: 448, y: 800 },
    end: { x: 448, y: 352 }
  }
];
