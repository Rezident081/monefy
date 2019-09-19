const categories = [
  'Salary',
  'Health',
  'Home',
  'Sport',
  'Food',
  'Bills',
  'Taxi',
  'Cafe',
  'Entertainment'
]

export default categories.map((name, id) => ({
  id,
  name,
  value: 10
}))