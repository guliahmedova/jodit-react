import Editor from "./Editor";
import sidebarTexts from "../datas/sidebarTexts";
import { useState } from "react";
import Modal from 'react-modal';
import options from "../datas/selectBoxDatas";
import values from '../datas/values';
import JoditEditor from 'jodit-react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    height: "50vh"
  },
};

const Home = () => {
  const [text, setText] = useState([]);

  const getTextValue = (value) => {
    setText(prevState => [...prevState, value]);
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = 'black';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const sidebarTextsEl = sidebarTexts.map((item) => {
    return <div key={item.id} className="text-box">{item.text} <span onClick={() => getTextValue(item.text)} className="icon">+</span></div>
  });

  const optionsValue = options.map((item, index) => {
    return <option value={item.name} key={index}>{item.name} {item.lastName} {item.fatherName}</option>
  });

  function getClickValueText(value) {
    console.log(value);
  };

  const valuesEl = values.map((item, index) => {
    return <div key={index} onClick={() => getClickValueText(item.name)} className="value-box">{item.name} <span>+</span></div>
  });

  return (
    <div className="home">
      <div className="sidebar">
        <div className="top">
          <input type="search" />
          {sidebarTextsEl}
        </div>
        <div className="content-box">
          {text.map((item, index) =>
            <div key={index + 2}>
              <div className="show-text" key={index}>{item} <span onClick={openModal} className="icon">+</span></div>
              <Modal
                key={index + 1}
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Example Modal"
              >
                <div className="modal-title">
                  <h4 ref={(_subtitle) => (subtitle = _subtitle)}>{item}</h4>
                  <button onClick={closeModal}>X</button>
                </div>

                <div>
                  <select name="users" id="users" className="select-box">
                    {optionsValue}
                  </select>
                </div>

                <div className="values-part">
                  <h2>Dəyişənlar</h2>
                  <div className="value-container">{valuesEl}</div>
                </div>

                <div>
                  <h2>Ümumi dəyər</h2>
                    <JoditEditor/>
                </div>

                <button className="add-btn">Əlave et</button>
              </Modal>
            </div>
          )
          }
        </div>
      </div>
      <div className="content">
        <Editor value={text[text.length - 1] ? text[text.length - 1] : ''} placeholder={'test'} />
      </div>
    </div>
  )
}

export default Home;