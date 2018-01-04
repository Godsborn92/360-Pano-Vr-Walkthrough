
var config = {
    camera: {
        fov: {
            default: 90,
            min: 70,
            max: 110
        }
    },

    story: {
        uid: "hotspots-actions-story",
        name: "Hotspots with actions Story",
        slug: "hotspots-actions-story",
        description: "This is sample of hotspots actions",

        scenes: [
            {
                uid: "scene-1",
                name: "First Scene",
                slug: "first-scene",
                description: "This is the first scene",

                media: {
                    uid: "media-1",
                    type: "image",

                    source: {
                        format: "equi",
                        url:"./images/1583-GR.jpg"
                    }
                },

                hotspots: [
                     {
                        uid: "hotspot-s1-1",

                        transform: {
                            position: {
                                theta: -90,
                                phi: 150,
                                radius: 600
                            },

                            rotation: {
                                x: 85,
                                y: 90
                            }
                        },

                        geometry: {
                            type: "plane",
                            options: {
                                width: 100,
                                height: 100
                            }
                        },

                        material: {
                            image:
                                "https://cdn.forgejs.org/samples/hotspots-actions/ChevronUpCircle_white_64.png",
								
                            opacity: 1
                        },

                        events: {
                            onClick: ["action-loadscene-4", "action-camera-1"]
                        }
                    },

                    {
                        uid: "hotspot-s1-2",

                        transform: {
                            position: {
                                theta: -175,
                                phi: -5,
                                radius: 700
                            },

                            rotation: {
                                x: 82,
                                y: 175
                            }
                        },

                        geometry: {
                            type: "plane",
                            options: {
                                width: 100,
                                height: 100
                            }
                        },

                        material: {
                            image:
                                "https://cdn.forgejs.org/samples/hotspots-actions/ChevronUpCircle_white_64.png",
                            opacity: 1
                        },

                        events: {
                            onClick: ["action-loadscene-2", "action-camera-1"]
                        }
                    }
                ]
            },

            {
                uid: "scene-2",
                name: "Second Scene",
                slug: "second-scene",
                description: "This is the second scene",

                media: {
                    uid: "media-2",
                    type: "image",

                    source: {
                        format: "equi",
                        url:
                            "./images/1583-KIT.jpg"
                    }
                },

                hotspots: [
                    {
                        uid: "hotspot-s2-1",

                        transform: {
                            position: {
                                theta: -20,
                                phi: 165,
                                radius: 700
                            },

                            rotation: {
                                x: -82,
                                y: -175
                            }
                        },

                        geometry: {
                            type: "plane",
                            options: {
                                width: 100,
                                height: 100
                            }
                        },

                        material: {
                            image:
                                "https://cdn.forgejs.org/samples/hotspots-actions/ChevronUpCircle_white_64.png",
								
                            opacity: 1
                        },

                        events: {
                            onClick: ["action-loadscene-1", "action-camera-2"]
                        }
                    },

                    {
                        uid: "hotspot-s2-2",

                        transform: {
                            position: {
                                theta: -70,
                                phi: -15,
                                radius: 700
                            },

                            rotation: {
                                x: 85,
                                y: 60
                            }
                        },

                        geometry: {
                            type: "plane",
                            options: {
                                width: 100,
                                height: 100
                            }
                        },

                        material: {
                            image:
                                "https://cdn.forgejs.org/samples/hotspots-actions/ChevronUpCircle_white_64.png",
                            opacity: 1
                        },

                        events: {
                            onClick: ["action-loadscene-4", "action-camera-3"]
                        }
                    }
                ]
            },

            {
                uid: "scene-3",
                name: "Third Scene",
                slug: "third-scene",
                description: "This is the third scene",

                media: {
                    uid: "media-3",
                    type: "image",

                    source: {
                        format: "equi",
                        url:
                            "./images/1583-mbath.jpg"
                    }
                },

                hotspots: [
                    {
                        uid: "hotspot-s3-1",

                        transform: {
                            position: {
                                theta: 0,
                                phi: -11,
                                radius: 600
                            },

                            rotation: {
                                x: 85,
                                y: 0
                            }
                        },

                        geometry: {
                            type: "plane",
                            options: {
                                width: 100,
                                height: 100
                            }
                        },

                        material: {
                            image:
                                "https://cdn.forgejs.org/samples/hotspots-actions/ChevronUpCircle_white_64.png",
                            opacity: 1
                        },

                        events: {
                            onClick: ["action-loadscene-4", "action-camera-4"]
                        }
                    },

                    {
                        uid: "hotspot-s3-2",

                        transform: {
                            position: {
                                theta: 178,
                                phi: -8,
                                radius: 700
                            },

                            rotation: {
                                x: 82,
                                y: -178
                            }
                        },

                        geometry: {
                            type: "plane",
                            options: {
                                width: 100,
                                height: 100
                            }
                        },

                        material: {
                            image:
                                "https://cdn.forgejs.org/samples/hotspots-actions/ChevronUpCircle_white_64.png",
                            opacity: 1
                        },

                        events: {
                            onClick: ["action-loadscene-2", "action-camera-5"]
                        }
                    }
                ]
            },

            {
                uid: "scene-4",
                name: "Forth Scene",
                slug: "forth-scene",
                description: "This is the forth scene",

                media: {
                    uid: "media-4",
                    type: "image",

                    source: {
                        format: "equi",
                        url:
                            "./images/1583-mbed.jpg"
                    }
                },

                hotspots: [
                    {
                        uid: "hotspot-s4-1",

                        transform: {
                            position: {
                                theta: -178,
                                phi: -11,
                                radius: 700
                            },

                            rotation: {
                                x: 82,
                                y: 178
                            }
                        },

                        geometry: {
                            type: "plane",
                            options: {
                                width: 100,
                                height: 100
                            }
                        },

                        material: {
                            image:
                                "https://cdn.forgejs.org/samples/hotspots-actions/ChevronUpCircle_white_64.png",
                            opacity: 1
                        },

                        events: {
                            onClick: ["action-loadscene-3", "action-camera-6"]
                        }
					},
					
					{
						uid: "hotspot-s4-2",

                        transform: {
                            position: {
                                theta: 130,
                                phi: -40,
                                radius: 700
                            },

                            rotation: {
                                x: 82,
                                y: -158
                            }
                        },

                        geometry: {
                            type: "plane",
                            options: {
                                width: 100,
                                height: 100
                            }
                        },

                        material: {
                            image:
                                "https://cdn.forgejs.org/samples/hotspots-actions/ChevronUpCircle_white_64.png",
                            opacity: 1
                        },

                        events: {
                            onClick: ["action-loadscene-1", "action-camera-5"]
                        }
					}
                ]
            }
        ]
    },

    actions: [
        {
            uid: "action-loadscene-1",
            target: "viewer.story",

            method: {
                name: "loadScene",
                args: ["scene-1"]
            }
        },

        {
            uid: "action-loadscene-2",
            target: "viewer.story",

            method: {
                name: "loadScene",
                args: ["scene-2"]
            }
        },

        {
            uid: "action-loadscene-3",
            target: "viewer.story",

            method: {
                name: "loadScene",
                args: ["scene-3"]
            }
        },

        {
            uid: "action-loadscene-4",
            target: "viewer.story",

            method: {
                name: "loadScene",
                args: ["scene-4"]
            }
        },

        {
            uid: "action-camera-1",
            target: "viewer.camera",

            method: {
                name: "lookAt",
                args: [2, 0, 0]
            }
        },

        {
            uid: "action-camera-2",
            target: "viewer.camera",

            method: {
                name: "lookAt",
                args: [5, 0, 0]
            }
        },

        {
            uid: "action-camera-3",
            target: "viewer.camera",

            method: {
                name: "lookAt",
                args: [-175, 0, 0]
            }
        },

        {
            uid: "action-camera-4",
            target: "viewer.camera",

            method: {
                name: "lookAt",
                args: [0, 0, 0]
            }
        },

        {
            uid: "action-camera-5",
            target: "viewer.camera",

            method: {
                name: "lookAt",
                args: [178, 0, 0]
            }
        },

        {
            uid: "action-camera-6",
            target: "viewer.camera",

            method: {
                name: "lookAt",
                args: [-178, 0, 0]
            }
        }
    ]
};

// Create a viewer
var viewer = new FORGE.Viewer("container", config);

document.getElementById("vr").onclick = function() {
    var el = document.getElementById("vr").firstChild;
    if (el.data == "Exit VR") {
        el.data = "Enter VR";
    } else {
        el.data = "Exit VR";
    }
    viewer.renderer.toggleVR();
};

document.getElementById("home").onclick = function(){
	window.location.assign("index.html");
};

//Find the Canvas
/*window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 10, 10);
}*/