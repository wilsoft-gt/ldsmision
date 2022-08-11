import { fileToBase64 } from '../helpers'
import { useState } from 'react'

export const SetData = ({setUserData}) => {
	const [personalData, setPersonalData] = useState({
		fname: "",
		lname: "",
		gender: "",
		commitment: "",
		image: ""
	})

	const handleFile = (e) => {
		fileToBase64(e, setPersonalData, personalData)
	}

	return(
		<div id="setData">
			<h1>Mi compromiso</h1>
			<form>
				<label>Nombre
					<input type="text" id="fname" name="fname" onChange={(e) => setPersonalData({...personalData, fname:e.target.value})} />
				</label>
				<label for="lname">Apellido
					<input type="text" id="lname" name="lname" onChange={(e) => setPersonalData({...personalData, lname:e.target.value})} />
				</label>
				<label for="gender">Genero
					<select type="text" id="gender" name="gender" onChange={(e) => setPersonalData({...personalData, gender:e.target.value})}>
						<option value="f">Femenino</option>
						<option value="m">Masculino</option>
					</select>
				</label>
				<label for="commitment">Como me preparare para una mision?
					<textarea rows="10" cols="40" placeholder="orare todos los dias, estudiare las escrituras diariamente, servire todos los dias, etc..." name="commitment" onChange={(e) => setPersonalData({...personalData, commitment: e.target.value})}></textarea>
				</label>
				<label for="picture">Foto
					<input type="file" id="picture" onChange={(e) => handleFile(e)}/>
				</label>
				<button type="button" onClick={() => setUserData(personalData)}>enviar</button>
			</form>
		</div>
	)
}
