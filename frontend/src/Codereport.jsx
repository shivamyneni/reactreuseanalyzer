import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";
import CodeErrorComponent from "./components/CodeErrorComponent";
import Navbar from "./components/Navbar";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
export default function Codereport() {
	const [lintingResults, setLintingResults] = React.useState([]);
	const serverUrl = process.env.REACT_APP_SERVER_API_URL;
	const ruleIdToCategory = {
		"reactreuse-plugin/component-composition": "Best Practices",
		"reactreuse-plugin/component-naming": "Naming",
		"reactreuse-plugin/hooks-usage": "Best Practices",
		"reactreuse-plugin/descriptive-props": "Best Practices",
		"reactreuse-plugin/prop-spreading": "Best Practices",
		"reactreuse-plugin/prop-naming": "Naming",
		"reactreuse-plugin/inline-styling": "Best Practices",
		"reactreuse-plugin/default-props": "Best Practices",
		"reactreuse-plugin/uncontrolled-component": "Best Practices",
		"reactreuse-plugin/component-size": "Best Practices",
		"reactreuse-plugin/consistent-jsx-spacing": "Stylistic Issues",
		"reactreuse-plugin/inline-event-binding": "Best Practices",
		"reactreuse-plugin/state-init-constructor": "Best Practices",
	};

	// function filterRulesByRule(ruleId) {
	//   const filteredRules = [];
	//   for (const [ruleId, rule] of rules) {
	//     if (rule.meta && rule.meta.docs.ruleId === ruleId) {
	//       filteredRules.push({
	//         ruleId,
	//         description: rule.meta.docs.description,
	//         category: rule.meta.docs.category,
	//       });
	//     }
	//   }
	//   return filteredRules;
	// }

	async function lintUploadedFiles() {
		console.log("called");
		try {
			const response = await fetch(`${serverUrl}/lint`, {
				method: "GET",
			});
			console.log(response.ok);
			if (response.ok) {
				console.log(response);
				const result = await response.json();

				setLintingResults(result);
				console.log(lintingResults);

				// Handle success, maybe update UI or display a success message
			} else {
				console.error("Linting failed:", response.statusText);
				// Handle failure, display an error message or take appropriate action
			}
		} catch (error) {
			console.error("Error while linting files:", error);
			// Handle errors, such as network issues
		}
	}

	const deleteAllFiles = async () => {
		try {
			const response = await fetch(`${serverUrl}/delete-files`, {
				method: "DELETE",
			});
			if (response.ok) {
				console.log("FIles cleaned");
			}
		} catch (error) {}
	};

	React.useEffect(() => {
		lintUploadedFiles();
	}, []);

	return (
		<div className="w-screen h-screen bg-blue-100 flex flex-col   ">
			<Navbar />
			<div className="bg-blue-100 w-screen flex flex-col  items-center h-auto p-10">
				<div className="flex bg-white w-full flex-row justify-between items-center px-[20px] py-[15px] font-semibold rounded-t-md border-gray-200 border-b-2 ">
					<p>Component Name</p>
					<p className="">Number of errors</p>
				</div>
				{lintingResults &&
					lintingResults.map((key, index) => {
						return (
							<CodeErrorComponent name={key.fileName} errors={key.results[0]} />
						);
					})}
			</div>
		</div>
	);
}
