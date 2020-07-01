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

export const calcMonthlyAverageAmount = (services) => {
  const monthlyAveragePrice = calcAnnualTotalAmount(services) / 12;
  return Math.floor(monthlyAveragePrice);
};

export const formatDate = (date) => {
  if (date === null) return null;

  const dateObj = new Date(date);
  const today = new Date();
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  if (today.getFullYear() === year) {
    return `${month}月${day}日`;
  }
  return `${year}年${month}月${day}日`;
};

export const formatPlan = (plan) => {
  switch (plan) {
    case 'monthly':
      return '月額';
    case 'yearly':
      return '年額';
    default:
      return null;
  }
};
