let defaultCity = '上海'

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

const state = {
  city: defaultCity
}

export default state
