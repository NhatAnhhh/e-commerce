import paymentService from '@/services/paymentService';

export const paymentAsyncOnline = data => {
  return async dispatch => {
    const result = await paymentService.paymentOnline(data);
    return result;
  };
};

export const paymentAsyncDirect = data => {
  return async dispatch => {
    const result = await paymentService.paymentDirect(data);
    return result;
  };
};
