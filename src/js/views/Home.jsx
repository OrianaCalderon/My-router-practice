import React , {useEffect,useState} from "react";

//componentes
import Personajes from "../component/Personajes.jsx";



//create your first component
const Home = () => {

	const [characters, setCharacters] = useState([]);

	const traerPersonajes= async () => {
		try{
			let response = await fetch(`https://rickandmortyapi.com/api/character`);
			let data = await response.json()
			console.log(data);

			if(response.ok){
				setCharacters(data.results);
				
			}

		}catch(error){
			console.log(error)
		}
	};

	useEffect(()=>{
		traerPersonajes();
	},[]);


	return (
		<>
			<div className="container">
				<div className="row">
					{characters.map((character)=>{
						return(
							<Personajes key={`character-${character.id}`} character={character}/>
						)
					})

					}
				</div>
			</div>
		</>
	);
};

export default Home;
