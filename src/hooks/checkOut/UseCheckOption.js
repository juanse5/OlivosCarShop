import { useState } from 'react';

const useCheckoutLogic = () => {
  const [deliveryOption, setDeliveryOption] = useState('');
  const [paymentOption, setPaymentOption] = useState('');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);

  const handleDeliveryChange = (event) => {
    const selectedOption = event.target.value;
    setDeliveryOption(selectedOption);
    setShowPaymentOptions(selectedOption === 'pickup');
    setShowAddressForm(selectedOption === 'home' || selectedOption === 'terminal');
  };

  const handlePaymentChange = (event) => {
    setPaymentOption(event.target.value);
  };

  return {
    deliveryOption,
    paymentOption,
    showPaymentOptions,
    showAddressForm,
    handleDeliveryChange,
    handlePaymentChange,
  };
};

export default useCheckoutLogic;
