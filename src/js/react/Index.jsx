import React from "react";
import ReactDOM from "react-dom/client";



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
								<div className="chinchilla__female annimal-icon" >гомобеж</div>
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

				<aside className="main__menu">
					<h2 className="main__aside-title">Хутро</h2>
					<form id="checkboxForm" action="" className="main__form">
						<ul className="main__list">
							<li className="main__item">
								<input type="checkbox" name="" id="standart" className="main__input" />
								<div className="main__sex">
									<div className="main__sex-wrapper">
										<input name="sex" type="radio" id="male" className="main__male--input" />
										<label htmlFor="male" className="main__male--name">Чоловіча</label>
									</div>
									<div className="main__sex-wrapper">
										<input name="sex" type="radio" id="female" className="main__female--input" />
										<label htmlFor="female" className="main__female--name">Жіноча</label>
									</div>

								</div>
								<label htmlFor="standart" className="main__name">Стандарт</label>
							</li>
							<li className="main__item">
								<input type="checkbox" name="" id="blackVelure" className="main__input" />
								<label htmlFor="blackVelure" className="main__name">Чорний оксамит</label>
							</li>
							<li className="main__item">
								<input type="checkbox" name="" id="beige" className="main__input" />
								<label htmlFor="beige" className="main__name">Бежевий</label>
							</li>
							<li className="main__item">
								<input type="checkbox" name="" id="whiteVilson" className="main__input" />
								<label htmlFor="whiteVilson" className="main__name">Білий Вільсон</label>
							</li>
							<li className="main__item">
								<input type="checkbox" name="" id="whiteVelure" className="main__input" />
								<label htmlFor="whiteVelure" className="main__name">Білий оксамит</label>
							</li>
							<li className="main__item">
								<input type="checkbox" name="" id="brownVelure" className="main__input" />
								<label htmlFor="brownVelure" className="main__name">Коричневий оксамит</label>
							</li>
							<li className="main__item">
								<input type="checkbox" name="" id="homoBeige" className="main__input" />
								<label htmlFor="homoBeige" className="main__name">Гомобежевий</label>
							</li>
							<li className="main__item">
								<input type="checkbox" name="" id="heteroBeige" className="main__input" />
								<label htmlFor="heteroBeige" className="main__name">Гетеробежевий</label>
							</li>
							<li className="main__item">
								<input type="checkbox" name="" id="violet" className="main__input" />
								<label htmlFor="violet" className="main__name">Фіолет</label>
							</li>
							<li className="main__item">
								<input type="checkbox" name="" id="saphire" className="main__input" />
								<label htmlFor="saphire" className="main__name">Сапфір</label>
							</li>
							<li className="main__item">
								<input type="checkbox" name="" id="blueDiamond" className="main__input" />
								<label htmlFor="blueDiamond" className="main__name">Блакитний діамант</label>
							</li>
							<li className="main__item">
								<input type="checkbox" name="" id="blackPearl" className="main__input" />
								<label htmlFor="blackPearl" className="main__name">Чорний перламутр</label>
							</li>
							<li className="main__item">
								<input type="checkbox" name="" id="whiteLowa" className="main__input" />
								<label htmlFor="whiteLowa" className="main__name">Білий Лова</label>
							</li>
							<li className="main__item">
								<input type="checkbox" name="" id="ebony" className="main__input" />
								<label htmlFor="ebony" className="main__name">Ебоні</label>
							</li>

						</ul>
						<button className="main__button" type="submit">Вирахувати</button>
					</form>
				</aside>
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
