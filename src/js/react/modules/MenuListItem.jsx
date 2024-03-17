import React from "react";

const ListItem = ({ item }) => {
  return (
    <li className="main__item">
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
  );
};

export default ListItem;