import React, { useState, useEffect } from "react";
import data from "../../json/ChinchillasDate.json"
import ConstructorList from "../../components/ConstructorPage/ConstructorList/ConstructorList";
import ConstructorBlock from "../../components/ConstructorPage/ConstructorBlock";
import Header from "../Header/Header";

const MenuComponent = () => {



	const [jsonData, setJsonData] = useState(data);
	const [checkedBoxes, setCheckedBoxes] = useState([]);



	const displayListItems = () => {

		if (!jsonData) return null;

		return jsonData.map((item, index) => (
			<ConstructorList
				key={index}
				item={item}
				checked={checkedBoxes.includes(item.id)}

			/>
		));

	};

	return <>
		<Header />
		<section class="main__container">
			<ConstructorBlock />
			<aside className="main__menu">
				<h2 className="main__aside-title">Хутро</h2>
				<form id="checkboxForm" action="" className="main__form">
					<ul className="main__list">
						{displayListItems()}
					</ul>
					<button className="main__button" type="submit">Вирахувати</button>
				</form>
			</aside>
		</section>
	</>
}

export default MenuComponent;