import html2canvas from "html2canvas"

export const fileToBase64 = async (e, setPersonalData, personalData) => {
	e.preventDefault()
	var reader = new FileReader()
	reader.readAsDataURL(e.target.files[0])
	console.log(e.target.files)
	reader.onload = () => setPersonalData({...personalData, image: reader.result})
	reader.onerror = (error) => error
}


export const SaveImage = (url, filename) => {
	  	var link = document.createElement("a")
		link.href = url 
		link.download = filename 
		link.click()
}


export const imgToDataUrl = (url) => fetch(url)
	.then(response => response.blob())
	.then(blob => new Promise((resolve, reject) => { 
		const reader = new FileReader()
		reader.onloadend = () => resolve(reader.result)
		reader.onerror = reject
		reader.readAsDataURL(blob)
	}))
	.then(dataUrl => dataUrl)


export const TakeScreenshot = (filename, elementId, width) => {
  let el = document.querySelector(elementId)
  let size = el.style.width
  el.style.width = `${width}cm`
  html2canvas(document.querySelector(elementId)).then(canvas => {
	SaveImage(canvas.toDataURL(), `${filename}.png`)		
  })
  el.style.width = size
  el.style.maxWidth = `${width}cm`
}
