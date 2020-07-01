const calcTotalAmount = (services, plan) => {
  const servicesByPlan = services.filter((service) => service.plan === plan);
  return servicesByPlan.reduce(
    (sum, service) => sum + service.price, 0,
  );
};

export const calcAnnualTotalAmount = (services) => {
  const annualTotalPrice = calcTotalAmount(services, 'yearly') + (calcTotalAmount(services, 'monthly') * 12);
  return Math.floor(annualTotalPrice);
};

export const monthlyAverageAmount = (services) => {
  const monthlyAveragePrice = calcAnnualTotalAmount(services) / 12;
  return Math.floor(monthlyAveragePrice);
};
