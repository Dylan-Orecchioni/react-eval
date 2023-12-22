import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import AddCardForm from "./AddCardForm.jsx";

function App() {

  const [profilCards, setProfilCards] = useState([
    {
      id: '1',
      nom: "Doe",
      prenom: "John",
      age: 25,
      genre: "Homme",
    },
    {
      id: '2',
      nom: "Doe",
      prenom: "Jena",
      age: 25,
      genre: "Femme",
    },
    {
      id: '3',
      nom: "Doe",
      prenom: "Jena",
      age: 25,
      genre: "Femme",
    },
    {
      id: '4',
      nom: "Doe",
      prenom: "Jena",
      age: 25,
      genre: "Femme",
    },
    {
      id: '5',
      nom: "Doe",
      prenom: "Jena",
      age: 25,
      genre: "Femme",
    },
    {
      id: '6',
      nom: "Doe",
      prenom: "Jena",
      age: 25,
      genre: "Femme",
    },
    {
      id: '7',
      nom: "Doe",
      prenom: "Jena",
      age: 25,
      genre: "Femme",
    }
  ]);

  const [showAddCardModal, setShowAddCardModal] = useState(false);

  const handleAddCard = (newCard) => {
    setProfilCards([...profilCards, newCard]);
    setShowAddCardModal(false);
  };

  const openAddCardModal = () => {
    setShowAddCardModal(true);
  };

  const closeAddCardModal = () => {
    setShowAddCardModal(false);
  };

  const handleEditCard = (editedCard) => {
    setProfilCards((prevCards) =>
        prevCards.map((card) => (card.id === editedCard.id ? editedCard : card))
    );

  };

  const handleDeleteCard = (deletedCard) => {
    setProfilCards((prevCards) =>
        prevCards.filter((card) => card.id !== deletedCard.id)
    );
  }

  return (
      <div className="container">
        <div className="d-flex justify-content-end mt-5">
          <button type="button" className="btn btn-primary mb-5" onClick={openAddCardModal}>
            Ajouter
          </button>
        </div>

        <div className="text-center mb-5">
          <h1>Liste des utilisateurs</h1>
        </div>

        <div className="d-flex justify-content-center align-items-center flex-wrap gap-5">
          {profilCards.map((profilCard, index) => (
            <Card
                key={index}
                profilCard={profilCard}
                handleAddCard={handleAddCard}
                onEditCard={handleEditCard}
                onDeleteCard={handleDeleteCard}
                genre={profilCard.genre}
                prenom={profilCard.prenom}
                nom={profilCard.nom}
                age={profilCard.age}
                id={profilCard.id}/>
          ))}
        </div>

        <AddCardForm
            showModal={showAddCardModal}
            closeModal={closeAddCardModal}
            handleAddCard={handleAddCard}
        />
      </div>
  );
}

export default App;
