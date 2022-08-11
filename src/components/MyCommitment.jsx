import { imgToDataUrl } from '../helpers'
import {useState} from 'react'
import {countries} from '../assets/countries'
export const MyCommitment = ({fname, lname, image, commitment, gender}) => {

	const RandomCountry = () => {
		let randomChoice = Math.floor(Math.random() * countries.length)
		return countries[randomChoice]
	}	

	let [country, setCountry] = useState(RandomCountry)
	let [flag, setFlag] = useState()
	
	imgToDataUrl(`https://countryflagsapi.com/png/${country.code}`)
		.then(dataUrl => setFlag(dataUrl))

	return(
		<div id="commitment">
			<div id="user">
				<div className="imgContainer">
					<img src={image} alt="profile" />	
				</div>
				<div id="userInfo">
					<span>{`${fname} ${lname}`}</span>
					<img id="country" src={flag} /> 
					<span> Mision {country.name}</span>
				</div>
			</div>
			<div id="commitmentTest">
				<p>Yo {fname} {lname} me perpararé para servir una mission en {country.name} o en cualquier otro pais que el Señor me llame a servir, porque "hare y hare lo que el Señor ha mandado..." (1 Nefi 3:7)</p>
				<p>Y como parte de mi preparacion {commitment} lo cual me ayudara a estar list{ gender === "m" ? "o" : "a"} espiritual y temporalmente.</p>
			</div>
		</div>
	)
}
