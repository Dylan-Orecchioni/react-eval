// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import imageProfile from './assets/flat-faces-icons-circle-persona-icon-115628952315akhsf8ncl.png';
import FormEditCard from "./FormEditCard.jsx";

// eslint-disable-next-line react/prop-types
const Card = ({ prenom, nom, age, genre, id, profilCard, onEditCard, onDeleteCard }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [editedNom, setEditedNom] = useState(nom);
  const [editedPrenom, setEditedPrenom] = useState(prenom);
  const [editedAge, setEditedAge] = useState(age);
  const [editedGenre, setEditedGenre] = useState(genre);

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleEditCard = (newNom, newPrenom, newAge, newGenre) => {
    setEditedNom(newNom);
    setEditedPrenom(newPrenom);
    setEditedAge(newAge);
    setEditedGenre(newGenre);

    setShowEditForm(false);
    onEditCard({ ...profilCard, nom: newNom, prenom: newPrenom, age: newAge, genre: newGenre });
  };

  const closeModal = () => {
    setShowEditForm(false);
  };
  const handleDeleteCard = () => {
    onDeleteCard(profilCard);
  }

  return (
      <>
        <div key={id} className="card" style={{ width: '18rem' }} onClick={handleEditClick}>
          <img className="card-img-top" src={imageProfile} alt="Image de photo de profil" />
          <div className="card-body d-flex flex-column align-items-center">
            <h2 className="card-title">{editedPrenom} {editedNom}</h2>
            <p className="card-text">Age : {editedAge}</p>
            <p className="card-text">Genre : {editedGenre}</p>
          </div>
        </div>

        {showEditForm && (
            <FormEditCard
                showModal={showEditForm}
                closeModal={closeModal}
                handleEditCard={handleEditCard}
                handleDeleteCard={handleDeleteCard}
                initialNom={editedNom}
                initialPrenom={editedPrenom}
                initialAge={editedAge}
                initialGenre={editedGenre}
            />
        )}
      </>
  );
};

export default Card;
