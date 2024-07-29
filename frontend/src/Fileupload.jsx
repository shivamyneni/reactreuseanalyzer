import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Navbar from "./components/Navbar";
import Dropzone from "react-dropzone";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import logo from "./assets/images/logo.png";
import deleteLogo from "./assets/images/trash.svg";

export default function Fileupload() {
	const serverUrl = process.env.REACT_APP_SERVER_API_URL;

	const history = useNavigate();
	const [files, setFiles] = React.useState([]); // array of files
	const [error, setError] = React.useState(false);
	const [lintingResults, setLintingResults] = useState([]);

	const [selectedFiles, setSelectedFiles] = React.useState([]);
	const [formData, setFormData] = useState(new FormData());

	const handleFileChange = (e) => {
		const selectFiles = e.target.files;
		const newFormData = new FormData(); // Create a new FormData object

		for (let i = 0; i < selectFiles.length; i++) {
			const file = selectFiles[i];
			newFormData.append("files", file);
		}

		// Update the state with the new FormData object and selected files
		setFormData(newFormData);
		setSelectedFiles([...selectedFiles, ...Array.from(e.target.files)]);
	};

	const inspectFormData = () => {
		// Iterate through the FormData object's entries
		for (const [key, value] of formData.entries()) {
			// Check if the value is a File object
			if (value instanceof File) {
				console.log(`Key: ${key}`);
				console.log(`File Name: ${value.name}`);
				console.log(`File Type: ${value.type}`);
				console.log(`File Size: ${value.size} bytes`);
				console.log(`Last Modified: ${value.lastModified}`);
			} else {
				console.log(`Key: ${key}`);
				console.log(`Value: ${value}`);
			}
		}
	};

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
		console.log(serverUrl);
		deleteAllFiles();
	}, []);
	const handleFileUpload = async () => {
		try {
			if (selectedFiles.length > 0) {
				// const deletedResponse = await fetch(
				//   "http://localhost:3001/delete-files",
				//   {
				//     method: "DELETE",
				//   }
				// );

				const response = await fetch(`${serverUrl}/upload`, {
					method: "POST",
					body: formData,
				});
				if (response.ok) {
					const message = await response.json();
					console.log(message.lintingResults);
					console.log("Files uploaded successfully.");
				} else {
					console.error("File upload failed.");
				}

				await history("/report");
			} else {
			}
		} catch (error) {
			console.error("An error occurred:", error);
		}
	};

	const deleteFile = (filename) => {
		const newFormData = new FormData();
		const remainingFiles = selectedFiles.filter(
			(file) => file.name !== filename
		);

		remainingFiles.forEach((file) => {
			newFormData.append("files", file);
		});

		setFormData(newFormData);
		setSelectedFiles(remainingFiles);
	};

	return (
		<div className="h-full w-full flex justify-center flex-col items-center">
			<Navbar />
			<form className="w-screen flex mt-[30px] xs:Flex-col sm:flex-col md:flex-row justify-start">
				<div className="xs:w-screen sm:w-screen md:w-1/2 px-4 lg:px-6">
					<div className=" pb-12">
						<h2 className="text-2xl font-bold leading-7 text-gray-900">
							Scan the codebase!!
						</h2>
						<p className="mt-1 text-lg leading-6 text-gray-600">
							Analyze your codebase for potential reusability factors and
							errors.
						</p>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="col-span-full">
								<label
									htmlFor="cover-photo"
									className="block text-xl mb-[30px] font-bold leading-6 text-gray-900">
									Upload Files
								</label>

								<form className="xs:w-screen sm:w-screen md:w-full mt-2 flex justify-center items-center aspect-video rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
									<div className="text-center">
										<PhotoIcon
											className="mx-auto h-12 w-12 text-gray-300"
											aria-hidden="true"
										/>
										<div className="mt-4 flex text-md leading-6 text-gray-600">
											<label
												htmlFor="file-upload"
												className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
												<p className="text-md">Upload a file</p>
												<p className="pl-1 text-md ">or drag and drop</p>
												<input
													id="file-upload"
													name="files"
													type="file"
													className="sr-only"
													accept=".jsx,.js,.ts,.tsx"
													onChange={handleFileChange}
													multiple="true"
												/>
											</label>
										</div>
										<p className="text-md leading-5 text-gray-600">
											.JS, .JSX, .TS, .TSX
										</p>
									</div>
								</form>
							</div>
						</div>
					</div>

					<div className="mt-6 flex items-center justify-start gap-x-6">
						<button
							type="button"
							className="rounded-md bg-indigo-600 px-4 py-4 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							onClick={handleFileUpload}>
							Start Analysis
						</button>
					</div>
				</div>

				<div className="w-1/2 px-4 lg:px-6">
					{selectedFiles?.length > 0 && (
						<label
							htmlFor="cover-photo"
							className="block text-xl font-bold leading-6 text-gray-900  mb-[20px]">
							Uploaded Files
						</label>
					)}
					{selectedFiles?.length > 0 &&
						selectedFiles.map((file) => {
							return (
								<div>
									<div className="flex flex-row mt-[5px] justify-between items-center ">
										<div className="flex flex-row justify-center items-center">
											<img src={logo} className="w-[26px] h-[22px] mr-[8px]" />
											<p className="text-lg">{file.name}</p>
										</div>
										<a className="p-[4px]">
											<img
												src={deleteLogo}
												onClick={() => deleteFile(file.name)}
												className="w-[20px] h-[20px]  justify-end mr-[10px]"
											/>
										</a>
									</div>
								</div>
							);
						})}
				</div>
			</form>
		</div>
	);
}
