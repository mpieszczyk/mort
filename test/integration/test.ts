const shelltest = require("shelltest");

const mort = "./dist/src/main.js";

test("it displays the filename if verbose is 1 or higher", done => {
    shelltest()
        .cmd(`${mort} -v -f ./test/fixtures/no-usages.css`)
        .expect("stdout", /test\/fixtures\/no-usages\.css/)
        .end(done);
});
