import React from "react";
import ReactDOM from "react-dom/client";

import Gennes from "./modules/Gennes.jsx"
import MenuComponent from "./modules/menuComponent.jsx";

const App = () => (
	<>
		<header className="header">
			<div className="header__container">
				<div className="header__logo">Chinchillas</div>
			</div>
		</header>
		<div className="main">
			<section className="main__container">
				<div className="main__body chinchilla">
					<div className="chinchilla__block">
						<div className="chinchilla__parents">
							<div className="chinchilla__parents--wrapper">
								<div className="chinchilla__male annimal-icon" >бархат</div>
								<div className="chinchilla__female annimal-icon" >гомобеж </div>
							</div>
						</div>
						<div className="chinchilla__childs">
							<div className="chinchilla__child annimal-icon">
								<div className="chinchilla-name">вильсон</div>
							</div>
							<div className="chinchilla__child annimal-icon">
								<div className="chinchilla-name">вильсон</div>
							</div>
							<div className="chinchilla__child annimal-icon">
								<div className="chinchilla-name">вильсон</div>
							</div>
						</div>
					</div>
				</div>
				<MenuComponent/>

			</section>
		</div>

	</>
);

// Об'єкт для виводу
const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");

// Main rendering
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
