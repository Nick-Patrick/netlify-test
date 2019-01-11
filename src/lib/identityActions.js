import netflifyIdentity from 'netlify-identity-widget'

export function loginUser() {
  if (netflifyIdentity && netflifyIdentity.currentUser()) {
    const {
      app_metadata, created_at, confirmed_at, email, id, user_metadata
    } = netflifyIdentity.currentUser()
    console.log('netflix', netflifyIdentity)
    localStorage.setItem(
      'currentUser',
      JSON.stringify({...app_metadata, created_at, confirmed_at, email, id, ...user_metadata})
    )
  }
}

export function logoutUser() {
  localStorage.removeItem('currentUser')
}