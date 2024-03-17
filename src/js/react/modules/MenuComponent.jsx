import React, { useState, useEffect } from "react";
import data from "../../../json/chinchilasDate.json";
import MenuListItem from "./MenuListItem.jsx"

const MenuComponent = () => {



	const [jsonData, setJsonData] = useState(data);

	const displayListItems = () => {

		if (!jsonData) return null;

		return jsonData.map((item, index) => (
			<MenuListItem key={index} item={item} />
		));

	};

	return <>
		<aside className="main__menu">
			<h2 className="main__aside-title">Хутро</h2>
			<form id="checkboxForm" action="" className="main__form">
				<ul className="main__list">
					{displayListItems(jsonData)}
				</ul>
				<button className="main__button" type="submit">Вирахувати</button>
			</form>
		</aside>

	</>
}

export default MenuComponent;