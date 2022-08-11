export const MissionaryTag = ({lname, gender}) => {
	return (
		<div id="tag">
			<div id="backside">
				<span id="barrio">Barrio Pinares 1 </span>
			</div>
			<div id="info">
				<p id="name">{ gender === "m" ? "Elder" : "Hermana" } {lname}</p>
				<p id="the">LA IGLESIA DE</p>
				<p id="church">JESUCRISTO</p>
				<p id="of">DE LOS SANTOS</p>
				<p id="the2">DE LOS ULTIMOS DIAS</p>
			</div>
		</div>
	)
}
