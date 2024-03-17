import React, { useState, useEffect } from "react";
import data from "../../../json/chinchilasDate.json";

const MenuComponent = () => {

	

	const [jsonData, setJsonData] = useState(data);

	const displayListItem = (json) => {
		if (!json) return null;

		return json.map((item, index) => (
			<li key={index} className="main__item">
				<input type="checkbox" name="" id={item.id} className="main__input" />
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
				<label htmlFor={item.id} className="main__name">{item.name}</label>
			</li>
		));

	};

	return <>
		<aside className="main__menu">
			<h2 className="main__aside-title">Хутро</h2>
			<form id="checkboxForm" action="" className="main__form">
				<ul className="main__list">
					{displayListItem(jsonData)}
				</ul>
				<button className="main__button" type="submit">Вирахувати</button>
			</form>
		</aside>

	</>
}

export default MenuComponent;