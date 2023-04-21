import { Flex, Box } from '@chakra-ui/react';
import React, { useState } from 'react';

function GasPlanSelector({ plans }) {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  }

  return (
    <div>
      <h2>Select a gas plan:</h2>
      <Flex justifyContent="space-between">
        {plans.map(plan => (
          <Box key={plan.id} onClick={() => handlePlanSelect(plan)} cursor="pointer" border="1px solid black" padding="16px" borderRadius="8px" width="30%" backgroundColor="#444444">
            <Flex direction="column" height="100%" backgroundColor={"#444444"} style={{ color: "#444444" }}>
              <Box flex="1" display="flex" justifyContent="center" alignItems="center">
                <img src={plan.image} alt={plan.company} style={{ maxWidth: '50%', maxHeight: '50%', height: 'auto' }} />
              </Box>
              <Box>
                <h3 style={{ marginBottom: '8px', color: 'white' }}>{plan.company}</h3>
                <p style={{ margin: '8px 0', color: 'white' }}>Base price: ${plan.basePrice}</p>
                <p style={{ margin: '8px 0', color: 'white' }}>Price per MQ: ${plan.pricePerMQ}</p>
                <p style={{ margin: '8px 0', color: 'white' }}>Price oscillation: {plan.priceOscillation}%</p>
                <p style={{ margin: '8px 0', color: 'white' }}>Estimated CO2 emissions: {plan.estimatedCo2Emittions} kg</p>
                <p style={{ margin: '8px 0', color: 'white' }}>Estimated green gas: {plan.estimatedGreenGas} mq</p>
                <p style={{ margin: '8px 0', color: 'white' }}>{plan.description}</p>
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
      {selectedPlan && (
        <div>
          <h2>You have selected:</h2>
          <div style={{ border: '1px solid black', backgroundColor: "444444", padding: '16px', borderRadius: '8px', width: '30%', textAlign: 'center' }}>
            <h3>{selectedPlan.company}</h3>
            <img src={selectedPlan.image} alt={selectedPlan.company} style={{ maxWidth: '50%', maxHeight: '50%', height: 'auto' }} />
            <p>{selectedPlan.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GasPlanSelector;
