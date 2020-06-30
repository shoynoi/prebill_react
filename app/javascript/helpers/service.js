const totalAmount = (services, plan) => {
  const servicesByPlan = services.filter((service) => service.plan === plan);
  return servicesByPlan.reduce(
    (sum, currentValue) => sum + currentValue.price, 0,
  );
};

export const annualTotalAmount = (services) => {
  const annualTotalPrice = totalAmount(services, 'yearly') + (totalAmount(services, 'monthly') * 12);
  return Math.floor(annualTotalPrice);
};

export const monthlyAverageAmount = (services) => {
  const monthlyAveragePrice = annualTotalAmount(services) / 12;
  return Math.floor(monthlyAveragePrice);
};
