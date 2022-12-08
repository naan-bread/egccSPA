import React from 'react';

const MODAL_STYLES = {
    position: 'fixed',
    top: '45%',
    left: '50%',
    borderRadius: '20px',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingBottom: '1rem',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,

}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
}


export default function Modal({open, children}) {

    if (!open) return null

    return (
        <>
            <div style={OVERLAY_STYLES}/>
            <div style={MODAL_STYLES}>
              {children}
            </div>
        </>

    )
}