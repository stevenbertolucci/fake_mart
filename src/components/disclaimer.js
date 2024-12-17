import React, { useEffect, useState } from 'react';

const Disclaimer = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Check if disclaimer has already been shown
        const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
        if (!hasSeenDisclaimer) {
            setShow(true);
        }
    }, []);

    const handleClose = () => {
        setShow(false);
        // Set localStorage to prevent showing again
        localStorage.setItem('hasSeenDisclaimer', 'true');
    };

    if (!show) return null; // Do not render if already dismissed

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.85)', // Dimmed background
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999, // High z-index to overlay everything
            }}
        >
            <div
                style={{
                    backgroundColor: '#fff',
                    color: '#212529',
                    padding: '20px 30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                    maxWidth: '500px',
                    textAlign: 'center',
                }}
            >
                <p style={{ margin: '0 0 20px' }}>
                    <strong style={{fontSize:"24px"}}>Disclaimer:</strong> <br/>This is a fictional marketplace for humorous purposes only. <strong>Nothing is for sale.</strong> I do not own any of the items or images displayed, and the site is not for profit.
                </p>
                <button
                    onClick={handleClose}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007aff',
                        color: '#ffffff',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#005ecb'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#007aff'}
                >
                    Got it!
                </button>
            </div>
        </div>
    );
};

export default Disclaimer;