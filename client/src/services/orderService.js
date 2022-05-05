
import { url } from './urls'

export const getOrders = (order) => {
  return fetch(`${url}/orders`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  })
    .then(response => response.json())
    .catch(err => console.error(err))
}

export const GetUserOrders = async (userSub) => {
  try {
    const response = await fetch(`${url}/user-orders/${userSub}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    return await response.json()
  } catch (err) {
    return console.error(err)
  }
}

export const createOrder = (order) => {
  return fetch(`${url}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  })
    .then(response => response.json())
    .catch(err => console.error(err))
}

export const updateOrder = (orderId) => {
  return fetch(`${url}/orders`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ _id: orderId })
  })
    .then(response => response.json())
    .catch(err => console.error(err))
}

