export const validateLogin = (input) => {
  let errors = '';

  if (!input.email || !input.password) errors = 'An email and a password must be provided'

  let pattern = /\S+@\S+\.\S+/
  if (!pattern.test(input.email)) errors = 'User must be a valid email'

  return errors
}