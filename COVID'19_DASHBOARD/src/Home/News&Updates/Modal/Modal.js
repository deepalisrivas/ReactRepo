import React , {Component} from 'react';
import './Modal.css';

class Modal extends Component {
    render() {
      // Render nothing if the "show" prop is false
      if(!this.props.show) {
        return null;
      }

      const backdropStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 30
      };
  
      // The modal "window"
      const modalStyle = {
        backgroundColor: '#fff',
        borderRadius: 5,
        maxWidth: 500,
        minHeight: 200,
        margin: '0 auto',
        padding: 30
      };
  
  
      // The gray background
      
    
  
      return (
         
        <div className="backdrop" style={backdropStyle} >
          <div className="modal" style={modalStyle}>
            {this.props.children}
            <h2>COVID-19 ALERT!</h2>
            <div className="Symptoms-content">
            
            Some common symptoms that have been specifically linked to COVID-19 include:</div>
            <div className="Symptoms-list">
                <ul>
                    <li>having a cough that gets more severe over time</li>
                    <li>a low-grade fever that gradually increases in temperature</li>
                    <li>shortness of breath</li>
                    <li>persistent pain or pressure in the chest</li>
                    <li>excessive drowsiness</li>
                </ul>
            </div>
  
            <div className="footer">
              <button onClick={this.props.onClose} className="btn-close">
                Close
              </button>
            </div>
          </div>
        </div>
        
      );
    }
  }

export default Modal  