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
import CodeExpandComponent from "./CodeExpandComponent";

const CodeErrorComponent = (props) => {
	const [open, setOpen] = React.useState(false);
	const [errors, setErrors] = React.useState(props.errors || []);

	React.useState(() => {
		console.log(props.name);
		console.log(props.errors);
		setErrors(props.errors);
	}, []);
	return (
		<div className="w-full h-auto">
			<div className="flex bg-white w-full flex-row justify-between items-center px-[20px] py-[5px] rounded-t-md border-b-[2px] font-medium">
				<p>{props.name}</p>
				<div className="flex flex-row items-center justify-between ">
					<p>{props.errors.length}</p>
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
			{open
				? errors.map((error) => {
						return (
							<div className="w-full h-auto bg-white flex flex-row items-center justify-between px-[20px]">
								<p className=" w-[20%] font-normal">{error.ruleId}</p>
								<p className="font-medium w-[50%] ml-[10px] text-red-500">
									{error.message}
								</p>
								<p className="font-medium w-[10%] ml-[10px] text-red-500">
									line:{error.line}
								</p>
								<p className="font-medium w-[10%] ml-[10px] text-red-500">
									column:{error.column}
								</p>
								<br />
							</div>
						);
				  })
				: null}
			{/* {open
        ? errors.map((error) => {
            return (
              <CodeExpandComponent
                name={error.filePath}
                errors={error.messages}
              />
            );
          })
        : null} */}

			{/* // <CodeExpandComponent /> : null} */}
		</div>
	);
};

export default CodeErrorComponent;
