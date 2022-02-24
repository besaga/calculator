// import { Component, Prop } from '@stencil/core';
// import { format } from '../../utils/utils';

// import Display from '../Display/Display';
// import Keypad from '../Keypad/Keypad';
// import './Calculator.css';

// class logic extends Component {
//     state = {
//         displayValue: '0',
//         numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'ce'],
//         operators: ['/', '*', '-', '+'],
//         selectedOperator: '',
//         storedValue: '',
//     };

//     componentDidMount = () => {
//         document.addEventListener('keydown', this.handleKeyPress);
//     };

//     componentWillUnmount = () => {
//         document.removeEventListener('keydown', this.handleKeyPress);
//     };

//     callOperator = () => {
//         let { displayValue, selectedOperator, storedValue } = this.state;
//         const updateStoredValue = displayValue;

//         displayValue = parseInt(displayValue, 10);
//         storedValue = parseInt(storedValue, 10);

//         switch (selectedOperator) {
//             case '+':
//                 displayValue = storedValue + displayValue;
//                 break;
//             case '-':
//                 displayValue = storedValue - displayValue;
//                 break;
//             case 'x':
//                 displayValue = storedValue * displayValue;
//                 break;
//             case '/':
//                 displayValue = storedValue / displayValue;
//                 break;
//             default:
//                 displayValue = '0';
//         }

//         displayValue = displayValue.toString();
//         selectedOperator = '';
//         if (displayValue === 'NaN' || displayValue === 'Infinity') displayValue = '0';

//         this.setState({ displayValue, selectedOperator, storedValue: updateStoredValue });
//     };

//     handleKeyPress = (event) => {
//         const { numbers, operators } = this.state;

//         if (event.key === 'Backspace') this.updateDisplay('ce');
//         if (event.key === 'Enter' || event.key === '=') this.callOperator();

//         numbers.forEach((number) => {
//             if (event.key === number) this.updateDisplay(number);
//         });

//         operators.forEach((operator) => {
//             if (event.key === operator) this.setOperator(operator);
//         });
//     };

//     setOperator = (value) => {
//         let { displayValue, selectedOperator, storedValue } = this.state;

//         if (selectedOperator === '') {
//             storedValue = displayValue;
//             displayValue = '0';
//             selectedOperator = value;
//         } else {
//             selectedOperator = value;
//         }

//         this.setState({ displayValue, selectedOperator, storedValue });
//     };

//     updateDisplay = (value) => {
//         let { displayValue } = this.state;

//         if (value === '.' && displayValue.includes('.')) value = '';

//         if (value === 'ce') {
//             displayValue = displayValue.substr(0, displayValue.length - 1);
//             if (displayValue === '') displayValue = '0';
//         } else {
//             displayValue === '0' ? (displayValue = value) : (displayValue += value);
//         }

//         this.setState({ displayValue });
//     };

//     render() {
//         const { displayValue, numbers, operators } = this.state;

//         return (
//             <div className="calculator-container">
//                 <Display displayValue={displayValue} />
//                 <Keypad
//                     handleKeyPress={this.handleKeyPress}
//                     operators={operators}
//                     callOperator={this.callOperator}
//                     numbers={numbers}
//                     setOperator={this.setOperator}
//                     updateDisplay={this.updateDisplay}
//                 />
//             </div>
//         );
//     }
// }

