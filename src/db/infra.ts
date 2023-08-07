import { SeatLocation, SeatType } from "../models";

export const LocationJSON = [
    {
        "locationId": "L1",
        "locationName": "ChennaiTCO"
    },
    {
        "locationId": "L2",
        "locationName": "Kochin"   
    }
]

export const BlockJSON = [
    {
        locationId: "L1",
        blocks: [
            {
                "blockId" : "L1B1",
                "blockName": "SDB1",
                "floorCount": 6
            },
            {
                "blockId" : "L1B2",
                "blockName": "SDB2",
                "floorCount": 6
            }
        ]
    },
    {
        locationId: "L2",
        blocks: [
            {
                "blockId" : "L2B1",
                "blockName": "SDB1",
                "floorCount": 6
            },
            {
                "blockId" : "L2B2",
                "blockName": "SDB2",
                "floorCount": 6
            }
        ]
    }    
]

export const FloorJSON = [
    {
        "blockId" : "L1B1",
        floors : [
            {floorId: "F1"},
            {floorId: "F2"}
        ]
    },
    {
        "blockId" : "L1B2",
        floors : [
            {floorId: "F1"},
            {floorId: "F2"}
        ]
    },
    {
        "blockId" : "L2B1",
        floors : [
            {floorId: "F1"},
            {floorId: "F2"}
        ]
    },
    {
        "blockId" : "L2B2",
        floors : [
            {floorId: "F1"},
            {floorId: "F2"}
        ]
    }
]

export const WingJSON = [
    {
        floorId: "F1",
        wings: [
           {
            wingId: "W2",
            wingName: "WEST",
            totalSeats: 50
           },
           {
            wingId: "W1",
            wingName: "EAST",
            totalSeats: 50
           }
        ]
    },
    {
        floorId: "F2",
        wings: [
           {
            wingId: "W2",
            wingName: "WEST",
            totalSeats: 50
           },
           {
            wingId: "W1",
            wingName: "EAST",
            totalSeats: 50
           }
        ]
    }
]

export const SeatJSON = [{
    wingId: "W1",
    seats: [
        {
            seatId: "S1",
            seatType: SeatType.RowSeat,
            seatLocation: SeatLocation.WindowFace
        },
        {
            seatId: "S2",
            seatType: SeatType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "S3",
            seatType: SeatType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "S4",
            seatType: SeatType.RowSeat,
            seatLocation: SeatLocation.Middle
        }
    ]
},{
    wingId: "W2",
    seats: [
        {
            seatId: "S1",
            seatType: SeatType.RowSeat,
            seatLocation: SeatLocation.WindowFace
        },
        {
            seatId: "S2",
            seatType: SeatType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "S3",
            seatType: SeatType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "S4",
            seatType: SeatType.RowSeat,
            seatLocation: SeatLocation.Middle
        }
    ]
}]

export const JSON = [
    {
        "locationId": "L1",
        "locationName": "ChennaiTCO",
        "blocks": [
            {
                "blockId" : "B1",
                "blockName": "SDB1",
                "floorCount": 6,
                "floors" : [
                    {
                        floorId: "F1",
                        wings: [
                            {
                                wingId: "W1",
                                wingName: "EAST",
                                totalSeats: 50,
                                seats: [
                                    {
                                        seatId: "S1",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    }
                                ]   
                            },
                            {
                                wingId: "W2",
                                wingName: "WEST",
                                totalSeats: 50,
                                seats: [
                                    {
                                        seatId: "S1",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    }
                                ]   
                            }
                        ]
                    },
                    {
                        floorId: "F2",
                        wings: [
                            {
                                wingId: "W1",
                                wingName: "EAST",
                                totalSeats: 50,
                                seats: [
                                    {
                                        seatId: "S1",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    }
                                ]   
                            },
                            {
                                wingId: "W2",
                                wingName: "WEST",
                                totalSeats: 50,
                                seats: [
                                    {
                                        seatId: "S1",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    }
                                ]   
                            }
                        ]
                    }
                ]
            },
            {
                "blockId" : "B2",
                "blockName": "SDB2",
                "floorCount": 6,
                "floors" : [
                    {
                        floorId: "F1",
                        wings: [
                            {
                                wingId: "W1",
                                wingName: "EAST",
                                totalSeats: 50,
                                seats: [
                                    {
                                        seatId: "S1",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    }
                                ]   
                            },
                            {
                                wingId: "W2",
                                wingName: "WEST",
                                totalSeats: 50,
                                seats: [
                                    {
                                        seatId: "S1",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    }
                                ]   
                            }
                        ]
                    },
                    {
                        floorId: "F2",
                        wings: [
                            {
                                wingId: "W1",
                                wingName: "EAST",
                                totalSeats: 50,
                                seats: [
                                    {
                                        seatId: "S1",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    }
                                ]   
                            },
                            {
                                wingId: "W2",
                                wingName: "WEST",
                                totalSeats: 50,
                                seats: [
                                    {
                                        seatId: "S1",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    }
                                ]   
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "locationId": "L2",
        "locationName": "Kochin",
        "blocks": [
            {
                "blockId" : "B1",
                "blockName": "SDB1",
                "floorCount": 6,
                "floors" : [
                    {
                        floorId: "F1",
                        wings: [
                            {
                                wingId: "W1",
                                wingName: "EAST",
                                totalSeats: 50,
                                seats: [
                                    {
                                        seatId: "S1",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    }
                                ]   
                            },
                            {
                                wingId: "W2",
                                wingName: "WEST",
                                totalSeats: 50,
                                seats: [
                                    {
                                        seatId: "S1",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    }
                                ]   
                            }
                        ]
                    },
                    {
                        floorId: "F2",
                        wings: [
                            {
                                wingId: "W1",
                                wingName: "EAST",
                                totalSeats: 50,
                                seats: [
                                    {
                                        seatId: "S1",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    }
                                ]   
                            },
                            {
                                wingId: "W2",
                                wingName: "WEST",
                                totalSeats: 50,
                                seats: [
                                    {
                                        seatId: "S1",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    }
                                ]   
                            }
                        ]
                    }
                ]
            },
            {
                "blockId" : "B2",
                "blockName": "SDB2",
                "floorCount": 6,
                "floors" : [
                    {
                        floorId: "F1",
                        wings: [
                            {
                                wingId: "W1",
                                wingName: "EAST",
                                totalSeats: 50,
                                seats: [
                                    {
                                        seatId: "S1",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    }
                                ]   
                            },
                            {
                                wingId: "W2",
                                wingName: "WEST",
                                totalSeats: 50,
                                seats: [
                                    {
                                        seatId: "S1",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    }
                                ]   
                            }
                        ]
                    },
                    {
                        floorId: "F2",
                        wings: [
                            {
                                wingId: "W1",
                                wingName: "EAST",
                                totalSeats: 50,
                                seats: [
                                    {
                                        seatId: "S1",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    }
                                ]   
                            },
                            {
                                wingId: "W2",
                                wingName: "WEST",
                                totalSeats: 50,
                                seats: [
                                    {
                                        seatId: "S1",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    }
                                ]   
                            }
                        ]
                    }
                ]
            }
        ]
    }
]