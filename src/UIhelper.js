export const formControls = [
	{type: "radio", name:"time", id:"A", value: "M", label:"Morning"},
	{type: "radio", name:"time", id:"B", value: "E", label:"Evening"},
	{type: "radio", name:"time", id:"C", value: "N", label:"Night"},
	{type: "checkbox", id:"AA", value: "TXT", label:"SMS"},
	{type: "checkbox", id:"BB", value: "WSAP", label:"Whatsapp"},
	{type: "checkbox", id:"CC", value: "FB", label:"Facebook"},
];

export const copyState = async (formValue) => {
	try{
		await navigator.clipboard.writeText(JSON.stringify(formValue));
		alert("State copied successfully!");
	} catch (e) {
		alert("Some error occured, try again later");
		console.log(e);
	}
		
}