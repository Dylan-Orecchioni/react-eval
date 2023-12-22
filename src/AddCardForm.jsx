// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './AddCardForm.css';
import {v4 as uuid} from "uuid";

// eslint-disable-next-line react/prop-types
const AddCardForm = ({ showModal, closeModal, handleAddCard }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [age, setAge] = useState('');
  const [genre, setGenre] = useState('');

  const handleChangeNom = (e) => setNom(e.target.value);
  const handleChangePrenom = (e) => setPrenom(e.target.value);
  const handleChangeAge = (e) => setAge(e.target.value);
  const handleChangeGenre = (e) => setGenre(e.target.value);

  const preventDefault = (event) => event.preventDefault();

  const handleAddCardClick = () => {
    if (nom && prenom && age && genre) {
      const newCard = {
        id: uuid(),
        nom: nom,
        prenom: prenom,
        age: age,
        genre: genre,
      };

      handleAddCard(newCard);

      setNom('');
      setPrenom('');
      setAge('');
      setGenre('');

      closeModal();
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
      <div className={`modal ${showModal ? 'show' : ''}`}>
        <div className={`modal ${showModal ? 'show' : ''}`}>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Ajouter une nouvelle carte</h5>
              <button className="close-btn" onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-body">
              <form onSubmit={preventDefault}>
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label">Nom</label>
                  <input type="text" className="form-control" id="nom" value={nom} onChange={handleChangeNom} />
                </div>
                <div className="mb-3">
                  <label htmlFor="prenom" className="form-label">Prénom</label>
                  <input type="text" className="form-control" id="prenom" value={prenom} onChange={handleChangePrenom} />
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">Âge</label>
                  <input type="number" className="form-control" id="age" value={age} onChange={handleChangeAge} />
                </div>
                <div className="mb-3">
                  <label htmlFor="genre" className="form-label">
                    Genre
                  </label>
                  <select className="form-control" id="genre" value={genre} onChange={handleChangeGenre}>
                    <option value="">--Choisir un genre--</option>
                    <option value="Homme">Homme</option>
                    <option value="Femme">Femme</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={closeModal}>Fermer</button>
              <button className="btn btn-primary" onClick={handleAddCardClick}>Ajouter</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddCardForm;
