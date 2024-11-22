const express = require("express");
const path = require("path");
const multer = require("multer");
const app = express();
const cors = require("cors");
const fs = require("fs");
const eslint = require("eslint");
const port = process.env.PORT || 3001;
const linter = new eslint.ESLint();
const { Linter, RuleTester } = require("eslint");
const { CLIEngine } = require("eslint");
const dotenv = require("dotenv-flow");
// Define an array to store linting results
const lintingResults = [];
const linterx = new Linter();
const rules = linterx.getRules();

dotenv.config();
const corsOptions = {
	origin: process.env.FRONTEND_URL, // frontend URI (ReactJS)
	methods: ["GET", "POST", "DELETE", "PUT"],
	allowedHeaders: ["Content-Type"],
};


console.log(process.env.FRONTEND_URL);
app.use(cors(corsOptions));

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, "../frontend/build"))); // Assuming your React app is built into the 'build' folder

// Define API routes here
app.get("/api/hello", (req, res) => {
	res.send({ express: "Hello From Express" });
});

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/"); // Define the 'uploads/' where uploaded files will be stored
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage });

// app.post("/upload", upload.array("files", 10), (req, res) => {
//   if (req.files && req.files.length > 0) {
//     res.status(200).json({ message: "Files uploaded successfully" });
//   } else {
//     res.status(400).json({ error: "File upload failed" });
//   }
// });

app.delete("/delete-files", (req, res) => {
	fs.readdir("uploads/", (err, files) => {
		if (err) {
			console.error("Error reading 'uploads/':", err);
			return res.status(500).send("Internal Server Error");
		}

		files.forEach((file) => {
			if (file === ".gitkeep") return;
			fs.unlink(`${"uploads/"}${file}`, (unlinkErr) => {
				if (unlinkErr) {
					console.error(`Error deleting file ${file}:`, unlinkErr);
				} else {
					console.log(`File ${file} deleted successfully.`);
				}
			});
		});

		return res.status(200).send("All files deleted successfully.");
	});
});

app.delete("/delete/:id", (req, res) => {
	fs.readdir("uploads/", (err, files) => {
		if (err) {
			console.error("Error reading 'uploads/':", err);
			return res.status(500).send("Internal Server Error");
		}

		files.forEach((file) => {
			if (file == req.params.id) {
				fs.unlink(`${"uploads/"}${file}`, (unlinkErr) => {
					if (unlinkErr) {
						console.error(`Error deleting file ${file}:`, unlinkErr);
					} else {
						console.log(`File ${file} deleted successfully.`);
					}
				});
			}
		});

		return res.status(200).send("All files deleted successfully.");
	});
});

app.post("/upload", upload.array("files", 10), async (req, res) => {
	if (!req.files || req.files.length === 0) {
		return res.status(400).json({ error: "File upload failed" });
	}

	// for (const file of req.files) {
	//   if (file.originalname) {
	//     const codeToLint = fs.readFileSync(file.path, "utf8");
	//     const lintResults = await linter.lintText(codeToLint);
	//     console.log(lintingResults);
	//     const duplicateCheck = lintingResults.some((result) => {
	//       result.fileName == file.originalname;
	//     });
	//     console.log(duplicateCheck);
	//     if (!duplicateCheck) {
	//       lintingResults.push({
	//         fileName: file.originalname,
	//         results: lintResults,
	//       });
	//     }

	//     // console.log(lintResults);
	//   } else {
	//     if (duplicateCheck) {
	//       lintingResults.push({
	//         fileName: file.originalname,
	//         results: lintResults,
	//       });
	//     }
	//     // For non-TSX files, add an entry with empty results
	//     lintingResults.push({
	//       fileName: file.originalname,
	//       results: [],
	//     });
	//   }
	// }

	res.status(200).json({
		message: "Files uploaded and linted successfully",
		lintingResults,
	});
});

function filterRulesByRule(ruleId) {
	const filteredRules = [];
	for (const [ruleId, rule] of rules) {
		if (rule.meta && rule.meta.docs.ruleId === ruleId) {
			filteredRules.push({
				ruleId,
				description: rule.meta.docs.description,
				category: rule.meta.docs.category,
			});
		}
	}
	return filteredRules;
}

app.get("/lint", async (req, res) => {
	console.log("/lint called");
	try {
		const files = fs.readdirSync("uploads/");
		const filePath = path.join("uploads/");
		console.log(filePath);
		const lintingResults = [];
		for (const file of files) {
			const filePath = path.join("uploads/", file);
			console.log(filePath);
			const fileContent = fs.readFileSync(filePath, "utf8");

			// Perform ESLint linting on the file content
			const lintResults = await linter.lintText(fileContent, { filePath });

			lintingResults.push({
				fileName: file,
				results: lintResults.map((result) => result.messages),
				rules: rules,
			});

			// Process linting results
		}

		console.log(lintingResults);
		return res.status(200).json(lintingResults);
	} catch (err) {
		console.error("Error while linting files:", err);
	}
});

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
