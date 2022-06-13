export const validateSignup = (input) => {
  let errors = {};
  if (input.email) {
    let reg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if (!reg.test(input.email) || typeof input.email !== 'string') {
      errors.email = 'Please, enter a valid email'
    }
  } else {
    errors.email = 'Please, enter an email'
  }

  if (input.password) {
    let reg = /^(?=.*\d).{4,8}$/g
    if (!reg.test(input.password) || typeof input.password !== 'string') {
      errors.password = 'The password must be between 4 and 8 digits long and include at least one numeric digit.';
    };
  } else {
    errors.password = 'Please, enter a password'
  }

  if (input.nickName) {
    if (input.nickName.length <= 2 || typeof input.nickName !== 'string') {
      errors.nickName = 'The nickname must be a string with at least 3 characters.';
    };
  } else {
    errors.nickName = 'Please, enter a nickname'
  }

  if (input.firstName) {
    if (input.firstName.length <= 2 || typeof input.firstName !== 'string') {
      errors.firstName = 'We are sure that your first name contains at least 3 characters.';

    }
  } else {
    errors.firstName = 'Please, enter your name'
  }

  if (input.lastName) {
    if (typeof input.lastName !== 'string' || input.lastName.length <= 2) {
      errors.lastName = 'We are sure that your lastname contains at least 3 characters.';
    };
  } else {
    errors.lastName = 'Please, enter your lastname'
  }

  if (input.phone) {
    let reg = /^\d{10}$/g
    if (!reg.test(input.phone) || typeof input.phone !== 'string') {
      errors.phone = 'Please, enter a valid cellphone number.';
    };
  } else {
    errors.phone = 'Please, enter a cellphone number'
  }

  if (input.birthdate) {
    let inputYear = input.birthdate.slice(0, 4)
    let date = new Date()
    let currentYear = date.getFullYear()
    let reg = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g
    if (!reg.test(input.birthdate) || inputYear < 1910 || inputYear > currentYear) {
      errors.birthdate = 'Please, enter a valid date.';
    };
  } else {
    errors.birthdate = 'Please, enter your birthday'
  }

  if (input.country) {
    if (input.country.length <= 2 || typeof input.country !== 'string') {
      errors.country = 'Please, enter a valid country'
    }
  } else {
    errors.country = 'Please, enter your country'
  }

  if (Object.keys(errors).length) {
    return errors;
  } else {
    return {};
  }
};