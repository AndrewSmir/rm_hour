import { compose } from "./compose.js";
import { promisify } from "./promisify.js";
import { autoCurry } from "./auto-curry.js";
import "./styles/style.css";
import "./babel.js";
import { composeRunner } from "./compose-runner.ts";

composeRunner.run();
