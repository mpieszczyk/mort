"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process = require("child_process");
const selectors_1 = require("../selectors");
class GitGrep {
    run(cssFilePath, searchOnly = "", printer = null) {
        const selectors = new selectors_1.Selectors();
        const cleanSelectors = selectors.fromFile(cssFilePath);
        return selectors.findUsages(this, searchOnly, cleanSelectors, printer);
    }
    call(selector, path) {
        const call = child_process.spawnSync("git", [
            "grep",
            "-i",
            selector,
            ":!*.css",
            ":!*.scss",
            path,
        ], {
            stdio: "pipe",
            encoding: "utf-8",
        });
        // Seems to be some deviation between node 8 and 9>
        // where args is empty on 9 and greater.
        // We'll just force it in instead...
        call.args = ["git", "grep", "-i", selector, ":!*.css", ":!*.scss", path];
        return call;
    }
}
exports.GitGrep = GitGrep;
//# sourceMappingURL=gitgrep.js.map