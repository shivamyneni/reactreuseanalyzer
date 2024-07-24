import React from "react";

import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import CodeErrorComponent from "./CodeErrorComponent";
const CodeExpandComponent = (props) => {
	const [open, setOpen] = React.useState(false);
	const [errors, setErrors] = React.useState(props.errors || []);
	React.useState(() => {
		console.log(props.name);
	}, []);
	return (
		<div className="w-full h-full">
			<div className="flex bg-white w-full flex-row justify-between items-center px-[20px] py-[5px] rounded-t-md font-medium">
				<p>{props.name}</p>
				<div className="flex flex-row items-center justify-between ">
					<p>3</p>
					{open ? (
						<ChevronUpIcon
							color="black"
							className="w-6 h-10 ml-[5px] text-indigo-600"
							onClick={() => setOpen(!open)}
						/>
					) : (
						<ChevronDownIcon
							color="black"
							className="w-6 h-10 ml-[5px] text-indigo-600"
							onClick={() => setOpen(!open)}
						/>
					)}
				</div>
			</div>
			{!open ? <></> : <div>hello</div>}
		</div>
	);
};

export default CodeExpandComponent;
