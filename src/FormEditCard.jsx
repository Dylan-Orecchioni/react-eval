// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './AddCardForm.css';

// eslint-disable-next-line react/prop-types
const FormEditCard = ({ showModal, closeModal, handleEditCard, handleDeleteCard, initialNom, initialPrenom, initialAge, initialGenre }) => {
  const [editedNom, setEditedNom] = useState(initialNom);
  const [editedPrenom, setEditedPrenom] = useState(initialPrenom);
  const [editedAge, setEditedAge] = useState(initialAge);
  const [editedGenre, setEditedGenre] = useState(initialGenre);

  const handleChangeNom = (e) => setEditedNom(e.target.value);
  const handleChangePrenom = (e) => setEditedPrenom(e.target.value);
  const handleChangeAge = (e) => setEditedAge(e.target.value);
  const handleChangeGenre = (e) => setEditedGenre(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleEditCard(editedNom, editedPrenom, editedAge, editedGenre);
    closeModal();
  };

  const handleDeleteClick = () => {
    handleDeleteCard(initialNom, initialPrenom, initialAge, initialGenre);
    closeModal();
  }
  return (
      <div className={`modal ${showModal ? 'show' : ''}`}>
        <div className="modal-overlay" onClick={closeModal}></div>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modifier la carte</h5>
          </div>
          <div className="modal-body">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label htmlFor="nom" className="form-label">
                  Nom
                </label>
                <input type="text" className="form-control" id="nom" value={editedNom} onChange={handleChangeNom} />
              </div>
              <div className="mb-3">
                <label htmlFor="prenom" className="form-label">
                  Prénom
                </label>
                <input type="text" className="form-control" id="prenom" value={editedPrenom} onChange={handleChangePrenom} />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Âge
                </label>
                <input type="number" className="form-control" id="age" value={editedAge} onChange={handleChangeAge} />
              </div>
              <div className="mb-3">
                <label htmlFor="genre" className="form-label">
                  Genre
                </label>
                <select className="form-control" id="genre" value={editedGenre} onChange={handleChangeGenre}>
                  <option value="">--Choisir un genre--</option>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                </select>
              </div>
              <div className="modal-footer d-flex justify-content-center align-items-center ">
                <button className="btn btn-primary col-12" type="submit">Enregistrer</button>
                <button className="btn btn-danger col-12" type="button" onClick={handleDeleteClick}>Supprimer</button>
                <button className="btn btn-secondary col-12" onClick={closeModal}>
                  Fermer
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
  );
};

export default FormEditCard;
