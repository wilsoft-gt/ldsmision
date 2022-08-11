import { useState } from 'react'
import { SetData } from './components/setData'
import { MissionaryTag } from './components/missionaryTag'
import { MyCommitment } from './components/MyCommitment'
import { TakeScreenshot } from './helpers'
import "./style.css"

function App() {
  const [data, setData] = useState(null)

  if (data) {
	  return (
		<div id="mainMenu">
			<div className="left">
				<h1>Mi gafete</h1>
				<MissionaryTag lname={data.lname} gender={data.gender} />
				<button onClick={ () => TakeScreenshot(`${data.fname}_${data.lname}_gafete`,"#tag", 9)} className="download">Descargar</button>
			</div>
			<div className="right">
				<h1>Mi Compromiso</h1>
				<MyCommitment {...data} />
				<button onClick={ () => TakeScreenshot(`${data.fname}_${data.lname}_compromiso`,"#commitment", 15)}>Descargar</button>
			</div>
		</div>
	  )
  }
  else {
	  return <SetData setUserData={setData} />
  }
}

export default App
