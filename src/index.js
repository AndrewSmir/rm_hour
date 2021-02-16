import { compose } from "./compose.js";
import { promisify } from "./promisify.js";
import { autoCurry } from "./auto-curry.js";
import "./styles/style.css";
import "./babel.js";
import { composeRunner } from "./compose-runner.ts";
import { slider } from "./slider.ts";

composeRunner.run();
slider.run();
