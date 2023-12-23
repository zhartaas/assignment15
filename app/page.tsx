"use client";
import Input from "@/components/Input";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";
import Checkbox from "@/components/Checkbox";
import Radiobutton from "@/components/Radiobutton";
import ToggleSwitch from "@/components/ToggleSwitch";
import Button from "@/components/Button";
import DropdownButton from "@/components/DropdownButton";
import GroupButton from "@/components/GroupButton";
import Slider from "@/components/Slider";
import Form from "@/components/Form";
import Card from "@/components/Card";
import AccordionContainer from "@/components/AccordionContainer";
import Collapse from "@/components/Collapse";
import LabelsAndBadges from "@/components/LabelsAndBages";
import ProgressBar from "@/components/ProgressBar";
import Tooltip from "@/components/Tooltip";
import MessageBox from "@/components/MessageBox";
import ModalWindow from "@/components/ModalWindow";
import Alert from "@/components/Alert";
import Icons from "@/components/Icons";
import CustomSVGIcon from "@/img/CustomSVGIcon.svg";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import ImageCarousel from "@/components/ImageCarousel";
import Table from "@/components/Table";

import { useState } from "react";

export default function Home() {
    // Input get value
    const [textInput, setTextInput] = useState("");
    const handleTextInputChange = (event) => {
        setTextInput(event.target.value);
    };
    const inputStyling =
        "border-2 rounded-md p-2 w-80 text-sm font-sans text-black";

    // Select (array, get value from child component)
    let arr = [
        { value: "ALA", text: "Almaty" },
        { value: "DXB", text: "Dubai" },
        { value: "KGF", text: "Karagandy" },
    ];
    const [selectedOption, setSelectedOption] = useState(arr[0].value);
    const handleSelectedOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    // TextArea value
    const [textAreaValue, setTextAreaValue] = useState("");
    const handleTextAreaValueChange = (e) => {
        setTextAreaValue(e.target.value);
    };

    // Checkbox
    const [checkbox, setCheckbox] = useState(false);
    const handleCheckbox = () => {
        setCheckbox(!checkbox);
    };

    //radio
    const [radio, setRadio] = useState("Apples");
    const handleRadioChange = (e) => {
        setRadio(e.target.value);
    };
    // toggle
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };

    // button
    const [clicked, setClicked] = useState(0);
    const handleClicked = () => {
        setClicked(clicked + 1);
    };

    // dropdown
    const [selectedDropdownOption, setSelectedDropdownOption] = useState("");
    const handleDropdownClick = (e) => {
        setSelectedDropdownOption(e.target.value);
    };
    let dropdownOptions = {
        title: "Dropdown",
        url: "/#",
        submenuButtonStyling:
            "w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 font-medium text-sm px-5 py-2",
        submenu: [
            {
                title: "Apple",
                onClick: handleDropdownClick,
            },
            {
                title: "Banana",
                onClick: handleDropdownClick,
            },
            {
                title: "Orange",
                onClick: handleDropdownClick,
            },
        ],
    };

    // groupbutton

    const [groupButtonOption, setGroupButtonOption] = useState("");

    const handleGroupClick = (e) => {
        setGroupButtonOption(e.target.value);
    };

    const groupButtonStyling =
        "w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 font-medium text-sm px-5 py-2";
    const groupButtonOptions = [
        {
            title: "Apple",
            onClick: handleGroupClick,
        },
        {
            title: "Banana",
            onClick: handleGroupClick,
        },
        {
            title: "Orange",
            onClick: handleGroupClick,
        },
    ];

    // slider
    const [sliderValue, setSliderValue] = useState(50);
    const handleSliderValueChange = (e) => {
        setSliderValue(e.target.value);
    };

    // form
    const formFields = [
        { name: "username", label: "Username" },
        { name: "password", label: "Password", type: "password" },
    ];
    const handleFormSubmit = (formData) => {
        console.log("Form data in App.js:", formData);
    };

    // collapse
    const [isContentOpen, setContentOpen] = useState(true);

    // label and badges
    const labelAndBadgeItems = [
        { label: "Status", badge: "Active", color: "green" },
        { label: "Priority", badge: "High", color: "yellow" },
        { label: "Type", badge: "Bug", color: "red" },
    ];

    // progressbar
    const [progressbar, setProgressBar] = useState(10);
    const handleProgress = () => {
        if (progressbar === 100) return;
        setProgressBar(progressbar + 2.5);
    };

    // messagebox
    const [isMessageBoxVisible, setIsMessageBoxVisible] = useState(false);

    const showMessage = () => {
        setIsMessageBoxVisible(true);
    };
    const closeMessage = () => {
        setIsMessageBoxVisible(false);
    };

    // modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    //alert
    const [alert, setAlert] = useState(null);

    const showAlert = (type, message) => {
        setAlert({ type, message });
    };

    const closeAlert = () => {
        setAlert(null);
    };

    //img carousel
    const carouselImages = [
        "../img/img1.jpg",
        "../img/img2.jpg",
        "../img/img3.jpg",
    ];
    // table
    const tableData = [
        { id: 1, name: "John Doe", age: 25, city: "New York" },
        { id: 2, name: "Jane Doe", age: 30, city: "San Francisco" },
        { id: 3, name: "Bob Smith", age: 28, city: "Los Angeles" },
        // Add more data as needed
    ];

    const tableColumns = [
        { key: "id", header: "ID" },
        { key: "name", header: "Name" },
        { key: "age", header: "Age" },
        { key: "city", header: "City" },
    ];

    return (
        <main className="block bg-slate-100">
            <label className="text-xl">Form Input: {textInput}</label>
            <div className="w-full flex justify-between">
                <Input
                    styling={inputStyling}
                    value={textInput}
                    onChange={handleTextInputChange}
                    placeholder="Text input"
                    type="text"
                />
                <Input
                    styling={inputStyling}
                    placeholder="Email input"
                    type="email"
                />
                <Input
                    styling={inputStyling}
                    placeholder="Password input"
                    type="password"
                />
                <Input
                    styling={inputStyling}
                    placeholder="Number input"
                    type="number"
                />
                <Input
                    styling={inputStyling}
                    placeholder="File input"
                    type="file"
                />
                <Input
                    styling={inputStyling}
                    placeholder="Date input"
                    type="date"
                />
            </div>
            <hr />
            <label className="text-xl">Form select: {selectedOption}</label>
            <Select
                value={selectedOption}
                onChange={handleSelectedOptionChange}
                options={arr}
            ></Select>
            <hr />
            <label className="text-xl">Text area: {textAreaValue}</label>
            <TextArea
                value={textAreaValue}
                onChange={handleTextAreaValueChange}
                placeholder="TextArea"
            />
            <hr />
            <label className="text-xl">
                Checkbox: {checkbox === true ? "checked" : "not checked"}
            </label>
            <br />
            <Checkbox
                value={checkbox}
                onChange={handleCheckbox}
                styling={"rounded-md"}
            ></Checkbox>
            <hr />
            <label className="text-xl">Radio Buttons: {radio}</label>
            <div className="flex space-between">
                <Radiobutton
                    id="1"
                    styling="m-2 h-4 w-4"
                    onChange={handleRadioChange}
                    value="Apples"
                    isSelected={radio === "Apples"}
                ></Radiobutton>
                <label>Apples</label>
                <Radiobutton
                    id="2"
                    styling="m-2 h-4 w-4"
                    onChange={handleRadioChange}
                    value="Bananas"
                    isSelected={radio === "Bananas"}
                ></Radiobutton>
                <label>Bananas</label>
            </div>
            <label>
                Toggle switch: {toggle === true ? "toggled" : "not toggled"}
            </label>
            <br />
            <ToggleSwitch
                value=""
                checked={toggle}
                onChange={handleToggle}
            ></ToggleSwitch>
            <hr />
            <label className="text-xl">Button: clicked {clicked} times</label>
            <br />
            <Button
                styling="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleClicked}
                buttonText="Click!"
            ></Button>
            <hr />
            <label className="text-xl">
                Dropdown Button: clicked {selectedDropdownOption}
            </label>
            <DropdownButton
                mainButtonStyling="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                dropdownParams={dropdownOptions}
            ></DropdownButton>
            <hr />
            <label className="text-xl">Group Button: {groupButtonOption}</label>
            <br />
            <GroupButton
                styling={groupButtonStyling}
                buttons={groupButtonOptions}
            ></GroupButton>
            <hr />
            <Slider
                value={sliderValue}
                onChange={handleSliderValueChange}
            ></Slider>
            <span className="ml-4">{sliderValue}</span>
            <hr />
            <Form
                formFields={formFields}
                onFormSubmit={handleFormSubmit}
                labelstyle="text-gray-700 text-sm font-bold mb-2"
                inputStyle={inputStyling}
            ></Form>
            <label className="text-xl">Card Example</label>
            <div className="flex flex-col w-1/4">
                <Card cardStyling="bg-white p-4 rounded-md shadow-md">
                    <Input
                        styling="border-2 rounded-md p-2 w-80 text-sm font-sans text-black"
                        value="Example Value"
                        onChange={() => {}}
                        placeholder="Text input"
                        type="text"
                    />
                </Card>

                <Card cardStyling="bg-gray-200 p-6 rounded-md shadow-md">
                    <ToggleSwitch value="" checked={true} onChange={() => {}} />
                    <Button
                        styling="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {}}
                        buttonText="Click me!"
                    />
                    <Select
                        value="selectedValue"
                        onChange={() => {}}
                        options={[
                            { value: "option1", text: "Option 1" },
                            { value: "option2", text: "Option 2" },
                        ]}
                    />
                    {/* Add more components as needed */}
                </Card>
            </div>
            <hr />
            <label className="text-xl">Accordion example</label>
            <div className="flex ">
                <AccordionContainer
                    title="Accordion Title 1"
                    containerStyling="bg-gray-200 p-6 rounded-md shadow-md w-1/4"
                >
                    <ToggleSwitch value="" checked={true} onChange={() => {}} />
                    <Button
                        styling="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {}}
                        buttonText="Click me!"
                    />
                    <Select
                        value="selectedValue"
                        onChange={() => {}}
                        options={[
                            { value: "option1", text: "Option 1" },
                            { value: "option2", text: "Option 2" },
                        ]}
                    />
                </AccordionContainer>
                <AccordionContainer
                    title="Accordion Title 2"
                    containerStyling="bg-gray-200 p-6 rounded-md shadow-md w-1/4"
                >
                    <Card cardStyling="bg-white p-4 rounded-md shadow-md">
                        <span>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Cumque dolore illum alias. Quo exercitationem
                            sed similique, quibusdam ratione laudantium
                            architecto eos molestias cum odio voluptates rerum
                            cumque quisquam doloremque asperiores?
                        </span>
                    </Card>
                </AccordionContainer>
            </div>
            <Button
                styling="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setContentOpen((prev) => !prev)}
                buttonText="Expand collapse"
            ></Button>
            <Collapse isOpen={isContentOpen}>
                <Card cardStyling="bg-gray-200 p-6 rounded-md shadow-md">
                    <ToggleSwitch value="" checked={true} onChange={() => {}} />
                    <Button
                        styling="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {}}
                        buttonText="Click me!"
                    />
                    <Select
                        value="selectedValue"
                        onChange={() => {}}
                        options={[
                            { value: "option1", text: "Option 1" },
                            { value: "option2", text: "Option 2" },
                        ]}
                    />
                </Card>
            </Collapse>
            <LabelsAndBadges
                items={labelAndBadgeItems}
                badgeStyling="bg-blue-500 text-white"
            />
            <label className="text-xl">Example Progress Bar</label>
            <Button
                styling="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleProgress}
                buttonText="increase progress"
            ></Button>
            <div className="w-1/4">
                <ProgressBar
                    percentage={progressbar}
                    barStyling="bg-gray-300"
                    labelStyling="text-gray-700"
                />
            </div>
            <label className="text-xl">Example Tooltip</label>

            <Tooltip text="This is a tooltip">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Hover me
                </button>
            </Tooltip>
            <hr />
            <label className="text-xl">Message Box</label>

            <Button
                styling="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={showMessage}
                buttonText="Show Message"
            />

            {isMessageBoxVisible && (
                <MessageBox
                    message="This is a message box!"
                    onClose={closeMessage}
                />
            )}

            <hr />
            <label className="text-xl">Modal Window</label>
            <Button
                styling="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={openModal}
                buttonText="Open Modal"
            />

            <ModalWindow isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-2xl font-bold mb-4">Modal Content</h2>
                <p>This is the content inside the modal.</p>
                {/* Add more content as needed */}
            </ModalWindow>

            <hr />
            <label htmlFor="" className="text-xl">
                Alert
            </label>
            <Button
                styling="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={() => showAlert("success", "Operation successful!")}
                buttonText="Show Success Alert"
            />

            <Button
                styling="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
                onClick={() => showAlert("error", "Operation failed!")}
                buttonText="Show Error Alert"
            />

            {alert && (
                <Alert
                    type={alert.type}
                    message={alert.message}
                    onClose={closeAlert}
                />
            )}
            <hr />

            <label htmlFor="" className="text-xl">
                Icon
            </label>
            <Icons svg="../img/CustomSVGIcon1.svg" size={24} color="blue" />
            <hr />
            <label htmlFor="" className="text-xl">
                Image Carousel
            </label>
            <ImageCarousel images={carouselImages} />

            <label htmlFor="" className="text-xl">
                Table
            </label>
            <Table data={tableData} columns={tableColumns} />

            <div className="h-32"></div>
        </main>
    );
}
