import { HostContainer } from "./host-container";
import * as Adaptive from "adaptive-cards";
import * as Utils from "../utils";

export class SkypeContainer extends HostContainer {
    private _width: number;

    protected renderContainer(renderedCard: HTMLElement): HTMLElement {
        var element = document.createElement("div");
        element.className = "skypeContainer";

        // Draw the hexagon bot logo
        var botElement = document.createElement("div");
        botElement.className = "hexagon";

        var botElementIn1 = document.createElement("div");
        botElementIn1.className = "hexagon-in1";
        botElement.appendChild(botElementIn1);

        var botElementIn2 = document.createElement("div");
        botElementIn2.className = "hexagon-in2";
        botElementIn1.appendChild(botElementIn2);

        element.appendChild(botElement);

        renderedCard.style.width = this._width + "px";

        element.appendChild(renderedCard);

        return element;
    }

    constructor(width: number, styleSheet: string) {
        super(styleSheet);

        this._width = width;
    }

    public getHostConfig(): Adaptive.IHostConfig {
        return {
            supportsInteractivity: true,
            strongSeparation: {
                spacing: 40,
                lineThickness: 1,
                lineColor: "#EEEEEE"
            },
            fontFamily: "Segoe UI",
            fontSizes: {
                small: 12,
                normal: 14,
                medium: 17,
                large: 21,
                extraLarge: 26
            },
            fontWeights: {
                lighter: 200,
                normal: 400,
                bolder: 600
            },
            colors: {
                dark: {
                    normal: "#333333",
                    subtle: "#EE333333"
                },
                light: {
                    normal: "#FFFFFF",
                    subtle: "#88FFFFFF"
                },
                accent: {
                    normal: "#2E89FC",
                    subtle: "#882E89FC" 
                },
                attention: {
                    normal: "#FFD800",
                    subtle: "#DDFFD800"
                },
                good: {
                    normal: "#00FF00",
                    subtle: "#DD00FF00"
                },
                warning: {
                    normal: "#FF0000",
                    subtle: "#DDFF0000"
                }
            },
            imageSizes: {
                small: 40,
                medium: 80,
                large: 160
            },
            actions: {
                maxActions: 5,
                separation: {
                    spacing: 20
                },
                buttonSpacing: 20,
                showCard: {
                    actionMode: "popup",
                    inlineTopMargin: 16,
                    backgroundColor: "#AEEAEAEA",
                    padding: {
                        top: 16,
                        right: 16,
                        bottom: 16,
                        left: 16
                    }
                },
                actionsOrientation: "vertical",
                actionAlignment: "center"
            },
            adaptiveCard: {
                backgroundColor: "#AEEAEAEA",
                padding: {
                    left: 20,
                    top: 20,
                    right: 20,
                    bottom: 20
                }
            },
            container: {
                separation: {
                    spacing: 20
                },
                normal: {
                },
                emphasis: {
                    backgroundColor: "#EEEEEE",
                    borderColor: "#AAAAAA",
                    borderThickness: {
                        top: 1,
                        right: 1,
                        bottom: 1,
                        left: 1
                    },
                    padding: {
                        top: 10,
                        right: 10,
                        bottom: 10,
                        left: 10
                    }
                }
            },
            textBlock: {
                color: "dark",
                separations: {
                    small: {
                        spacing: 20,
                    },
                    normal: {
                        spacing: 20
                    },
                    medium: {
                        spacing: 20
                    },
                    large: {
                        spacing: 20
                    },
                    extraLarge: {
                        spacing: 20
                    }
                }
            },
            image: {
                size: "medium",
                separation: {
                    spacing: 20
                }
            },
            imageSet: {
                imageSize: "medium",
                separation: {
                    spacing: 20
                }
            },
            factSet: {
                separation: {
                    spacing: 20
                },
                title: {
                    color: "dark",
                    size: "normal",
                    isSubtle: false,
                    weight: "bolder",
                    wrap: true,
                    maxWidth: 150,
                },
                value: {
                    color: "dark",
                    size: "normal",
                    isSubtle: false,
                    weight: "normal",
                    wrap: true,
                },
                spacing: 10
            },
            input: {
                separation: {
                    spacing: 20
                }
            },
            columnSet: {
                separation: {
                    spacing: 20
                }
            },
            column: {
                separation: {
                    spacing: 20
                }
            }
        };
    }
}