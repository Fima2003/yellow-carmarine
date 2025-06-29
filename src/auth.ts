export function getStoredUser(): string | null {
  return localStorage.getItem('username');
}

export function storeUser(username: string) {
  localStorage.setItem('username', username);
}