import React, { useState } from 'react';
import rvclogo from './rvclogo.png';

const Dashboard = () => {
    const initialColors = [
        'linear-gradient(to right, #0023FE, #8C5EFF, #EF9DFF)',
        'linear-gradient(to right, #FF036E, #FFAB89, #FFEACF)',
        'linear-gradient(to right, #2CFF9C, #00FFD4, #64FFFF)',
        'linear-gradient(to right, #FF9E9E, #FF8EB2, #FF8EEA)',
    ];

    const [cards, setCards] = useState([
        {
            id: 1,
            text: 'Card 1',
            colorIndex: 0,
            isOpen: false,
        },
        {
            id: 2,
            text: 'Card 2',
            colorIndex: 1,
            isOpen: false,
        },
        {
            id: 3,
            text: 'Card 3',
            colorIndex: 2,
            isOpen: false,
        },
        {
            id: 4,
            text: 'Card 4',
            colorIndex: 3,
            isOpen: false,
        },
    ]);

    const cardContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        background: '#000',
        boxShadow: '0 0 0 1000000px black',
    };

    const cardStyle = {
        width: 'calc(100% - 25px)',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        color: '#fff',
        marginBottom: '20px',
        borderRadius: '11px',
        cursor: 'pointer',
    };

    const dropdownStyle = {
        overflowY: 'scroll',
        position: 'fixed',
        bottom: -1,
        left: 0,
        height: '50%',
        width: '100%',
        backgroundColor: 'white',
        zIndex: '100',
        borderTopRightRadius: '20px',
        borderTopLeftRadius: '20px',
        border: '0px solid #000',
        boxShadow: '0px 3px 13px rgba(255, 255, 255, 0.5), 0px 0px 10px 1px rgba(255, 255, 255, 0.5)', // Transparent white glow
    };

    // Function to toggle the dropdown for a specific card by ID
    const toggleDropdown = (cardId) => {
        const updatedCards = cards.map((card) => ({
            ...card,
            isOpen: card.id === cardId ? !card.isOpen : false,
        }));
        setCards(updatedCards);
    };

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1px', marginTop: '-30px' }}>
                <div>
                    {/* Logo */}
                    <img src={rvclogo} alt="RV Connected" style={{ height: '150px', width: '150px' }} />
                </div>
            </div>
            <div className="dashboard" style={cardContainerStyle}>
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="card"
                        style={{
                            ...cardStyle,
                            background: initialColors[card.colorIndex],

                        }}
                        onClick={() => toggleDropdown(card.id)} // Pass the card ID to the toggle function
                    >
                        {card.text}
                        {card.isOpen && (
                            <div className="dropdown" style={dropdownStyle}>
                                {/* Dropdown content */}
                                This is the dropdown content for {card.text}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
