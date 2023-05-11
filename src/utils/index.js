export const validateField = (field, value) => {
  const validate = validation[field];
  return validate(value);
};

const validation = {
  name: (name) =>  name.length > 1,
  email: (email) => email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
  address: (address) => address.length > 4,
};

export const constructOrder = () => {
  return {
    email: "",
    name: "",
    state: "Hrvatska",
    address: "",
    payingMethod: 'Pouzeće',
    conditions: false,
  };
};

export const validate = {
  name: { minLength: 2 },
  address: { minLength: 5 },
};


export const h2={
  name:'Ime',
  address:'Adresa',
  email:'Email',
}