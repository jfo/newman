const newman = require("./index.js");

const collectionPath = "./examples/sample-collection.json";
const collectionWrappedPath = "./examples/sample-collection-wrapped.json";

// calling with loaded JSON:
newman.run({ collection: require(collectionPath) }, (err, summary) =>
    console.log("Bare JSON: ", summary.run.stats)
);
newman.run({ collection: require(collectionWrappedPath) }, (err, summary) =>
    console.log("Wrapped JSON: ", summary.run.stats)
);

// calling with filepath, equivalent to CLI invocation:
newman.run({ collection: collectionPath }, (err, summary) =>
    console.log("Bare Filepath: ", summary.run.stats)
);
newman.run({ collection: collectionWrappedPath }, (err, summary) =>
    console.log("Wrapped: Filepath", summary.run.stats)
);
