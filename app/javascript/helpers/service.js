const totalAmount = (services, plan) => {
  const servicesByPlan = services.filter((service) => service.plan === plan);
  return servicesByPlan.reduce(
    (sum, currentValue) => sum + currentValue.price, 0,
  );
};

export const annualTotalAmount = (services) => totalAmount(services, 'yearly') + (totalAmount(services, 'monthly') * 12);

export const monthlyAverageAmount = (services) => annualTotalAmount(services) / 12;
