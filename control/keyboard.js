// import { floor } from "../tool/function";

const ATTACK = " ";
const JUMP = "Shift";
const LOCK = "Control";
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const UP_ARROW = "ArrowUp";
const DOWN_ARROW = "ArrowDown";
const LEFT_ARROW = "ArrowLeft";
const RIGHT_ARROW = "ArrowRight";

export default class Keyboard {
    constructor() {
        this.keys = {};
        window.addEventListener("keydown", (event) => {
            this.keys[event.key] = true;
        });
        window.addEventListener("keyup", (event) => {
            this.keys[event.key] = false;
        });
    }

    get up() {
        return this.keys[UP] || this.keys[UP_ARROW] ? 1 : 0;
    }

    get down() {
        return this.keys[DOWN] || this.keys[DOWN_ARROW] ? 1 : 0;
    }

    get left() {
        return this.keys[LEFT] || this.keys[LEFT_ARROW] ? 1 : 0;
    }

    get right() {
        return this.keys[RIGHT] || this.keys[RIGHT_ARROW] ? 1 : 0;
    }

    get attack() {
        return !!this.keys[ATTACK];
    }

    get jump() {
        return !!this.keys[JUMP];
    }

    get lock() {
        return !!this.keys[LOCK];
    }
}
