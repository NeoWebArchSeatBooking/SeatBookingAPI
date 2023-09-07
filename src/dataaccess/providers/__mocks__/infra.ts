import { SeatLocation, SeatArnmentType } from "../../../models";

export const LocationJSON = [
    {
        "locationId": "TCO",
        "locationName": "ChennaiTCO"
    },
    {
        "locationId": "KOC",
        "locationName": "Kochin"   
    }
]

export const BlockJSON = [
    {
        locationId: "TCO",
        blocks: [
            {
                "blockId" : "TCOSDB1",
                "blockName": "SDSDB1",
                "floorCount": 6
            },
            {
                "blockId" : "TCOSDB2",
                "blockName": "SDSDB2",
                "floorCount": 6
            }
        ]
    },
    {
        locationId: "KOC",
        blocks: [
            {
                "blockId" : "KOCSDB1",
                "blockName": "SDSDB1",
                "floorCount": 6
            },
            {
                "blockId" : "KOCSDB2",
                "blockName": "SDSDB2",
                "floorCount": 6
            }
        ]
    }    
]

export const FloorJSON = [
    {
        "blockId" : "TCOSDB1",
        floors : [
            {floorId: "F1"},
            {floorId: "F2"}
        ]
    },
    {
        "blockId" : "TCOSDB2",
        floors : [
            {floorId: "F1"},
            {floorId: "F2"}
        ]
    },
    {
        "blockId" : "KOCSDB1",
        floors : [
            {floorId: "F1"},
            {floorId: "F2"}
        ]
    },
    {
        "blockId" : "KOCSDB2",
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
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.WindowFace
        },
        {
            seatId: "S2",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "S3",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "S4",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        }
    ]
},{
    wingId: "W2",
    seats: [
        {
            seatId: "S1",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.WindowFace
        },
        {
            seatId: "S2",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "S3",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "S4",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        }
    ]
}]

export const INFRA_JSON = [
    {
        "locationId": "TCO",
        "locationName": "ChennaiTCO",
        "blocks": [
            {
                "blockId" : "SDB1",
                "blockName": "SDSDB1",
                "floorCount": 6,
                "floors" : [
                    {
                        "floorId": "F1",
                        "status": "active"
                    },
                    {
                        "floorId": "F2",
                        "status": "active"
                    }
                ]
            },
            {
                "blockId" : "SDB2",
                "blockName": "SDSDB2",
                "floorCount": 6,
                "floors" : [
                    {
                        "floorId": "F1",
                        "status": "active"
                    },
                    {
                        "floorId": "F2",
                        "status": "active"
                    }
                ]
            }
        ]
    },
    {
        "locationId": "KOC",
        "locationName": "Kochin",
        "blocks": [
            {
                "blockId" : "SDB1",
                "blockName": "SDSDB1",
                "floorCount": 6,
                "floors" : [
                    {
                        "floorId": "F1",
                        "status": "active"
                    },
                    {
                        "floorId": "F2",
                        "status": "active"
                    },
                    {
                        "floorId": "F3",
                        "status": "disable"
                    }
                ]
            },
            {
                "blockId" : "SDB2",
                "blockName": "SDSDB2",
                "floorCount": 6,
                "floors" : [
                    {
                        "floorId": "F1",
                        "status": "active"
                    },
                    {
                        "floorId": "F2",
                        "status": "active"
                    }
                ]
            }
        ]
    }
]

export const SEATS_JOSN = [{
    locationId:'TCO',
    blockId:'SDB1',
    floorId: "F1",
    seats: [
        {
            seatId: "A101",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.WindowFace
        },
        {
            seatId: "A102",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A103",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A104",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A105",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A106",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A107",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A108",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A109",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A110",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A111",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "M101",
            seatType: SeatArnmentType.CabinSeat,
            seatLocation: SeatLocation.EntranceFace
        }
    ]
},{
    locationId:'TCO',
    blockId:'SDB1',
    floorId: "F2",
    floorKey: "TCOSDB1F2",
    seats: [
        {
            seatId: "A101",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.WindowFace
        },
        {
            seatId: "A102",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A103",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A104",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A105",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A106",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A107",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A108",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A109",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A110",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A111",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "M101",
            seatType: SeatArnmentType.CabinSeat,
            seatLocation: SeatLocation.EntranceFace
        }
    ]
},{
    locationId:'TCO',
    blockId:'SDB2',
    floorId: "F1",
    floorKey: "TCOSDB2F1",
    seats: [
        {
            seatId: "A101",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.WindowFace
        },
        {
            seatId: "A102",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A103",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A104",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A105",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A106",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A107",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A108",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A109",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A110",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A111",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "M101",
            seatType: SeatArnmentType.CabinSeat,
            seatLocation: SeatLocation.EntranceFace
        }
    ]
},{
    locationId:'TCO',
    blockId:'SDB2',
    floorId: "F2",
    floorKey: "TCOSDB2F2",
    seats: [
        {
            seatId: "A101",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.WindowFace
        },
        {
            seatId: "A102",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A103",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A104",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A105",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A106",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A107",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A108",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A109",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A110",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A111",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "M101",
            seatType: SeatArnmentType.CabinSeat,
            seatLocation: SeatLocation.EntranceFace
        }
    ]
},{
    locationId:'KOC',
    blockId:'SDB1',
    floorId: "F1",
    floorKey: "KOCSDB1F1",
    seats: [
        {
            seatId: "A101",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.WindowFace
        },
        {
            seatId: "A102",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A103",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A104",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A105",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A106",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A107",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A108",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A109",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A110",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A111",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "M101",
            seatType: SeatArnmentType.CabinSeat,
            seatLocation: SeatLocation.EntranceFace
        }
    ]
},{
    locationId:'KOC',
    blockId:'SDB1',
    floorId: "F2",
    floorKey: "KOCSDB1F2",
    seats: [
        {
            seatId: "A101",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.WindowFace
        },
        {
            seatId: "A102",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A103",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A104",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A105",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A106",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A107",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A108",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A109",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A110",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A111",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "M101",
            seatType: SeatArnmentType.CabinSeat,
            seatLocation: SeatLocation.EntranceFace
        }
    ]
},{
    locationId:'KOC',
    blockId:'SDB2',
    floorId: "F1",
    floorKey: "KOCSDB2F1",
    seats: [
        {
            seatId: "A101",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.WindowFace
        },
        {
            seatId: "A102",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A103",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A104",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A105",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A106",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A107",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A108",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A109",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A110",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A111",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "M101",
            seatType: SeatArnmentType.CabinSeat,
            seatLocation: SeatLocation.EntranceFace
        }
    ]
},{
    locationId:'KOC',
    blockId:'SDB2',
    floorId: "F3",
    floorKey: "KOCSDB2F2",
    seats: [
        {
            seatId: "A101",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.WindowFace
        },
        {
            seatId: "A102",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A103",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A104",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A105",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A106",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A107",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A108",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A109",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A110",
            seatType: SeatArnmentType.MeetingHallSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "A111",
            seatType: SeatArnmentType.RowSeat,
            seatLocation: SeatLocation.Middle
        },
        {
            seatId: "M101",
            seatType: SeatArnmentType.CabinSeat,
            seatLocation: SeatLocation.EntranceFace
        }
    ]
}]

export const OLD_JSON = [
    {
        "locationId": "TCO",
        "locationName": "ChennaiTCO",
        "blocks": [
            {
                "blockId" : "SDB1",
                "blockName": "SDSDB1",
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
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatArnmentType.RowSeat,
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
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatArnmentType.RowSeat,
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
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatArnmentType.RowSeat,
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
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    }
                                ]   
                            }
                        ]
                    }
                ]
            },
            {
                "blockId" : "SDB2",
                "blockName": "SDSDB2",
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
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatArnmentType.RowSeat,
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
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatArnmentType.RowSeat,
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
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatArnmentType.RowSeat,
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
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatArnmentType.RowSeat,
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
        "locationId": "KOC",
        "locationName": "Kochin",
        "blocks": [
            {
                "blockId" : "SDB1",
                "blockName": "SDSDB1",
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
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatArnmentType.RowSeat,
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
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatArnmentType.RowSeat,
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
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatArnmentType.RowSeat,
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
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    }
                                ]   
                            }
                        ]
                    }
                ]
            },
            {
                "blockId" : "SDB2",
                "blockName": "SDSDB2",
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
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatArnmentType.RowSeat,
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
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatArnmentType.RowSeat,
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
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatArnmentType.RowSeat,
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
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.WindowFace
                                    },
                                    {
                                        seatId: "S2",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S3",
                                        seatType: SeatArnmentType.RowSeat,
                                        seatLocation: SeatLocation.Middle
                                    },
                                    {
                                        seatId: "S4",
                                        seatType: SeatArnmentType.RowSeat,
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